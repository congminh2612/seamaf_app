import { cartAtom } from "@/pages/cart/Cart";
import { useSetAtom, useAtom} from 'jotai'
import { Link } from "react-router-dom";
import "./style/Content.scss";
import { useEffect } from 'react';


function ProductItem({product}) {

    const [cart, setCart] = useAtom(cartAtom)

    const addToCart = (id) => {
        const index = cart.findIndex((item) => item.id === id)
        const newcart = [...cart]

        if (index !== -1) {
            newcart[index] =  {
                ... newcart[index],
                quantity: newcart[index].quantity + 1
            }
        } else {
            newcart.push({...product, quantity: 1})
        }
        setCart(newcart)
    }

    
 
    return (
        <div className="product-item">
            <div className="pi-pic border">
                {/* <a href="/detail">a</a> */}
                <Link to={`detail/${product.name.split(" ")[0].toLowerCase()}`} >
                    <img src={product.images[0].path} alt="" />
                </Link>
                <div className="pi-links">
                    <div>
                            <button className="add-card" onClick={() => addToCart(product.id)}>
                                <div className="add-card__icon-bag"></div>
                                <span className="add-card-text">
                                    ADD TO CART
                                </span>
                            </button>
                       

                            <form action="">
                                <button className="whishlist-btn">
                                <div className="icon-heart"></div>
                                </button>
                            </form>
                    </div>
                </div>
            </div>
            <div className="pi-text">
                <h6>${product.price}.00</h6>
                <p>{product.name}</p>
            </div>
        </div>
    );
}

export default ProductItem;
