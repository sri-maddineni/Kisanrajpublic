import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div className="cardcarder ">
        <div className="imager">
          <img src={props.imglink} alt="bengalgram" />
        </div>
        <div className="title">
          <h2>{props.title}</h2>
        </div>
        <div className="des">
          <p>{props.item}</p>
          <button className="viewbtn">View all</button>
        </div>
      </div>
    </>
  );
};

export default Card;
