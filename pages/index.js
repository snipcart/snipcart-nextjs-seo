import Head from "next/head"
import ProductList from "../components/ProductList"
import Header from "../components/Header"
import Footer from "../components/Footer"
import '../assets/index.scss'

const Index = (props) => {
  return (

    <div className="app">
      <Head>
        <title>Beautiful, high quality carpets | CarpetCity</title>
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.0-beta.3/default/snipcart.css" />
        <meta name="description" content="Buy beautiful, high quality carpets for your home."/>
      </Head>
      <Header />
      <main className="main">
        <ProductList products={props.products} />
      </main>
      <Footer />
      <script src="https://cdn.snipcart.com/themes/v3.0.0-beta.4/default/snipcart.js"></script>
      <div hidden id="snipcart" data-api-key="MzMxN2Y0ODMtOWNhMy00YzUzLWFiNTYtZjMwZTRkZDcxYzM4"></div>
    </div>
  )
}

Index.getInitialProps = async () => {
  return {
    products: [
      { id: "nextjs-seo_carpet1", name: "Straight and Narrow", price: 25.0, image: "static/straight-and-narrow.jpg", description: "Revitalize your living room with this durable and stain hiding carpet." },
      { id: "nextjs-seo_carpet2", name: "Casonova", price: 25.00, image: "static/casonova.jpg", description: "Your feet will enjoy this fluffy carpet. Well... that is until it gets dirty!" },
      { id: "nextjs-seo_carpet3", name: "Living Bliss", price: 25.00, image: "static/living-bliss.jpg", description: "This thermally insulated carpet will make sure your room stays nice and warm in the winter." },
      { id: "nextjs-seo_carpet4", name: "Timeless Beige", price: 25.00, image: "static/timeless-beige.jpg", description: "It might be timeless, but it sure is ugly. This is what I have in my apartment." },
    ]
  }
}

export default Index;


