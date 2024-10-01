import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrdersContext = React.createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState({});
  const url = process.env.REACT_APP_API_URL;
  const user = JSON.parse(localStorage.getItem("user"));
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    postalCode: "",
    country: "",
    payment: "Credit Card",
    userId: null,
    orderItems: [],
  });

  // TODO
  // 1. Lengkapi fungsi getOrdersById
  // 2. Buatkan fungsi createOrder
  const getOrdersByUserId = async (id) => {
    try {
      const response = await axios.get(`${url}/orders`, {
        headers: {
          Authorization: `${user.token}`,
        },
      });

      setOrders(response.data);
      console.log(response.data);
    } catch (err) {
      // Your code here
      console.log(err);
    }
  };

  // Buat fungsi create order disni

  return (
    <OrdersContext.Provider
      value={{
        orders,
        setOrders,
        order,
        formData,
        setFormData,
        setOrder,
        getOrdersByUserId,
        // panggil fungsinya disini
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
// make sure use
export const useOrderContext = () => {
  return useContext(OrdersContext);
};
