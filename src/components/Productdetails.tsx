import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


interface productDetailsProps{
  thumbnail:string;
  title:string;
  description:string;
  price:number;
  rating:number;
};


const Productdetails = () => {
  const[productDetail,setProductDetail] = useState<productDetailsProps>([]);
  const {id} = useParams();
  const url = `https://dummyjson.com/products/${id}`;
  useEffect(()=>{
    const getProduct = async () =>{
      try {
        const product = await axios.get(url);
        const response = product.data;
        console.log(response);
        setProductDetail(response);
      } catch (error) {
        console.log(error, "Couldn't get the selected Product.");
      }
    }
    getProduct();
  },[id]);

  return (
    <div className="py-6 px-2">
        <Link to="/">
            <button className="bg-black px-4 py-1 text-white rounded-sm cursor-pointer">Back</button>
        </Link>
        <div className="space-y-4">
          <img src={productDetail.thumbnail} alt={productDetail.title} />
          <h3 className="font-bold text-xl">{productDetail.title}</h3>
          <p>{productDetail.description}</p>
          <div>
            <p><span className="font-semibold">Price:</span> ${productDetail.price}</p>
            <p><span className="font-semibold">Rating:</span> {productDetail.rating}</p>
          </div>
        </div>
    </div>
  )
}

export default Productdetails;