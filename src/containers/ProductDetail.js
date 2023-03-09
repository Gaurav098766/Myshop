import React,{useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct,removeSelectedProduct } from "../redux/actions/productActions";

const ProductDetails = () =>{
    const product = useSelector((state) =>state.product);
    const {image,title,category,price,description} = product
    const {productid} =useParams();
    const dispatch = useDispatch();

    const fetchProductDetail = async() =>{
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productid}`)
            .catch((err)=>{
                console.log(err)
            })
        dispatch(selectedProduct(response.data))
    }
    useEffect(()=>{
        if(productid && productid !== "")fetchProductDetail();
        return () =>{
          dispatch(removeSelectedProduct)
        }
    },[productid])



    return(
        <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
          <div style={{marginTop:20 , fontSize:20}}>...Loading</div>
        ) : (
          <div className="ui placeholder segment" style={{marginTop:60}}>
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={image} alt="img" style={{height:600}} />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <a className="ui teal tag label">${price}</a>
                  </h2>
                  <h3 className="ui brown block header">{category}</h3>
                  <p>{description}</p>
                  <div className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    <div className="visible content">Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
}

export default ProductDetails