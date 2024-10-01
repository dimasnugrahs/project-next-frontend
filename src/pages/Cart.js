import React from "react";
import { useCart } from "react-use-cart";
import Header from "../components/headers/light";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { formatPrice } from "helpers/helpers";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

const Cart = () => {
  // Panggil fungsi dan state yang diperlukan dari useCart
  const { updateItem, removeItem, emptyCart, items, updateItemQuantity } =
    useCart();

  const user = JSON.parse(localStorage.getItem("user"));

  const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-4 py-8 lg:py-12`;
  const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;

  const handleUpdateQuantity = (id, newQuantity) => {
    // Your code here
    updateItemQuantity(id, newQuantity);
  };

  const handleRemoveItem = (id) => {
    // Your code here
    removeItem(id);
  };

  const handleEmptyCart = () => {
    emptyCart();
  };

  console.log(items);

  const calculateTotalPrice = () => {
    // Your code here
  };

  return (
    <AnimationRevealPage>
      <Header className="mb-8" />

      <Container>
        <Content>
          <div>
            <button onClick={() => handleEmptyCart()}>Clear</button>
          </div>
          {items.map((item) => (
            <div>
              <div className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4">
                <div
                  key={item.id}
                  className="col-span-12 lg:col-span-2 img box"
                >
                  <img
                    className="rounded-xl"
                    src={
                      process.env.REACT_APP_API_URL +
                      "/images/" +
                      item.images[0]
                    }
                    alt={item.title}
                    style={{ width: "100px", height: "100px" }}
                  ></img>
                </div>
                <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                  <div className="flex items-center justify-between w-full mb-4">
                    <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
                      {item.title}
                    </h5>
                    <button
                      className="rounded-full group flex items-center justify-center focus-within:outline-red-500"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          class="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                          cx="17"
                          cy="17"
                          r="17"
                          fill=""
                        />
                        <path
                          classNmae="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                          d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                          stroke="#EF4444"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div class="flex justify-between items-center">
                    <div class="flex items-center gap-4">
                      <button
                        onClick={() =>
                          handleUpdateQuantity(
                            item.id,
                            Math.min(item.stock, item.quantity + 1)
                          )
                        }
                        className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
                      >
                        <svg
                          class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                          width="18"
                          height="19"
                          viewBox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.75 9.5H14.25M9 14.75V4.25"
                            stroke=""
                            stroke-width="1.6"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        onClick={() =>
                          handleUpdateQuantity(
                            item.id,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                        className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
                      >
                        <svg
                          class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                          width="18"
                          height="19"
                          viewBox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.5 9.5H13.5"
                            stroke=""
                            stroke-width="1.6"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div>
            <Link to={user ? "/checkout" : "/login"}>
              {user ? "Checkout" : "Silahkan Login"}
            </Link>
          </div>
        </Content>
      </Container>

      <Footer background="bg-white" />
    </AnimationRevealPage>
  );
};

export default Cart;
