import axios from "axios";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export default function Todos() {
  const [tasks, setTasks] = useState([]);
  const [state, setState] = useState();
  const nameRef = useRef();
  const timeRef = useRef();
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
  const add = () => {
    setState(true);
    const options = {
      url: `${process.env.NEXT_PUBLIC_TASK_URL}/api/task/${localStorage.getItem(
        "id"
      )}`,
      method: "POST",
      withCredentials: true,
      data: {
        name: nameRef.current.value,
        time: timeRef.current.value,
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    };
    axios(options)
      .then((response) => {
        console.log(process.env.NEXT_PUBLIC_TASK_URL);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_TASK_URL}/api/task/${localStorage.getItem(
          "id"
        )}`
      )
      .then((response) => {
        console.log(response);
        setTasks(response.data);
      })
      .catch((err) => console.log(err));
  }, [state]);
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
        <input type="text" ref={nameRef}></input>
        <label>Time : </label>
        <input type="text" ref={timeRef}></input>
        <button className="p-4" onClick={add}>
          add todo
        </button>
      </div>

      <div className="my-6 mx-6 py-6">
        <ul>
          {tasks.map((task) => {
            return (
              <li
                key={task._id}
                className="px-3 py-3 my-3 flex rounded-xl bg-gray-200 shadow-xl md:w-3/4 lg:w-1/2 sm:w-3/4 justify-between "
              >
                <div>
                  <span className="text-sm">{task.task_name} </span>
                  <span className="text-lg ml-3">{task.time}</span>
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
            );
          })}
        </ul>
      </div>
    </div>
  );
}
