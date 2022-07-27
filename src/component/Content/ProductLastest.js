import "./style/Content.scss";
import React from "react";
import { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import axios from "axios";
import ProductItem from "./ProductItem";

function ProductLastest() {
    const [topProduct, setTopProduct] = useState([]);

    /**
     * Lấy ra dữ liệu sản phẩm
     * Create By :Trần Công Minh (15/7/2022)
     */
    useEffect(() => {
        async function getTopProduct() {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/products"
            );
            setTopProduct(
                response.data.filter((item) => {
                    return item.is_top > 0;
                })
            );
        }
        getTopProduct();
    }, []);
    /**
     * Lọc dữ liệu top-product
     * Created by : Trần Công Minh
     */

    const responsive = {
        0: { items: 1 },
        500: { items: 2 },
        700: { items: 3 },
        1024: { items: 4 },
    };

    const items = topProduct.map((product,index) => {
        return (
            <div className="item" data-value={index} key={index} style={{ width: "264px" }}>
                <ProductItem
                    product={product}
                />
            </div>
        );
    });

    return (
        <div>
            <div className="top-letest-product-section">
                <div className="conatiner">
                    <div className="section-title">
                        <h3 className="mt-3 mb-3">LATEST PRODUCTS</h3>
                    </div>
                    <div className="main-carousel">
                        <AliceCarousel
                            autoPlay
                            infinite
                            autoPlayInterval={1000}
                            animationDuration={1500}
                            disableDotsControls
                            disableButtonsControls
                            items={items}
                            paddingLeft={0}
                            paddingRight={0}
                            responsive={responsive}
                        ></AliceCarousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductLastest;
