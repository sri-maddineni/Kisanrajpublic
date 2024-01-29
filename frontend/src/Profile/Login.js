import { useEffect } from "react";
import { Link } from "react-router-dom";

const MyModal = (props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  });
  return (
    <>
      <div className="modal-wrapper" onClick={props.closeModal}></div>

      <div className="modal-container">
        <div className="closer" onClick={props.closeModal}>
          <i className="fas fa-times"></i>
        </div>

        <div action="" className="former" id="former">
          <h1>Login</h1>
          <input type="text" placeholder="Phone number" />
          <input type={"password"} placeholder="Password" />
          <button type="submit" className="btn btn-sm loginbtn my-2">
            Login
          </button>
        </div>
        <hr />
        <p>
          or <br /> Use social network to login
        </p>
        <div className="cmediar my-2">
          <i className="fab fa-facebook m-2"></i>

          <i className="fab fa-google m-2"></i>
        </div>

        <p className="my-2">No account ?</p>
        <Link className="my-2" to="/createaccount">
          Create Account
        </Link>
      </div>
    </>
  );
};

export default MyModal;
