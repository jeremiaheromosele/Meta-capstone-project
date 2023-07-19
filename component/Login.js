
import { useState } from "react";
import { validateEmail } from "./utils";
import { useNavigate } from "react-router-dom";


const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters,including symbol and an uppercase</p>
  );
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });

  const getIsFormValid = () => {
    return (
      validateEmail(email) &&
      password.value.length >= 8
    );
  };
  const navigate = useNavigate();

  const clearForm = () => {
    setEmail();
    setPassword({
      value: "",
    isTouched: false,
    });

  };

  const handleSubmit = () => {
    alert("Welcome back!");
    clearForm();
    navigate("/"); // redirect to home page after login successfull
  };

  return (
    <section className="login-section">
  <div className="card" style={
      {"background": "transparent","backdrop-filter":"blur(20px)"}
     }>
    <form onSubmit={handleSubmit}>
      <fieldset >
        <h1 className="card-header" style={{"color":"white"}}>Login</h1>
        <div className="Field">
          <label>
            <span className="icons">
            <i className="fas fa-user"></i>
            </span>
          </label>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="Field">
          <label>
            <span className="icons">
            <i className="fas fa-lock"></i>
            </span>
          </label>
          <input
            value={password.value}
            placeholder="Password"
            type="password"
            onChange={(e) => {
              setPassword({ ...password, value: e.target.value });
            }}
            onBlur={() => {
              setPassword({ ...password, isTouched: true });
            }}
          />
          {password.isTouched && password.value.length < 8 ? (
            <PasswordErrorMessage />
          ) : null}
          <div className="remember-forgot">
            <label><input type="checkbox"/> Remember me </label><a href="#">Forgot password?</a>
          </div>
          <p></p>
        </div>
        <button type="submit" disabled={!getIsFormValid()}>
          Login
        </button>
        <p className="register">
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </fieldset>
    </form>
  </div>
</section>

  );
}

export default Login;
