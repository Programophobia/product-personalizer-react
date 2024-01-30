import Button from "../Button/Button"
import styles from './ProductForm.module.scss'
import clsx from 'clsx';



const ProductForm = props => {
    const getPrice = (basePrice, currentSize) => {
        return basePrice + currentSize.additionalPrice;
      }

    const sentOrder = (event, title, basePrice, currentSize, currentColor) => {
      event.preventDefault();
      console.log(`
        Your Order:
        Name: ${title}
        Price: ${getPrice(basePrice, currentSize)}
        Size: ${currentSize.name}
        Color: ${currentColor}
      `);
      props.setCurrentColor(props.colors[0]);
      props.setCurrentSize(props.sizes[0]);
    };

    const prepareColorClassName = color => {
      return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
    };
    return (
<div>
        <header>
          <h2 className={styles.name} alt={props.names}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice(props.basePrice, props.currentSize)}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel} alt={props.names}>Size </h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => <li key={size.name}><button onClick = {() => props.setCurrentSize(size)} type="button" className={clsx(size===props.currentSize&&styles.active)}>{size.name}</button></li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel} alt={props.names}>Colors</h3>
            <ul className={styles.choices}>
            {props.colors.map(color => <li key={color}><button onClick = {() => props.etCurrentColor(color)} type="button" className={clsx(prepareColorClassName(color), color===props.currentColor&&styles.active)} /></li>)}
            </ul>
          </div>
          <Button onClick={ (event) => sentOrder(event, props.title, props.basePrice, props.currentSize, props.currentColor)} className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>)

 }

export default ProductForm