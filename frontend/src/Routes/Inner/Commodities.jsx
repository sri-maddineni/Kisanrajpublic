import Navbar from "/src/Components/Navbar/Navbar";
import Breadcrumps from "/src/Components/Breadcrumps/Breadcrumps";
import Footer from "../../Components/Footer/Footer";
import Hero from "../Homepage/Hero";
import Sellcard from "./selling/Sellcard";
import Sellers from "/src/Data/Sellers.js";


import "./Commodities.css";
import { useLocation } from "react-router-dom";
import { productlist } from "../../Data/Productslist.js";

function Commodities() {
  function getProductImageByName(name) {
    for (const product of productlist) {
      if (product.name === name) {
        return product.productImage;
      }
    }
    return null;
  }

  const { state } = useLocation();
  const productName = state && state.value;

  const productImage = getProductImageByName(productName);

  const breadcrumbPath = [
    { name: "Home", link: "/" },
    { name: "Buy", link: "/buy" },
    (() => {
      try {
        return { name: state.value || "All", link: state.value || "/" };
      } catch (error) {
        console.error("Error occurred while accessing state:", error);
        return { name: "All products", link: "/" }; // Default values if an error occurs
      }
    })(),
  ];

  return (
    <>
      <Navbar />
      <Hero
        title="Buy and Sell in advance"
        imglink="https://media.istockphoto.com/id/487491992/photo/farmers-food-market-stall-with-variety-of-organic-vegetable.jpg?s=612x612&w=0&k=20&c=8LwR_owLOl62mUOb0GElxgNz8hsgtgeSmzBu9OvodkI="
        btnclass="hide"
        url="/"
        cname="hero"
        linktitle="Travel Plan"
      />
      <Breadcrumps path={breadcrumbPath} />
      

      <div className="sellers">
        {Sellers.filter((seller) =>
          Object.keys(seller.productsSold).includes(state.value)
        ).map((seller) => (
          <Sellcard
            key={seller.id}
            seller={seller}
            productName={state.value}
            productImage={productImage}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Commodities;
