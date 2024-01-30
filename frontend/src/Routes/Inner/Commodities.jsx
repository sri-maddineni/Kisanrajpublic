import Navbar from "/src/Components/Navbar/Navbar";
import Breadcrumps from "/src/Components/Breadcrumps/Breadcrumps";
import Footer from "../../Components/Footer/Footer";

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