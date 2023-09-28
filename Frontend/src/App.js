import Header from "./layouts/Header";
// import "./assets/sass/style.scss"
// import "./assets/sass/app.scss"
import Home from "./layouts/Home";
import { BrowserRouter, Link } from "react-router-dom";
import Slider from "./pages/Slider";
import Footer from "./layouts/Footer";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  </BrowserRouter>
  );
}

export default App;
