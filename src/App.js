import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "@/pages/home/Home";
import DetailProduct from "@/pages/detail/DetailProduct";
import { useEffect, useState } from "react";
import Login from "./pages/login/Login";
import Cart from "@/pages/cart/Cart";
import Layout from "./layout/Layout";

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/products"
            );
            setProducts(response.data);
        }
        getProducts();
    }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Layout></Layout>}>
                        <Route path="" element={<Home />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="login" element={<Login />} />
                        {products.map((product, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={`detail/${product.name
                                        .split(" ")[0]
                                        .toLowerCase()}`}
                                    element={
                                        <DetailProduct
                                            product={product}
                                        />
                                    }
                                />
                            );
                        })}
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
