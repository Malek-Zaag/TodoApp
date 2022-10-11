import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Config from "./Config";

export default function Todos() {
  const [tasks, setTasks]: any = useState([]);
  const [state, setState]: any = useState();
  const navigate: any = useNavigate();
  const nameRef: any = useRef();
  const timeRef: any = useRef();
  const logout = () => {
    const options = {
      url: `${Config.login || "http://localhost:3003"}/api/logout`,
      method: "get",
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    };
    axios(options)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
    if (!localStorage.getItem("jwt")) {
      navigate("/login");
    } // => 'value'
  };
  const add = () => {
    if (state === true) {
      setState(false);
    } else setState(true);
    const options = {
      url: `${
        Config.task || "http://localhost:3001"
      }/api/task/${localStorage.getItem("id")}`,
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
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const delete_task = (id: any) => {
    if (state === true) {
      setState(false);
    } else setState(true);
    const options = {
      url: `${Config.task || "http://localhost:3001"}/api/task/${id}`,
      method: "DELETE",
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    };
    axios(options)
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get(
        `${
          Config.task || "http://localhost:3001"
        }/api/task/${localStorage.getItem("id")}`
      )
      .then((response) => {
        setTasks(response.data);
      })
      .catch((err) => console.log(err));
  }, [state]);
  return (
    <div className="">
      <div className="d-flex justify-content-end">
        <button onClick={logout} type="button" className="m-1 btn btn-primary">
          logout
        </button>
      </div>
      <div className="flex items-center">
        <span>
          <img
            src="https://img.icons8.com/emoji/48/000000/memo-emoji.png"
            alt="idk"
          />
        </span>
        <h1 className="text-2xl">My todos</h1>
      </div>
      <div>
        <label>Task : </label>
        <input type="text" className="mx-3" ref={nameRef}></input>
        <label>Time : </label>
        <input type="text" className="mx-3" ref={timeRef}></input>
        <button className="btn btn-primary" type="button" onClick={add}>
          add todo
        </button>
      </div>

      <div className="m-5 p-5 d-flex">
        <ul>
          {tasks.map((task: any) => {
            return (
              <li
                key={task._id}
                className=" d-flex flex-row justify-content-between m-3 p-2 shadow-lg rounded"
                style={{ width: "40vw" }}
              >
                <div className="fs-2">
                  <span className="text-md">{task.task_name} </span>
                  <span className="text-lg ml-3">{task.time}</span>
                </div>
                <div className="align-items-center d-flex">
                  <button onClick={() => delete_task(task._id)}>
                    <img
                      height={24}
                      width={24}
                      src="https://img.icons8.com/emoji/48/000000/cross-mark-button-emoji.png"
                      alt="idk"
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
