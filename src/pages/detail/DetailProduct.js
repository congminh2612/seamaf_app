import "./style/DetailProduct.scss";
import { useState } from 'react'
import { Atom, useAtom } from "jotai";
import { Link } from "react-router-dom";
import { cartAtom } from '@/pages/cart/Cart';

function DetailProduct({product}) {
    const [count,setCount]=useState(1)
    const [cart , setCart] = useAtom(cartAtom)


    function AddToCart(id) {
        const index = cart.findIndex((item) => item.id === id)
        const newcart = [...cart]

        if (index !== -1) {
            newcart[index] =  {
                ... newcart[index],
                quantity: newcart[index].quantity + count
            }
        } else {
            newcart.push({...product, quantity: count})
        }
        setCart(newcart)
    }

    return (
        <div>
            <div className="page-top-info">
                <div className="container">
                    <h4>Findings</h4>
                    <div className="site-pagination">
                        <Link to="home">Home</Link>/<Link to="home">Shop</Link>
                    </div>
                </div>
            </div>
            <section className="product-section">
                <div className="container">
                    <div className="back-link">
                        <Link to="/">Back to Categories</Link>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className="product-pic-zoom"
                                style={{
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                            >
                                <img
                                    className="product-big-img"
                                    src={product.images[0].path}
                                    alt=""
                                />
                                <img
                                    alt=""
                                    src="https://seamaf.com/storage/products/435/F6lxFXubHpiItc.jpg"
                                    className="zoomImg"
                                    style={{
                                        position: "absolute",
                                        opacity: "1",
                                        border: "none",
                                        maxWidth: "none",
                                        maxHeight: "none",
                                    }}
                                ></img>
                            </div>
                        </div>

                        <div className="col-lg-6 product-details">
                            <h2 className="p-title">{product.name}</h2>
                            <h3 className="p-price">${product.price}.00</h3>
                            {/* <h4 className="p-stock">
                                Pieces:
                                <span> 160 </span>
                            </h4> */}
                            <h4 className="p-stock">
                                Availability:
                                <span> In stock </span>
                            </h4>
                            <form>
                                <div className="quantity">
                                    <p>Quantity</p>
                                    <div className="pro-qty">
                                        <span   className="dec qtybtn" onClick={()=>setCount(count-1)}>-</span>
                                        <input
                                            type="text"
                                            name="quantity"
                                            value={count}
                                            onChange={()=>{}}
                                        ></input>
                                        <span className="inc qtybtn" onClick={()=>setCount(count+1)}>+</span>
                                    </div>
                                </div>
                                <button  className="site-btn" onClick={()=>AddToCart(product.id)} >
                                    Add To Cart
                                </button>
                            </form>
                            <div className="accordion-area">
                                <div className="panel">
                                    <div className="panel-header">
                                        <button
                                            className="panel-link active"
                                        >
                                            Description
                                        </button>
                                    </div>
                                    <div className="collapse show">
                                        <div className="panel-body">
                                            <div>
                                                {product.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel">
                                    <div className="panel-header">
                                        <button
                                            className="panel-link"

                                        >
                                            shipping &amp; Returns
                                        </button>
                                    </div>
                                    <div
                                        id="collapse3"
                                        className="collapse show"
                                    >
                                        {/* <div className="panel-body">
                                            <h4>7 Days Returns</h4>
                                            <p>
                                                Cash on Delivery Available
                                                <br />
                                                Home Delivery
                                                <span>3 - 4 days</span>
                                            </p>
                                            <p></p>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="related-product-section">
                <div className="container">
                    <div className="section-title">
                        <h2>RELATED PRODUCTS</h2>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default DetailProduct;
