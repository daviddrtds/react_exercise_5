import classes from "./CartItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;

  const dispatch = useDispatch();
  const cartTotal = useSelector((state) => state.cart.totalItems);

  const addOne = () => {
    dispatch(cartActions.addItemCart({ id: id, title: title, price: price }));
  };
  const removeOne = () => {
    dispatch(cartActions.removeItemCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          {total.toFixed(2)}€{" "}
          <span className={classes.itemprice}>{price.toFixed(2)}€ each</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeOne}>-</button>
          <button onClick={addOne}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
