import React from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";   
import styles from "../Styles/Cart.module.css";

export default function Cart() {
  const { cart, updateQty, removeFromCart } = useCart();
  const navigate = useNavigate();               

  const total = cart.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.quantity),
    0
  );

  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Your cart is empty</h2>;
  }

  return (
    <div className={styles.cartPage1}>
      <div className={styles.cartPage}>
        <table className={styles.cartTable}>
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>

          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>
                  <button
                    className={styles.removeBtn}
                    onClick={() => removeFromCart(item.name)}
                  >
                    ×
                  </button>
                </td>

                <td className={styles.productInfo}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={styles.img}
                  />
                  <span>{item.name}</span>
                </td>

                <td>${Number(item.price).toFixed(2)}</td>

                <td>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQty(item.name, Math.max(1, Number(e.target.value)))
                    }
                    className={styles.qtyInput}
                  />
                </td>

                <td>${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className={styles.updateBtn}>Update Cart</button>

        <div className={styles.couponBox}>
          <input
            type="text"
            placeholder="Coupon code"
            className={styles.couponInput}
          />
          <button className={styles.couponBtn}>Apply coupon</button>
        </div>

        <div className={styles.cartActions}>
          <div className={styles.totals}>
            <p>
              Subtotal: <span>${total.toFixed(2)}</span>
            </p>
            <p>
              Total: <span>${total.toFixed(2)}</span>
            </p>

            <button
              className={styles.checkoutBtn}
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
