import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Signin from "./Component/Authentication/Signin";
import Signup from "./Component/Authentication/Signup";
import Home from "./Component/Home/Home";
import Contact from "./Component/Contact/Contact";
import Cookies from "js-cookie";
import Footer from "./Component/Footer";
function App() {
  let Token = Cookies.get("BooksDekho");
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="*" element={<Signin />} />
        <Route path="/signup" element={!Token ? <Signup /> : <Home />} />
        <Route path="/home" element={Token ? <Home /> : <Signin />} />
        <Route path="/contact" element={Token ? <Contact /> : <Signin />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
