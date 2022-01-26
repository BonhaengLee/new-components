import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import More from "./pages/More/More";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more" element={<More />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </>
  );
}

export default App;
