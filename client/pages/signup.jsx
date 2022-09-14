import Link from "next/link";
export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3 rounded-lg">
        <h3 className="text-2xl text-center mb-5">Join us</h3>
        <form className="flex flex-col">
          <label for="firstname">Firstname</label>
          <input
            name="firstname"
            className="shadow-lg rounded-lg bg-gray-100 py-1 my-1"
          ></input>
          <label for="lastname">Lastname</label>
          <input
            name="lastname"
            className="shadow-lg rounded-lg bg-gray-100 py-1 my-1"
          ></input>
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
          <button className="bg-gray-100 my-4 py-1 rounded-lg">Create</button>
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
