import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from '../store/CartSlice';

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  // const cart = useSelector(state => state)
  const dispatch =  useDispatch()

  function handleAddItemToCart(){
    dispatch(cartActions.addItemFromCart({
      id,
      title,
      price
    }))
  }
 
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddItemToCart}>Add to Cart</button>
        </div>
      </Card>
     
        
    </li>
  );
};

export default ProductItem;
