import React, { useEffect } from "react";
import Header from "../components/headers/light";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { useOrderContext } from "context/order_context";

const Orders = () => {
  const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-4 py-8 lg:py-12`;
  const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;

  const url = process.env.REACT_APP_API_URL;
  const user = JSON.parse(localStorage.getItem("user"));

  // Mengambil state dan fungsi dari context
  const { orders, getOrdersByUserId } = useOrderContext();

  useEffect(() => {
    // Memanggil fungsi untuk mengambil pesanan berdasarkan ID user
    getOrdersByUserId();
  }, []);

  return (
    <AnimationRevealPage>
      <Header className="mb-8" />
      <Content>
        <div>
          {/* {orders.map((order) => (
            <div
              key={order.id}
              className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-100 dark:border-gray-100 mb-5"
            >
              <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
                  Detail Pengiriman
                </h5>
                <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                  <p>Alamat : {order.address} </p>
                  <p>Kode Pos : {order.postal_code}</p>
                  <p>Metode Pembayaran : {order.payment_method}</p>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-10 py-4 bg-white detail w-full lg:pl-3 mt-8 rounded-lg">
                <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
                  Item Pesanan
                </h5>
                {order.order_items.map((item) => (
                  <div
                    key={item.id}
                    className="border-b border-gray-300 pb-2 mb-2"
                  >
                    <div className="col-span-3 lg:col-span-2 img box pl-2">
                      <img
                        src={`${process.env.REACT_APP_API_URL}/images/${item.product.images[0]}`}
                        alt={item.name}
                        className="rounded-lg"
                        style={{ width: "100px", height: "100px" }}
                      />
                    </div>
                    <p>Nama Produk: {item.product.title}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Harga: Rp {item.product.price.toLocaleString()}</p>
                  </div>
                ))}
              </div>
            </div>
          ))} */}

          <p>Pesanan berhasil dibuat!</p>
        </div>
      </Content>
      <Footer background="bg-white" />
    </AnimationRevealPage>
  );
};

export default Orders;
