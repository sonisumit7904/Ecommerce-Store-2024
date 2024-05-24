import React, { Fragment } from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard.js";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemsToCart,
  removeItemFromCart,
} from "../../actions/cartAction.js";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData.js";

const Cart = ({ history }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (id, quantity, stock) => {
    if (stock <= quantity) {
      return;
    }
    const newQty = quantity + 1;
    dispatch(addItemsToCart(id, newQty));
  };
  const decreaseQuantity = (id, quantity, stock) => {
    if (1 >= quantity) {
      return;
    }
    const newQty = quantity - 1;
    dispatch(addItemsToCart(id, newQty));
  };

  const deleteCartItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <Fragment>
    <MetaData title={`Cart`}/>
      {cartItems.length === 0 ? (
        <Fragment>
          <div className="emptyCart">
            <RemoveShoppingCartIcon />
            <Typography>No Product In Your Cart</Typography>
            <Link to="/products">View Products</Link>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          {/* Cart Column Headings */}
          <div className="cartPage">
            <div className="cartHeader">
              <p>Product</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>

            {/* CartItem */}
            {cartItems &&
              cartItems.map((item) => (
                <div className="cartContainer">
                  <CartItemCard
                    item={item}
                    deleteCartItem={deleteCartItem}
                    key={item.product}
                  />
                  <div className="cartInput">
                    <button
                      onClick={() =>
                        decreaseQuantity(
                          item.product,
                          item.quantity,
                          item.stock
                        )
                      }
                    >
                      -
                    </button>
                    <input type="number" readOnly value={item.quantity} />
                    <button
                      onClick={() =>
                        increaseQuantity(
                          item.product,
                          item.quantity,
                          item.stock
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <p className="cartSubtotal">{`₹${
                    item.price * item.quantity
                  }`}</p>
                </div>
              ))}

            {/* Gross Profit */}
            <div className="cartGrossProfit">
              <div></div>
              <div className="cartGrossProfitBox">
                <p>Gross Total</p>
                <p>{`₹${cartItems.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                )}`}</p>
              </div>
              <div></div>
              <div className="checkOutBtn">
                <button onClick={checkoutHandler}>Check Out</button>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Cart;
