import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";   // ✅ FIX: import useCart
import styles from "../Styles/Checkout.module.css";
import Footer from "./Footer";

export default function Checkout() {
  const navigate = useNavigate();
  const { cart } = useCart();   // ✅ FIX: get cart from context

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleOrder = () => {
    navigate("/order-success"); // ✅ Only navigate, do NOT clear cart
  };

  return (
    <>
      <div className={styles.checkoutPage}>
        <div className={styles.wrapper}>
          
          {/* Billing Form */}
          <div className={styles.billingBox}>
            <h2>Billing Details</h2>

            <div className={styles.formGrid}>
              <input placeholder="First Name" />
              <input placeholder="Last Name" />
              <select>
                <option>Select Country</option>
              </select>
              <input placeholder="Street Address" />
              <input placeholder="Apartment, suite, unit (optional)" />
              <input placeholder="Town / City" />
              <select>
                <option>Select State</option>
              </select>
              <input placeholder="Postcode" />
              <input placeholder="Phone" />
              <input placeholder="Email Address" />
            </div>
          </div>

          {/* Order Summary */}
          <div className={styles.orderBox}>
            <h2>Your Order</h2>

            <table className={styles.orderTable}>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Subtotal</th>
                </tr>
              </thead>

              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>
                      {item.name} × {item.quantity}
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className={styles.totalRow}>
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className={styles.placeOrderBtn} onClick={handleOrder}>
              Place Order
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
