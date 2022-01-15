import React,{useEffect} from "react";
import ProductComponent from "./ProductComponent";
// import { useSelector } from "react-redux";
import axios from "axios"
import { useDispatch } from "react-redux";
import { setProducts } from "../reduxfiles/action/action";

const ProductListing = () => {
  const dispatch = useDispatch()

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
     console.log("err : ", err)
    }) 
   dispatch(setProducts(response.data)) 
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <div className="ui grid container">
    <ProductComponent/>
    </div>
  );
};

export default ProductListing;
