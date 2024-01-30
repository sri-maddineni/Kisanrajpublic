import Navbar from "/src/Components/Navbar/Navbar";
import Breadcrumps from "/src/Components/Breadcrumps/Breadcrumps";
import Footer from "/src/Components/Footer/Footer";
import Hero from "/src/Routes/Homepage/Hero";
import { useLocation } from "react-router-dom";


function Sell() {
  const { state } = useLocation();
  const productName = state && state.value;

  const breadcrumbPath = [
    { name: "Home", link: "/" },
    { name: "Sell", link: "/sell" },
    { name: `${productName}`, link: "/sell" },
  ];

  return (
    <>
      <Navbar />

      <Breadcrumps path={breadcrumbPath} />

      <Footer />
    </>
  );
}

export default Sell;
