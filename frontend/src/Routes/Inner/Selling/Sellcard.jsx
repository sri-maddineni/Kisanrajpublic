import "./Sellcard.css";
import { useState } from "react";
import MyModal from "../../../Components/Modals/SigninModal";
import SigninModal from "/src/Components/modals/SigninModal"; // Adjust the path based on your project structure

function Sellcard(props) {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  const item = props.seller.productsSold[props.productName];

  return (
    <>
      <div className="totalcard">
        <div className="sellcardimage">
          <img
            className="productImage"
            src={props.productImage}
            alt="productimage"
          />
        </div>
        <div className="comdetails bg-success">
          <h3>
            {props.productName} : <span className="h6"> {item.quality}/5</span>
          </h3>
          <p>
            {item.quantity}&nbsp;
            {item.unit} : {item.cost}/-
          </p>
        </div>
        <div className="sellcardseller bg-warning">
          <h3>{props.seller.name}</h3>
          <p>{props.seller.location}</p>
          {/*<p>{props.seller.id}</p>*/}

          {/*<p>
            Other products sold:&nbsp;
            {Object.keys(props.seller.productsSold).join(", ")}
  </p>*/}
          <div className="cmedia">
            <a href="#" className="fas fa-phone"></a>
            <a href="#" className="fab fa-whatsapp"></a>
          </div>

          <button
            id="loginbtn"
            className="btn loginbtn btn-sm btn-outline-info bg-dark"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Propose Offer
          </button>
          {showModal && <MyModal closeModal={closeModal} />}
        </div>
      </div>
    </>
  );
}

export default Sellcard;
