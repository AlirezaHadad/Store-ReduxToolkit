import { useDispatch, useSelector } from "react-redux";
import BasketCart from "../components/BasketCart";
import BasketSidebar from "../components/BasketSidebar";

import styles from "./Checkout.module.css"

const Checkout = () => {
    const state = useSelector(store => store.cart)

    return(
        <>
            {state.itemsCounter === 0 &&
            (<div className={styles.containerCard}>
                <img className={styles.CardImg} src="/shoppingCart.png" />
                <p className={styles.CardText}>Your shopping cart is empty</p>
            </div>)}
            <div className={styles.container}>
            {state.itemsCounter !== 0 &&(
                <BasketSidebar state={state} />
            )}
                <div className={styles.products}>
                    {state.selectedItems.map((product)=>(
                        <BasketCart key={product.id} data={product} />
                    ))}
                </div>
            </div>
        </>
    )
}
export default Checkout;