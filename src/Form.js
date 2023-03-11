import { useState } from "react";
import "./Form.css"; // Import the CSS file

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert("Form submitted successfully");
    } else {
      alert("Can't submit the form");
    }
  };

  const validateEmail = (value) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    setEmailValid(emailRegex.test(value));
  };

  const validatePassword = (value) => {
    setPasswordValid(value.length >= 8);
  };

  const validateConfirmPassword = (value) => {
    setConfirmPasswordValid(value === password);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
            className={`form-control ${
              emailValid ? "is-valid" : email.length > 0 ? "is-invalid" : ""
            }`}
          />
          {!emailValid && email.length > 0 && (
            <div className="invalid-feedback">Please enter a valid email</div>
          )}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
            }}
            className={`form-control ${
              passwordValid
                ? "is-valid"
                : password.length > 0
                ? "is-invalid"
                : ""
            }`}
          />
          {!passwordValid && password.length > 0 && (
            <div className="invalid-feedback">
              Password must be at least 8 characters long
            </div>
          )}
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              validateConfirmPassword(e.target.value);
            }}
            className={`form-control ${
              confirmPasswordValid
                ? "is-valid"
                : confirmPassword.length > 0
                ? "is-invalid"
                : ""
            }`}
          />
          {!confirmPasswordValid && confirmPassword.length > 0 && (
            <div className="invalid-feedback">Passwords do not match</div>
          )}
        </div>
        <div className="center">
          {" "}
          <button type="submit" className="btn">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
