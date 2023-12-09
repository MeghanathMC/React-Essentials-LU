import { useState } from "react";

function Login() {
  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [details, setDetails] = useState();

  return (
    <div
      onChange={(event) => {
        setDetails(event.target.value);
      }}
      className="credenitials"
    >
      <label htmlFor="">Name </label>
      <input type="text" placeholder="Enter Your Name.. " />
      <label htmlFor="">Email</label>
      <input type="email" placeholder="Enter your email.." />
      <label htmlFor="">Password</label>
      <input
        type="password"
        name=""
        id=""
        placeholder="enter your password.."
      />
      <button
        className="loginbtn"
        onClick={() => {
          alert(`Login Successful !! your ${details} details submiited`);
        }}
      >
        Login
      </button>
    </div>
  );
}
export default Login;
