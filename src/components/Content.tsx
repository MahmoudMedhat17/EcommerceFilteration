import { Tally3 } from "lucide-react";
import {  useEffect, useState } from "react";
import axios from "axios";
import { useFilterContext } from "../context/Storecontext";
import Productcard from "./Productcard";
import { Link } from "react-router-dom";



const Content = () => {
    const[products,setProducts] = useState<string[]>([]);
    const[dropDown,setDropDown] = useState(false);
    const[filter,setFilter] = useState("all");
    const[currentPage,setCurrentPage] = useState(1);
    const productsPerPage = 9;
    const {keyword,maxPrice,minPrice,searchQuery,selectedCategory} = useFilterContext();
    
    useEffect(()=>{
        let url = `https://dummyjson.com/products?limit=${productsPerPage}&skip=${(currentPage - 1) * productsPerPage}`;
        if(keyword){
            url = `https://dummyjson.com/products/search?q=${keyword}`;
        };

        axios.get(url).then((item)=>{
            setProducts(item.data.products);
            console.log(item.data.products);
        })
        .catch((error)=>{
            console.log(error,"Couldn't get the data from the API!");
        });

    },[currentPage, keyword]);


    let filteredProducts = [...products];


    const getFilteredProducts = () =>{
        if(searchQuery){
            filteredProducts = filteredProducts.filter((product)=> product.title.toLowerCase().includes(searchQuery.toLowerCase()));
        };

        if(minPrice !== undefined){
            filteredProducts = filteredProducts.filter((product)=> product.price >= minPrice);
        };

        if(maxPrice !== undefined){
            filteredProducts = filteredProducts.filter((product)=> product.price <= maxPrice);
        };

        if(selectedCategory){
            filteredProducts = filteredProducts.filter((product)=> product.category === selectedCategory);
        };

        if(filter === "cheap"){
            return filteredProducts.sort((a,b)=> a.price - b.price);
        };

        if(filter === "expensive"){
            return filteredProducts.sort((a,b)=> b.price - a.price);
        };

        if(filter === "popular"){
            return filteredProducts.sort((a,b)=> b.rating - a.rating);
        };

        return filteredProducts;
    };


    const displayProducts = getFilteredProducts();


  return (
    <div className="px-4 py-6 xs:w-[20rem] sm:w-[40rem] lg:w-[55rem]">
        <button onClick={()=>setDropDown((prev)=>!prev)} className="relative flex gap-2 items-center border-2 border-gray-100 p-2 rounded-full cursor-pointer">
            <Tally3/>
            <span className="font-semibold text-lg">Filter</span>
            {
                dropDown &&
                <div className="w-fit absolute top-13 left-0 bg-white shadow-md text-start space-y-2">
                    <p onClick={()=>setFilter("cheap")} className="font-semibold p-1.5 hover:bg-gray-200 duration-300 ease-in">Cheap</p>
                    <p onClick={()=>setFilter("expensive")} className="font-semibold p-1.5 hover:bg-gray-200 duration-300 ease-in">Expensive</p>
                    <p onClick={()=>setFilter("popular")} className="font-semibold p-1.5 hover:bg-gray-200 duration-300 ease-in">Popular</p>
                </div>
            }
        </button>

        {/* Here get data from the API */}
        <section className="mt-2 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {
                displayProducts.map((product)=>(
                    // Create a condition here if the category is empty then show a message
                    <Link to={`/product/${product.id}`}>
                        <Productcard key={product.id} title={product.title} image={product.thumbnail} price={product.price}/>
                    </Link>
                ))
            }
        </section>
    </div>
  )
}

export default Content;