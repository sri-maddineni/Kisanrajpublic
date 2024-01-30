import Footer from "../../../Components/Footer/Footer";
import Hero from "/src/Routes/Homepage/Hero";
import Navbar from "/src/Components/Navbar/Navbar";
import "./Buy.css";
import Buyheros from "./Buyheros";

function Buy() {
  return (
    <>
      <Navbar />
      <Buyheros />

      <div className="buyer">
        <div className="carder1" style={{ width: "18rem;" }}>
          <img
            className="card-img-top"
            src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Fruits</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Buy;
