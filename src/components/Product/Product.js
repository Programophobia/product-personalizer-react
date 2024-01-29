import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import ProptTypes from 'prop-types'

const Product = props => {
  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt="Kodilla shirt"
          src={`${process.env.PUBLIC_URL}/images/products/shirt-kodilla--black.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name} alt={props.names}>{props.title}</h2>
          <span className={styles.price}>{props.basePrice}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel} alt={props.names}>Sizes </h3>
            <ul className={styles.choices}>
              <li><button type="button" className={styles.active} alt={props.names}>S</button></li>
              <li><button type="button">M</button></li>
              <li><button type="button">L</button></li>
              <li><button type="button">XL</button></li>
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel} alt={props.names}>Colors</h3>
            <ul className={styles.choices}>
              <li><button type="button" className={clsx(styles.colorBlack, styles.active)} /></li>
              <li><button type="button" className={clsx(styles.colorRed)} /></li>
              <li><button type="button" className={clsx(styles.colorWhite)} /></li>
            </ul>
          </div>
          <Button className={styles.button}>
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