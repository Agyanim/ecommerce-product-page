import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUsers } from "../store/slice/userSlice";

const Signup = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const userChangeHandler = (e) => {
    const value=e.target.value
    setUser({...user,[e.target.name]:value});
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const addUser = {
      id: new Date().getMilliseconds(),
      userName: user.userName,
      password: user.password,
    };
    dispatch(addUsers(addUser));
    setUser({
      userName:"",
      password:''
    })
    navigate("/signin")
  };

  return (
    <div>
      <div className="[&_input]:w-[20vw] w-[60vw] h-[50vh] m-auto flex flex-col items-center mt-[5%] bg-gray-200 justify-center">
        <form action="/#" onSubmit={submitHandler}>
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
              value="Signup"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
