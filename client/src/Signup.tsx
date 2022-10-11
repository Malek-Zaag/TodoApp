import axios from "axios";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Config from "./Config";
export default function Signup() {
  const navigate: any = useNavigate();
  const firstnameRef: any = useRef();
  const lastnameRef: any = useRef();
  const emailRef: any = useRef();
  const passwordRef: any = useRef();
  const submitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    axios
      .post(`${Config.signin || "http://localhost:3002"}/api/signup`, {
        firstname: firstnameRef.current.value,
        lastname: lastnameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="d-flex justify-content-center m-5">
      <div className="">
        <h3 className="text-center fs-1 m-5">Join Us</h3>
        <form className="d-flex flex-column fs-4">
          <label htmlFor="firstname">Firstname</label>
          <input
            ref={firstnameRef}
            name="firstname"
            className="shadow-lg rounded-lg bg-gray-100 py-1 my-1"
          ></input>
          <label htmlFor="lastname">Lastname</label>
          <input
            ref={lastnameRef}
            name="lastname"
            className="shadow-lg rounded-lg bg-gray-100 py-1 my-1"
          ></input>
          <label htmlFor="email">Email</label>
          <input
            ref={emailRef}
            type="email"
            name="email"
            className="shadow-lg rounded-lg bg-gray-100 py-1 my-1"
          ></input>
          <label htmlFor="password">Password</label>
          <input
            ref={passwordRef}
            type="password"
            name="password"
            className="shadow-lg rounded-lg bg-gray-100 py-1 my-1"
          ></input>
          <button
            className="fs-4 m-5 btn btn-primary"
            onClick={submitForm}
            type="button"
          >
            Create
          </button>
          <div>
            <span>
              Log in to your account?{" "}
              <span className="text-red-500 font-bold">
                <Link to="/login">LogIn</Link>
              </span>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
