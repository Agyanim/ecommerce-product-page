import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

const App = () => {
  return (
    <Routes>
      <Route path={"/"}>
        <Route index element={<Signup/>} />
        <Route path="todo" element={<Todo/>} />
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="signin" element={<Signin/>} />
        <Route path="home" element={<Home/>} />
      </Route>
    </Routes>
  );
};

export default App;
