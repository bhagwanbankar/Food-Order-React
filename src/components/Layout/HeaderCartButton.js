import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CardIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CardIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}

export default HeaderCartButton;
