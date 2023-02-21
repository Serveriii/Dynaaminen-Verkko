// Pages
import  Home  from "./pages/Home";
import  Drinks  from "./pages/Drinks";
import Recipes from "./pages/Recipes";
import NotFound from "./pages/NotFound";
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";



import { Route, Routes } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <div className="container"> 
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/drinks" element={<Drinks/>} />
      <Route path="/recipes" element={<Recipes/>} />
      <Route path="/*" element={<NotFound/>} />
    </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;