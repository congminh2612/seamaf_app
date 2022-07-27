import "./style/Header.scss"
import { Link } from "react-router-dom";
function Navbar() {
    return ( 
        <nav className="main-navbar">
            <div className="container">
                <div className="slicknav-menu"></div>
                <ul className="main-menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/" className="drop-down">Our Shop</Link>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/">Beads</Link>
                            </li>
                            <li>
                                <a href="/">Beading Tools</a>
                            </li>
                            <li>
                                <a href="/">Beading Wires And Threads</a>
                            </li>
                            <li>
                                <a href="/">Findings</a>
                            </li>
                            <li>
                                <a href="/">Chains</a>
                            </li>
                            <li>
                                <a href="/">Packaging</a>
                            </li>
                            <li>
                                <a href="/">Charms and Pendants</a>
                            </li>
                            <li>
                                <a href="/">Bridal Accesories</a>
                            </li>
                            <li>
                                <a href="/">Wedding & Party Accessories</a>
                            </li>
                            <li>
                                <a href="/">Equipment Hire</a>
                            </li>
                            <li>
                                <a href="/">Handmade Accessories</a>
                            </li>
                            <li>
                                <a href="/">Keyholder</a>
                            </li>
                            <li>
                                <a href="/">Bags</a>
                            </li>
                            <li>
                                <a href="/">Hair Beads &Accesories</a>
                            </li>
                            <li>
                                <a href="/">Event Planning & Management</a>
                            </li>
                            <li>
                                <a href="/">test</a>
                            </li>

                        </ul>
                    </li>
                    <li className="on-sale">
                        <Link to="/">On Sale</Link>
                    </li>
                    <li>
                        <Link to="/">Our Services</Link>
                    </li>
                    <li>
                        <Link to="/">Blog</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                    <li>
                        <Link to="login">Signin</Link>
                    </li>
                    <li>
                        <Link to="login">Signup</Link>
                    </li>
                </ul>
            </div>
        </nav>
     );
}

export default Navbar;