import axios from "axios";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";

export default function Todos() {
  const router = useRouter();
  const logout = () => {
    const options = {
      url: `${process.env.NEXT_PUBLIC_LOGIN_URL}/api/logout`,
      method: "get",
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    };
    axios(options)
      .then((response) => {
        console.log(process.env.NEXT_PUBLIC_LOGIN_URL);
        console.log(response);
        router.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
    if (!getCookie("jwt")) {
      router.push("/login");
    } // => 'value'
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <div
        style={{ backgroundColor: "#1E90FF" }}
        className="min-w-full h-10 text-right"
      >
        <button onClick={logout} className="text-white text-middle pt-1 mx-2">
          logout
        </button>
      </div>
      <div className="flex items-center">
        <span>
          <img src="https://img.icons8.com/emoji/48/000000/memo-emoji.png" />
        </span>
        <h1 className="text-2xl">My todos</h1>
      </div>
      <div>
        <label>Task : </label>
        <input type="text"></input>
        <label>Time : </label>
        <input type="text"></input>
        <button className="p-4">add todo</button>
      </div>

      <div className="my-6 mx-6 py-6">
        <ul>
          <li className="px-3 py-3 my-3 flex rounded-xl bg-gray-200 shadow-xl md:w-3/4 lg:w-1/2 sm:w-3/4 justify-between ">
            <div>
              <span className="text-sm">
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              </span>
              <span className="text-lg ml-3">time</span>
            </div>
            <div className="flex">
              <button>
                {" "}
                <img
                  height={24}
                  width={24}
                  src="https://img.icons8.com/emoji/48/000000/pencil-emoji.png"
                />
              </button>
              <button>
                <img
                  height={24}
                  width={24}
                  src="https://img.icons8.com/emoji/48/000000/cross-mark-button-emoji.png"
                />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
