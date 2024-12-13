import { useState } from "react";
import Input from "./Input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  function handleSubmit(event) {
    event.preventDefault(); // prevent http request made by the browser

    console.log(email);
    console.log(password);
  }

  const isValidEmail = email.includes("@") || !didEdit.email;
  const isValidPassword = password.length > 2 || !didEdit.email;

  function handleEmailChange(event) {
    setEmail(event.target.value);
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      email: false,
    }));
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      password: false,
    }));
  }

  function handleInputBlur(id) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [id]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onChange={handleEmailChange}
          onBlur={() => handleInputBlur("email")}
          value={email}
          error={!isValidEmail && "Please enter a valid email"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={handlePasswordChange}
          onBlur={() => handleInputBlur("password")}
          value={password}
          error={!isValidPassword && "Please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        {/* <button type="button" className="button" onClick={handleSubmit}> */}
        <button className="button">Login</button>
      </p>
    </form>
  );
}
