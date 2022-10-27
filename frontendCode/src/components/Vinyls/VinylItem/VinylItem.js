import { useContext } from 'react';

import VinylItemForm from './VinylItemForm';
import classes from './VinylItem.module.css';
import CartContext from '../../../store/cart-context';

const VinylItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = props.price + "$";

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      image: props.image
    });
  };

  return (
    <li className={classes.Vinyl}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.product}>
        <img className={classes.image} src={props.image} alt="pic" />
      </div >
      <div className={classes.order}>
        <div className={classes.price}>{price}</div>
        <VinylItemForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
      </div>
    </li>
  );
};

export default VinylItem;
