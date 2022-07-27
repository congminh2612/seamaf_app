import "./style/Content.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

function ProductList(props) {
   

    const [products, setProducts] = useState([]);
    
    useEffect( () => {
        async function getProducts() {
            const response= await axios.get("http://127.0.0.1:8000/api/products")
            setProducts(response.data)
            
            
        }
        getProducts()    
    },[]);


    return (
        <div>
            <div className="product-filter-section">
                <div className="container">
                    <div className="section-title">
                        <h3>BROWSE TOP SELLING PRODUCTS</h3>
                    </div>
                    <div className="row">
                        {products.map((product, index) => {
                            return (
                                <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-m-6 col-6">
                                   <ProductItem 
                                        product={product}
                                   />
                                </div>
                            );
                        
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
