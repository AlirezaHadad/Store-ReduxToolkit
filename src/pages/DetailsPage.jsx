import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

import Loder from "../components/Loder";
import styles from "./DetailsPage.module.css"
import { fetchProducts } from "../features/product/productSlice";
import { useEffect } from "react";

const DetailsPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

    const productDetails = useSelector((store) => store.product.products.find((i)=>i.id === +id))
    if(!productDetails) return <Loder/>
    console.log(productDetails);
    return(
        <>
            <div className={styles.container}>
                <img src={productDetails.image} alt={productDetails.title} />
                <div className={styles.information}>
                    <h3 className={styles.title}>{productDetails.title}</h3>
                    <p className={styles.description}>{productDetails.description}</p>
                    <p className={styles.category}><SiOpenproject/>{productDetails.category}</p>
                    <div>
                        <span><IoMdPricetag/>{productDetails.price}$</span>
                        <Link to="/Products"><FaArrowLeft/>Back to shop</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DetailsPage;