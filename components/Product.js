import ProductDefinition from './ProductDefinition'

const Product = (props) => {
  return (
    <div className="product">
      <div className="product__information">
        <h2 className="product__title">{props.product.name}</h2>
        <img src={props.product.image} alt="product image" className="product__image" />
        <p className="product__description">{props.product.description}</p>
        <ProductDefinition product={props.product} />
      </div>
      <img src={props.product.image} alt="product image" className="product__image" />
    </div>
  )
}

export default Product;