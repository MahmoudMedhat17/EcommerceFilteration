import { createContext, useContext, useState } from 'react';


interface ContextProps{
    searchQuery:string;
    setSearchQuery:(searchQuery:string)=>void;
    selectedCategory:string;
    setSelectedCategory:(selectedCategory:string)=>void;
    minPrice:number | undefined;
    setMinPrice:(minPrice:number | undefined)=>void;
    maxPrice:number | undefined;
    setMaxPrice:(maxPrice:number | undefined)=>void;
    keyword:string;
    setKeyword:(keywords:string)=>void;
};

const FilterContextType = createContext<ContextProps | undefined>(undefined);


const StoreContext = ({children}:{children:React.ReactNode})=>{
    
    const[searchQuery,setSearchQuery] = useState<string>("");
    const[minPrice,setMinPrice] = useState<number | undefined>(undefined);
    const[maxPrice,setMaxPrice] = useState<number | undefined>(undefined);
    const[selectedCategory,setSelectedCategory] = useState<string>("");
    const[keyword,setKeyword] = useState<string>("");


    const contextValues = {searchQuery, setSearchQuery, minPrice, setMinPrice, maxPrice, setMaxPrice, selectedCategory, setSelectedCategory, keyword, setKeyword};

    return(
        <FilterContextType.Provider value={contextValues}>
            {children}
        </FilterContextType.Provider>
    )
};


export const useFilterContext = () =>{
    const filterContext = useContext(FilterContextType);
    if(!filterContext){
        throw new Error("FilterContext Doesn't work beaware!!!");
    };
    return filterContext;
};

export default StoreContext;