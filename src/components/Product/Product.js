import styles from './Product.module.scss';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';


const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);

  return (
    <article className={styles.product}>
      <ProductImage  name={props.name} title={props.title} currentColor={currentColor}/>
      <ProductForm sizes={props.sizes} colors={props.colors} title={props.title} basePrice={props.basePrice} 
        currentColor={currentColor} currentSize={currentSize}
        setCurrentColor={setCurrentColor} setCurrentSize={setCurrentSize} />
    </article>
  )
};

export default Product;