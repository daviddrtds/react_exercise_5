import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../store/cartSlice";

const ProductItem = ({ id, price, title, description }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartActions.addItemCart({ id: id, title: title, price: price }));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <p className={classes.price}>{price.toFixed(2)} €</p>
        </header>
        <p className={classes.desc}>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
