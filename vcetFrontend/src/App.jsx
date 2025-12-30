import ClassComp from "./components/classComponents/classComponent";
import FunctionalComponentEg from "./components/functionalComponents/FunctionalComponentEg";
import Props from "./components/functionalComponents/Props";
import State from "./components/functionalComponents/Hooks/State";
import Navbar from "./components/functionalComponents/Navbar";
import Home from "./components/functionalComponents/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./components/functionalComponents/Login";
import Contact from "./components/functionalComponents/Contact";
import Register from "./components/functionalComponents/Register";
import Effect from "./components/functionalComponents/Hooks/Effect";
import Ref from "./components/functionalComponents/Hooks/Ref";
import EffectWithAPI from "./components/functionalComponents/Hooks/EffectWithAPI";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/class-comp" element={<ClassComp />}></Route>
          <Route path="/use-state" element={<State />}></Route>
          <Route path="/contact" element = {<Contact />}></Route>
          <Route path="/login" element = {<Login />}></Route>
          <Route path="/register" element = {<Register />}></Route>
          <Route path="/use-effect" element={<Effect />}></Route>
          <Route path="/use-effect-api" element={<EffectWithAPI />}></Route>
          <Route path="/use-ref" element={<Ref />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
