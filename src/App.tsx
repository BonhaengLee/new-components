import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewTodoPage from "./pages/NewTodoPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newTodo" element={<NewTodoPage />} />
        {/* <Route path="contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
