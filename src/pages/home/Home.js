// import HeaderTop from "@/component/Header/HeaderTop";
// import Navbar from "@/component/Header/Navbar"
import ProductLastest from "@/component/Content/ProductLastest";
import ProductList from "@/component/Content/ProductList"
import {useAtomValue} from 'jotai'
import { cartAtom } from "../cart/Cart";

function Home() {
    const cartValue=useAtomValue(cartAtom)

    
    console.log(cartValue);
    return (

        <div>
            <ProductLastest></ProductLastest>
            <ProductList></ProductList>
        </div>
      );
}

export default Home;