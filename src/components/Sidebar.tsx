import React, { useState, useEffect } from "react";
import axios from "axios";
import {useFilterContext} from "../context/Storecontext";


interface categoryType{
  category:string;
};



const Sidebar = () => {

  const[products,setProducts] = useState<string[]>([]);
  const keyWords = ["apple", "watch", "fashion", "trend", "shoes", "shirt"];
  const url = 'https://dummyjson.com/products';
  const {searchQuery,selectedCategory,maxPrice,minPrice,setSelectedCategory,setKeywords,setMaxPrice,setMinPrice,setSearchQuery} = useFilterContext();

  useEffect(()=>{
    const fetchCategories = async () =>{
      try {
        const categoriesData = await axios.get(url);
        const responseData: categoryType[] = categoriesData.data;
        const uniqueCategoryData = [...new Set(responseData?.products?.map((item)=> item.category))] as string[];
        console.log(uniqueCategoryData);
        setProducts(uniqueCategoryData);
      } catch (error) {
        console.log(error,"Couldn't get the categories from the API data.");
      }
    }
    fetchCategories();
  },[]);


  const handleMinPrice = (e:React.ChangeEvent<HTMLInputElement>) =>{
    const value = e.target.value;
    setMinPrice(value ? parseFloat(value) : undefined);
  };

  const handleMaxPrice = (e:React.ChangeEvent<HTMLInputElement>) =>{
    const value = e.target.value;
    setMaxPrice(value ? parseFloat(value) : undefined);
  };

  const handleCategories = (category:string) =>{
    setSelectedCategory(category);
  };
  
  const handleKeywords = (keyword:string) =>{
    setKeywords(keyword);
  };

  const handleResetButton = () =>{
    setSearchQuery("");
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setSelectedCategory("");
    setKeywords("");
  };

  return (
    <div className="px-4 py-6 w-64 h-auto">
      <h2 className="font-bold text-xl">Store</h2>
      
      <section className="mt-8">
        <input type="text" placeholder="Search Product" className="w-full border-2 border-gray-100 rounded-md p-2" value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}/>
        <div className="flex gap-2 w-full mt-2">
          <input type="number" placeholder="Min" className="w-1/2 border-2 border-gray-100 rounded-md p-2" value={minPrice ?? ""} onChange={handleMinPrice}/>
          <input type="number" placeholder="Max" className="w-1/2 border-2 border-gray-100 rounded-md p-2" value={maxPrice ?? ""} onChange={handleMaxPrice}/>
        </div>
      </section>

      <section className="mt-8 font-semibold text-lg">
        <h3 className="mb-2">Categories</h3>
        {
          products.map((category, index)=>(
            <>
              <div key={index} className="flex gap-2">
                <input type="radio" value={category} onChange={()=>handleCategories(category)} checked={selectedCategory === category}/>
                <p className="font-normal uppercase cursor-pointer">{category}</p>
              </div>
            </>
          ))
        }
      </section>

      <section className="mt-8 font-semibold text-lg">
        <h3>Keywords</h3>
        <div className="space-y-4">
          {
            keyWords.map((keyword, index)=>(
              <div key={index}>
                <p onClick={()=>handleKeywords(keyword)} className="font-normal uppercase px-2 py-1 cursor-pointer border-[1px] border-gray-50 rounded-md hover:bg-gray-200 duration-300">{keyword}</p>
              </div>
            ))
          }
        </div>
      </section>

      <button onClick={handleResetButton} className="w-full cursor-pointer bg-black text-white px-4 py-1.5 mt-10 rounded-md">
        Reset Filters
      </button>
    </div>
  )
}

export default Sidebar;