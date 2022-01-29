import { Routes, Route } from "react-router-dom";
// import { useRouter } from "next/router";

import Home from "./pages/Home";
import News from "./pages/News";
import Watchlist from "./pages/Watchlist";
import More from "./pages/More";
import Page404 from "./pages/Page404";
import GreetingPage from "./pages/Beta/greetingPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  // const router = useRouter();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/more" element={<More />} />

        <Route path="/greeting" element={<GreetingPage />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
      {/* // Footer, NavBar는 에러 페이지 제외하고 공통 */}
      {/* {router.pathname !== "/_error" && ( */}
      <>
        <Footer />
        <NavBar />
      </>
      {/* )} */}
    </>
  );
}

export default App;
