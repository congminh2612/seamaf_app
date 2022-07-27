import { cartAtom } from "@/pages/cart/Cart";
import { Link } from "react-router-dom";
import "./style/Header.scss";
import {useAtomValue} from 'jotai'
function Header() {

    const cartValue = useAtomValue(cartAtom)
    return (
        <div className="header-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 text-center text-lg-left">
                        <Link to="home" className="site-logo">
                            <h4 className="mt-2">RVM SeaMaf</h4>
                        </Link>
                    </div>
                    <div className="col-xl-6 col-lg-5">
                        <div className="header-search-form">
                            <input
                                type="text"
                                placeholder="Search on RVM SeaMaf ..."
                            />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="user-panel">
                            <div className="up-item mr-3">
                                <div className="shopping-card">
                                    <select>
                                        <option value="1">U.S Dollar</option>
                                        <option value="2">RTGS Dollar</option>
                                        <option value="3">SA Rand</option>
                                        <option value="4">British Pound</option>
                                    </select>
                                </div>
                            </div>
                            <div className="up-item mr-3">
                                <div className="shopping-card">
                                    <div className="heart-icon"></div>
                                    <div className="flaticon-heart">
                                        Wishlist
                                    </div>
                                </div>
                            </div>
                            <div className="up-item">
                                <div className="shopping-card">
                                    <div className="bag-icon">
                                        <span className="value-cart">{cartValue.length}</span>
                                    </div>
                                    <div className="flaticon-bag">
                                        <Link to="cart">Shopping Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
