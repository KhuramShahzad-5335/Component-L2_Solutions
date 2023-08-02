import InputField from "./InputField";
import { useState } from "react";

const SubscriptionPage = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setFName(e.target.value);
  };

  const handleInputChangeLName = (e) => {
    setLName(e.target.value);
  };

  const handleInputChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const subStyle = {
    backgroundColor: "rgb(238, 238, 238)",
    maxheight: "100vh",
    height: "400px",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    border: "2px solid transparent",
    borderRadius: "10px",
  };

  const InputFieldcontainerStyles = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const btnStyles = {
    border: "2px transparent",
    borderRadius: "10px",
    padding: "20px",
    width: "22.5%",
    color: "#fff",
    fontSize: "1rem",
  };

  return (
    <div style={subStyle}>
      <h1 style={{ fontFamily: "sans-serif", fontSize: "2rem", color: "#444" }}>
        Subscribe
      </h1>
      <p style={{ fontSize: "24px", color: "#666", marginTop: "0px" }}>
        Sign up with your email address to receive news and updates.
      </p>
      <div className="inputFieldContainer" style={InputFieldcontainerStyles}>
        <InputField
          type="text"
          placeholder="First Name"
          value={fName}
          onChange={handleInputChange}
          name="firstName"
        />
        <InputField
          type="text"
          placeholder="Last Name"
          value={lName}
          onChange={handleInputChangeLName}
          name="lastName"
        />
        <InputField
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={handleInputChangeEmail}
          name="emailAddress"
        />
      </div>
      <button type="button" style={btnStyles}>
        SUBSCRIBE
      </button>
    </div>
  );
};

export default SubscriptionPage;
