import Product from "./Product";

const ProductList = (props) => {
  return (
    <div className="products">
      {props.products.map((product, index) => <Product product={product} key={index} />)}
    </div>
  )
}

export default ProductList;