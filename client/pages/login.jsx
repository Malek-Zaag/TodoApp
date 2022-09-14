import Link from "next/link";
export default function Login() {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3 rounded-lg">
        <h1 className="text-2xl text-center mb-5">Login to your account</h1>
        <form className="flex flex-col text-left">
          <label for="email">Email</label>
          <input
            name="email"
            className="shadow-lg rounded-lg bg-gray-100 py-1 my-1"
          ></input>
          <label for="password">Password</label>
          <input
            name="password"
            className="shadow-lg rounded-lg bg-gray-100 py-1 my-1"
          ></input>
          <button className="text-center text-2xl bg-gray-100 rounded-lg my-5">
            login
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
