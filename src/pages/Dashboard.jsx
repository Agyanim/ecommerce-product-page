import React from "react";
import { useSelector } from "react-redux";
import useCountStore from "../store/counter";

const Dashboard = () => {
  const myCount = useCountStore((state) => state.count);
  const increase = useCountStore((state) => state.increaseCount);

//   const increase = () => {
//      increase;
//   };

  console.log(myCount);
  const todo = useSelector((store) => store.todo.value);
  const renderTodo = todo.map((item) => {
    // console.log(item.todo);
    return <li key={item.id}>{item.todo}</li>;
  });
  console.log();

  return (
    <div>
      hello...
      <h2>{myCount}</h2>
      <ul>{renderTodo}</ul>
      <button onClick={useCountStore((state) => state.increaseCount)}>count</button>{" "}
    </div>
  );
};

export default Dashboard;
