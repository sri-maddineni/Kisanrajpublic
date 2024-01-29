import { useNavigate } from "react-router-dom";
import "./CreateAccount.css";

function CreateAccount() {
  const navigate = useNavigate();
  return (
    <>
      <div className="accounttotal">
        <div className="container1">
          <h1>Create Account</h1>
          <div className="former">
            <div className="innerform1">
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Phone number" />
              <input type={"password"} placeholder="Password" />
              <input type={"password"} placeholder="Confirm Password" />
            </div>
            <div className="checker">
              <input type="checkbox" />
              <a href="#"> I agree to the terms and conditions</a>
            </div>
            <button
              className="btn btn-danger createacc"
              onClick={() => {
                navigate("/profile");
              }}
            >
              Create Account
            </button>
          </div>
        </div>
        <div className="container2"></div>
      </div>
    </>
  );
}

export default CreateAccount;
