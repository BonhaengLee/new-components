import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Stars from "./pages/Stars";
import More from "./pages/More";
import Chart from "./pages/Chart";
import Page404 from './pages/Page404'
import GreetingPage from "./pages/Beta/greetingPage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/stars" element={<Stars />} />
        <Route path="/more" element={<More />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/greeting" element={<GreetingPage />} />

        <Route path="*" element={<Page404/>} />
      </Routes>

      <NavBar />
    </>
  );
}

export default App;
