import { BrowserRouter as Router, Routes, Route ,Outlet} from "react-router-dom";
import HeaderTop from "@/component/Header/HeaderTop"
import Navbar from "@/component/Header/Navbar";
import Footer from "@/component/Footer/Footer";
function Layout({children}) {
    return ( 
        <div>
            <HeaderTop></HeaderTop>
            <Navbar></Navbar>
            <Outlet/>
            <Footer></Footer>
        </div>
     );
}

export default Layout;