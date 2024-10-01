import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import Header from "../components/headers/light";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import tw from "twin.macro";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Checkout = () => {
  const { handleSubmit, register, getValues } = useForm();
  const { items, emptyCart } = useCart();

  const url = process.env.REACT_APP_API_URL;
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleCheckout = async () => {
    try {
      const updatedOrderItems = items.map((item) => ({
        id: item.trueId,
        quantity: parseFloat(item.quantity),
        color: item.color,
      }));

      const data = {
        postal_code: parseFloat(formData.postal_code),
        ...formData,
        products: updatedOrderItems,
      };

      const response = await axios.post(`${url}/orders`, data, {
        headers: {
          Authorization: `${user.token}`,
          "Content-Type": "application/json",
        },
      });

      console.log("Order berhasil:", response.data);
      emptyCart();
      setShowModal(false);
      navigate("/orders");
    } catch (err) {
      console.log("Error saat checkout:", err);
    }
  };

  const handleInputChange = (data) => {
    setFormData(data);
    setShowModal(true);
  };

  const amountCost = () => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const amountFormat = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const ModalContainer = tw.div`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 overflow-y-auto overflow-x-hidden`;
  const ModalContent = tw.div`bg-white p-8 rounded-lg`;
  const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-4 py-8 lg:py-12`;
  const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
  const CancelButton = tw.button`text-sm mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md ml-5 focus:outline-none cursor-pointer`;

  return (
    <AnimationRevealPage>
      <Header className="mb-8" />
      <Container>
        <Content>
          <div>
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-100 dark:border-gray-100 mb-5">
              <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900 mb-4">
                Detail Pesanan
              </h5>
              {items.map((item) => (
                <div key={item.id} className="lg:p-2 grid grid-cols-12 mb-4">
                  <div className="col-span-3 lg:col-span-2 img box pl-2">
                    <img
                      src={`${process.env.REACT_APP_API_URL}/images/${item.images[0]}`}
                      alt={item.name}
                      className="rounded-lg"
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                  <div className="col-span-9 lg:col-span-10 detail w-full lg:pl-3">
                    <h5 className="font-manrope font-bold leading-9 text-gray-900">
                      {item.title}
                    </h5>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-100 dark:border-gray-100 mb-5">
              <form onSubmit={handleSubmit(handleInputChange)}>
                <div className="mb-5">
                  <label
                    htmlFor="address"
                    className="block mb-2 text-sm font-medium"
                  >
                    Alamat
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Masukkan alamat anda disini"
                    {...register("address", { required: true })}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="payment_method"
                    className="block mb-2 text-sm font-medium"
                  >
                    Payment
                  </label>
                  <input
                    type="text"
                    id="payment_method"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Masukkan alamat anda disini"
                    {...register("payment_method", { required: true })}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="city"
                    className="block mb-2 text-sm font-medium"
                  >
                    Kota
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Masukkan kota anda disini"
                    {...register("city", { required: true })}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="postal_code"
                    className="block mb-2 text-sm font-medium"
                  >
                    Kode Pos
                  </label>
                  <input
                    type="number"
                    id="postal_code"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Masukkan kode pos anda disini"
                    {...register("postal_code", { required: true })}
                  />
                </div>
                <div className="mb-10">
                  <label
                    htmlFor="country"
                    className="block mb-2 text-sm font-medium"
                  >
                    Negara
                  </label>
                  <input
                    type="text"
                    id="country"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Masukkan negara anda disini"
                    {...register("country", { required: true })}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gray-50 border border-gray-900 text-gray-900 hover:text-white hover:bg-gray-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center"
                >
                  Checkout Now
                </button>
              </form>
            </div>
          </div>
        </Content>
      </Container>
      {showModal && (
        <ModalContainer>
          <ModalContent>
            <h2 className="text-2xl font-semibold mb-2">Konfirmasi Pesanan</h2>
            {items.map((item) => (
              <div key={item.id} className="lg:p-2 grid grid-cols-12 mb-2">
                <div className="col-span-9 lg:col-span-10 detail w-full lg:pl-3">
                  <h5 className="font-manrope font-bold leading-9 text-gray-900">
                    {item.title}
                  </h5>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
            <p>Amount: {amountFormat(amountCost())}</p>
            <hr />
            <h2 className="text-lg font-semibold mt-4">Detail Pengiriman</h2>
            <p>Alamat: {formData.address}</p>
            <p>Kota: {formData.city}</p>
            <p>Kode Pos: {formData.postalcode}</p>
            <p>Negara: {formData.country}</p>
            <button
              onClick={() => handleCheckout()}
              className="text-sm cursor-pointer bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-700"
            >
              Confirm Checkout
            </button>
            <CancelButton onClick={() => setShowModal(false)}>
              Cancel
            </CancelButton>
          </ModalContent>
        </ModalContainer>
      )}
      <Footer background="bg-white" />
    </AnimationRevealPage>
  );
};

export default Checkout;
