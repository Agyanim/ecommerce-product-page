import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const users = useSelector((store) => store.users.value);

  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const userChangeHandler = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };

  const signinSubmitHandler = (e) => {
    e.preventDefault();
    users.find(
      (person) =>
        person.userName === user.userName && person.password === user.password
    )
      ? navigate("/dashboard")
      : alert("sorry, user was not found");
  };

  return (
    <div>
      <div className="[&_input]:w-[20vw] w-[60vw] h-[50vh] m-auto flex flex-col items-center mt-[5%] bg-gray-200 justify-center">
        <form action="/#" onSubmit={signinSubmitHandler}>
          <div className="mb-4">
            <input
              className="pb-2 pl-2 py-2"
              type="text"
              placeholder="Username"
              name="userName"
              value={user.userName}
              onChange={userChangeHandler}
            />
          </div>
          <div className="mb-4">
            <input
              className="pb-2 pl-2 py-2"
              type="password"
              placeholder="password"
              name="password"
              value={user.password}
              onChange={userChangeHandler}
            />
          </div>
          <div>
            <input
              className="bg-green-500 rounded-md text-white font-bold py-2"
              type="submit"
              value="Signin"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
