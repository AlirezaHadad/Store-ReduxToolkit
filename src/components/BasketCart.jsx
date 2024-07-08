import { shortenText } from "../helper/helper";

import { MdDeleteOutline } from "react-icons/md";

import { useDispatch } from "react-redux";
import {addItem,removeItem,increase,decrease,checkout} from "../features/cart/cartSlice"

import styles from "./BasketCart.module.css"
const BasketCart = ({data,clickHandler}) => {

    const dispatch = useDispatch()

    return(
        <div className={styles.card}>
            <img src={data.image} alt={data.title} />
            <p>{shortenText(data.title)}</p>
            <p>${data.price}</p>
            <div className={styles.actions}>
                {data.quantity === 1 &&(<button onClick={()=>dispatch(removeItem(data))}><MdDeleteOutline/></button>)}
                {data.quantity > 1 &&(<button onClick={()=>dispatch(decrease(data))}>-</button>)}
                <span>{data.quantity}</span>
                <button onClick={()=>dispatch(increase(data))}>+</button>
            </div>
       </div>
    )
}
export default BasketCart;