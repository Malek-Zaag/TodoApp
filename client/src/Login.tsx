import axios from "axios";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Config from "./Config";

export default function Login() {
  const navigate: any = useNavigate();
  const emailRef: any = useRef();
  const passwordRef: any = useRef();
  const submitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    const options: any = {
      url: `${Config.login || "http://localhost:3003"}/api/login`,
      method: "POST",
      mode: "same-origin",
      redirect: "follow",
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
    };
    e.preventDefault();
    console.log(Config);
    console.log(options.url);
    axios(options)
      .then((response) => {
        localStorage.setItem("id", response.data._id);
        console.log(response.data._id);
        if (response.status === 200) {
          navigate("/todos");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="d-flex p-2 justify-content-center m-5 text-center">
      <div className="">
        <h1 className="mb-5 fs-1">Login to your account</h1>
        <form className="d-flex align-items-center flex-column fs-3">
          <label htmlFor="email">Email</label>
          <input
            ref={emailRef}
            type="email"
            name="email"
            className="shadow-lg rounded-lg"
          ></input>
          <label htmlFor="password">Password</label>
          <input
            ref={passwordRef}
            type="password"
            name="password"
            className="shadow-lg rounded-lg bg-gray-100 py-1 my-1"
          ></input>
          <button
            type="button"
            className="btn btn-primary m-5 fs-3"
            onClick={submitForm}
          >
            Login
          </button>
          <div>
            <span>
              Create a new account?{" "}
              <span className="text-red-500 font-bold">
                <Link to="/signup">SignUp</Link>
              </span>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
