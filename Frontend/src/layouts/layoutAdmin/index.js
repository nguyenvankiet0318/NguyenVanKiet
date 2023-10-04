import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Sidebar from "./Sidebar";
function LayoutAdmin() {
    return (
        <>
            {/* <Header/> */}
            <Sidebar/>
            <section className="maincontent">
                <div class = "container-fluid py-3">
                    <Outlet/>
                </div>
            </section>
            <Footer/>
            </> 
     );
}

export default LayoutAdmin;