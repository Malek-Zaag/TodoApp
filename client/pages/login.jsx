import Link from "next/link";
import axios from "axios";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const submitForm = (e) => {
    const options = {
      url: `${process.env.NEXT_PUBLIC_LOGIN_URL}/api/login`,
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
    axios(options)
      .then((response) => {
        console.log(process.env.NEXT_PUBLIC_LOGIN_URL);
        console.log(response);
        localStorage.setItem("id", response.data._id);
        console.log(response.data._id);
        if (response.status == 200) {
          router.push("/todos");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3 rounded-lg">
        <h1 className="text-2xl text-center mb-5">Login to your account</h1>
        <form className="flex flex-col text-left">
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
            Login
          </button>
          <div>
            <span>
              Create a new account?{" "}
              <span className="text-red-500 font-bold">
                <Link href="/signup">SignUp</Link>
              </span>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
