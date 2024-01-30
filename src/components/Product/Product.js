import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import ProptTypes from 'prop-types'
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const getPrice = (basePrice, currentSize) => {
    return basePrice + currentSize.additionalPrice;
  }
  const sentOrder = (event, title, basePrice, currentSize, currentColor) => {
    event.preventDefault();
    console.log(`
      Name: ${title}
      Price: ${getPrice(basePrice, currentSize)}
      Size: ${currentSize.name}
      Color: ${currentColor}
    `);
    setCurrentColor(props.colors[0]);
    setCurrentSize(props.sizes[0]);
  };

  return (
    <article className={styles.product}>
      <ProductImage  name={props.name} title={props.title} currentColor={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name} alt={props.names}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice(props.basePrice, currentSize)}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel} alt={props.names}>Size </h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => <li key={size.name}><button onClick = {() => setCurrentSize(size)} type="button" className={clsx(size===currentSize&&styles.active)}>{size.name}</button></li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel} alt={props.names}>Colors</h3>
            <ul className={styles.choices}>
            {props.colors.map(color => <li key={color}><button onClick = {() => setCurrentColor(color)} type="button" className={clsx(prepareColorClassName(color), color===currentColor&&styles.active)} /></li>)}
            </ul>
          </div>
          <Button onClick={ (event) => sentOrder(event, props.title, props.basePrice, currentSize, currentColor)} className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.proptTypes = {
  name: ProptTypes.string.isRequired, 
};

export default Product;