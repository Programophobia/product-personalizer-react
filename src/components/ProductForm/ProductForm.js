import Button from "../Button/Button"
import styles from './ProductForm.module.scss'
import OptionColor from "./OptionColor/OptionColor";
import OptionSize from "./OptionSize/OptionSize";
import PropTypes from 'prop-types';
import { useMemo } from "react";

const ProductForm = props => {

  const price = useMemo(() => {

    const getPrice = (basePrice, currentSize) => {
      return basePrice + currentSize.additionalPrice;
    }
      return getPrice(props.basePrice, props.currentSize);
  }, [props.basePrice, props.currentSize]);
  
  const sentOrder = (event, title, totalPrice, currentSize, currentColor) => {
    event.preventDefault();
    console.log(`
        Your Order:
        Name: ${title}
        Price: ${price}$
        Size: ${currentSize.name}
        Color: ${currentColor}
    `);
    props.setCurrentColor(props.colors[0]);
    props.setCurrentSize(props.sizes[0]);
  };

    return (
      <div>
        <header>
          <h2 className={styles.name} alt={props.names}>{props.title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <form>
        <OptionSize sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize}/>
        <OptionColor  colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor}/>
          <Button onClick={(event) => sentOrder(event, props.title, props.basePrice, props.currentSize, props.currentColor)} className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>)
}
    ProductForm.propTypes = {
        title: PropTypes.string.isRequired,
        currentColor: PropTypes.string.isRequired,
        basePrice: PropTypes.number.isRequired,
        colors: PropTypes.array.isRequired,
        sizes: PropTypes.array.isRequired,
        currentSize: PropTypes.object.isRequired,
        setCurrentSize: PropTypes.func.isRequired,
        setCurrentColor: PropTypes.func.isRequired,
    }

export default ProductForm