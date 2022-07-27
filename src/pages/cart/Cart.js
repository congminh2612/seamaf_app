import "./style/cart.scss";
import {useRef} from 'react'
import { atom, useAtom,useAtomValue } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const cartAtom = atomWithStorage("cart", []);
export const totalAmountAtom = atom((get) => {
    const carts = get(cartAtom)
    return carts.reduce((total,cart)=>{
        return total+ (cart.price * cart.quantity)
    },0)
})

export const quantityAtom =  atomWithStorage("quantity", []);
function Cart() {

    const tdRef=useRef()
    const [carts,setCarts] = useAtom(cartAtom) 
    const totalAmount  = useAtomValue(totalAmountAtom)
    const handleRemove=(id)=>{ 
        setCarts(carts.filter(item => item.id !==id))
    }

   

    function handleInc(id) {
        carts[id].quantity+=1;
        setCarts([...carts])
    }

    function handleDec(id) {
        carts[id].quantity-=1;
        setCarts([...carts])
    }
    
    return (
        <div>
           

            <section className="header-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="cart-table">
                                <h3>Your Cart</h3>
                                <div className="cart-table-wrap">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="product-th">
                                                    Product
                                                </th>
                                                <th className="quy-th">
                                                    Quantity
                                                </th>
                                                <th className="size-th">
                                                    Size
                                                </th>
                                                <th className="total-th">
                                                    Price
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {carts?.map((cart,index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td className="product-col">
                                                            <a href="/">
                                                                <img
                                                                    src={cart.images[0].path}
                                                                    alt=""
                                                                />
                                                            </a>
                                                            <div className="pc-title">
                                                                <h4>
                                                                    {cart.name}
                                                                </h4>
                                                                <p>${cart.price}.00</p>
                                                            </div>
                                                        </td>

                                                        <td className="quy-col">
                                                            <div className="quantity">
                                                                <div className="pro-qty">
                                                                    <span className="dec qtybtn" onClick={()=>handleDec(index)}>
                                                                        -
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        name="quantity"
                                                                        value={cart.quantity}
                                                                    />
                                                                    <span className="inc qtybtn" onClick={()=>handleInc(index)}>
                                                                        +
                                                                    </span>
                                                                </div>
                                                                <button
                                                                   
                                                                    style={{
                                                                        border: "none",
                                                                    }}
                                                                >
                                                                    <i
                                                                        className="cancel fas fa-check ml-2"
                                                                        title="Update Product Qty"
                                                                        style={{
                                                                            cursor: "pointer",
                                                                            color: "#00FF00",
                                                                        }}
                                                                    ></i>
                                                                </button>
                                                            </div>
                                                        </td>

                                                        <td className="size-col">
                                                            <h4
                                                                style={{
                                                                    textAlign:
                                                                        "center",
                                                                }}
                                                            >
                                                                L
                                                            </h4>
                                                        </td>

                                                        <td className="total-col">
                                                            <h4>${cart.price * cart.quantity}.00</h4>
                                                        </td>
                                                        <td className="total-col">
                                                            <button
                                                                ref={tdRef}
                                                                style={{
                                                                    border: "none",
                                                                }}
                                                                onClick={()=>handleRemove(cart.id)}
                                                            >
                                                                <i
                                                                    className="cancel fas fa-times"
                                                                    title="Remove Product"
                                                                    style={{
                                                                        cursor: "pointer",
                                                                        color: "#f51167",
                                                                    }}
                                                                ></i>   
                                                            </button>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="total-cost">
                                    <h6>
                                        Total
                                        <span>${totalAmount}.00</span>
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 card-right">
                            <div>
                                <form className="promo-code-form">
                                    <input
                                        type="text"
                                        placeholder="Enter promo code"
                                    />
                                    <button>Submit</button>
                                </form>
                            </div>

                            <div className="card">
                                <div>
                                    <form>
                                        <div className="row shipping-btns ml-3">
                                            <div className="col-12 text-uppercase mb-3">
                                                <h6>Shipping Options</h6>
                                            </div>

                                            <div className="col-4 mt-2">
                                                <h6>Select zone </h6>
                                            </div>

                                            <div className="col-6 mr-1">
                                                <div className="cf-radio-btns">
                                                    <div className="cfr-item">
                                                        <select className="custom-select">
                                                            <option defaultValue="1">
                                                                Select
                                                            </option>
                                                            <option defaultValue="2">
                                                                Select
                                                            </option>
                                                            <option defaultValue="3">
                                                                Select
                                                            </option>
                                                            <option defaultValue="4">
                                                                Select
                                                            </option>
                                                            <option defaultValue="5">
                                                                Select
                                                            </option>
                                                            <option defaultValue="6">
                                                                Select
                                                            </option>
                                                            <option defaultValue="7">
                                                                Select
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <button className="btn btn-dark text-center ml-3">
                                                Calculate
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <a href="./" className="site-btn">
                                Proceed to checkout
                            </a>
                            <a href="./" className="site-btn sb-dark">
                                Continue shopping
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Footer></Footer> */}
        </div>
    );
}

export default Cart;
