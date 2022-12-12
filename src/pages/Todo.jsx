import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTodo } from "../store/slice/todoSlice";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeHandler = (e) => {                                                                            
    setTodo(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // items to be sent to redux store
    const addItem = {
      id: new Date().getMilliseconds(),
      todo,
    };

    // adding todo item to redux store
    dispatch(addTodo(addItem));

    // ?console.log("todo"):console.log("sorry");;

    // console.log(addItem);
    // setting todo input to empty
    setTodo("");
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="[&_input]:w-[20vw] w-[60vw] h-[50vh] m-auto flex flex-col items-center mt-[5%] bg-gray-200 justify-center">
        <form action="/#" onSubmit={submitHandler}>
          <div className="mb-4">
            <input
              className="pb-2 pl-2 py-2"
              type="text"
              placeholder="Ender todo "
              value={todo}
              onChange={changeHandler}
            />
          </div>
          <div>
            <input
              className="bg-green-500 rounded-md text-white font-bold py-2"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Todo;
