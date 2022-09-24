import Link from "next/link";
import axios from "axios";
import { useRef } from "react";
export default function Signup() {
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.NEXT_PUBLIC_SIGNIN_URL}/api/signup`, {
        firstname: firstnameRef.current.value,
        lastname: lastnameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((response) => {
        console.log(process.env.NEXT_PUBLIC_SIGNIN_URL);
        console.log(response);
        if (response.status == 200) {
          window.location.href = "/login";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3 rounded-lg">
        <h3 className="text-2xl text-center mb-5">Join us</h3>
        <form className="flex flex-col">
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
            className="bg-gray-100 my-4 py-1 rounded-lg"
            onClick={submitForm}
          >
            Create
          </button>
          <div>
            <span>
              Log in to your account?{" "}
              <span className="text-red-500 font-bold">
                <Link href="/login">LogIn</Link>
              </span>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
