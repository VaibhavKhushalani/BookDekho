import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Signin from "./Component/Authentication/Signin";
import Signup from "./Component/Authentication/Signup";
import Home from "./Component/Home/Home";
import Contact from "./Component/Contact/Contact";
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Signin />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
