import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Todo from "./components/Todo";
import TodoItem from "./components/TodoItem";
import Header from "./components/Header";
import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <Todo />
    </div>
  );
}

export default App;
