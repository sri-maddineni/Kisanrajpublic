
import { useSpring, animated } from "react-spring";
import "./Valuecardhome.css";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    to: n,
    delay: 200,
    config: { mass: 2, tension: 10, friction: 10 },
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const Valuecardhome = (props) => {
  return (
    <>
      <div className="valuecard">
        <h4>{props.title}</h4>
        <h3>
          <Number n={props.count} />+
        </h3>
      </div>
    </>
  );
};

export default Valuecardhome;
