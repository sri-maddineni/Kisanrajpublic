import "./Hero.css";
import { useNavigate } from "react-router-dom";


import Location from "/src/Data/Location";
import { useState } from "react";
import MyModal from "/src/Components/modals/SigninModal";
import { productlist } from "/src/Data/Productslist";
import LocationComponent from "/src/Data/LocationComponent";

import { Login } from "/src/Profile/IsLogin";

function Hero(props) {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const onsearch = (namer) => {
    setValue(namer);
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const location = LocationComponent();
  const { latitude, longitude } = Location();

  const localat = () => {
    if (location.loaded) {
      try {
        return JSON.stringify(location.coordinates.lat).slice(0, 5) + "°lat";
      } catch (error) {
        console.error("Error stringify latitude:", error);
      }
    }
    return "";
  };

  const localng = () => {
    if (location.loaded) {
      try {
        return JSON.stringify(location.coordinates.lng).slice(0, 5) + "°lon";
      } catch (error) {
        console.error("Error stringify longitude:", error);
      }
    }
    return "";
  };

  return (
    <>
      <div className={props.cname}>
        <img src={props.imglink} alt="heroimage" />
        <div className="hero-text">
          <h1>{props.title}</h1>

          <input
            type="search"
            value={value}
            placeholder={`Search for Tomatoes in ${localat()}  ${localng()}`}
            className="loc"
            onChange={onChange}
          />

          <div className="dropdowner">
            {productlist
              .filter((item) => {
                const searchTerm = value.toLocaleLowerCase();
                const namer = item.name.toLocaleLowerCase();

                return (
                  searchTerm &&
                  namer.startsWith(searchTerm) &&
                  namer !== searchTerm
                );
              })
              .slice(0, 5)
              .map((item) => (
                <div
                  onClick={() => {
                    onsearch(item.name);
                  }}
                  className="dropdowner-row"
                  key={item.productId}
                >
                  {`${item.name}  ${item.teluguName}`}
                </div>
              ))}
          </div>

          <div className="btns">
            <button
              className="btn buy btn-outline-info mx-2 my-2"
              onClick={() => {
                if (value) {
                  navigate("/buy/commodities", { state: { value } });
                } else {
                  alert("Enter some product Name");
                }
              }}
            >
              Buy
            </button>
            <button
              className="btn buy btn-outline-info mx-2 my-2"
              onClick={() => {
                if (value) {
                  if (Login) {
                    navigate("/sell");
                  } else {
                    navigate("/login");
                  }
                } else {
                  alert("Enter some equipment Name");
                }
              }}
            >
              Sell
            </button>
            {showModal && <MyModal closeModal={closeModal} />}

            <button
              className="btn buy btn-outline-info mx-2 my-2"
              onClick={() => {
                if (value) {
                  navigate("/hire");
                } else {
                  alert("Enter some equipment Name");
                }
              }}
            >
              Hire
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

{
  /*


 const loca = () => {
    return location.loaded ? JSON.stringify(location) : "your area";
  };


*/
}
