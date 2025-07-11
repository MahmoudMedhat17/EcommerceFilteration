interface paginationProps{
  currentPage:number;
  setCurrentPage:(currentPage:number)=>void;
  totalItems:number;
};


const Pagination = ({currentPage, setCurrentPage, totalItems}:paginationProps) => {


  const buttons = [];

  for(let i = 1; i <= totalItems; i++){
    buttons.push(i);
  };

  const handlePagination = (page:number) =>{
    setCurrentPage(page);
  };


  return (
    <div>
      {
        buttons.map((pageNumber,index)=>(
          <button onClick={()=>handlePagination(pageNumber)} key={index} className={`mt-4 mx-3 ${pageNumber === currentPage ? "px-2 rounded-full bg-black text-white" : ""} cursor-pointer`}>
            {pageNumber}
          </button>
        ))
      }
    </div>
  )
}

export default Pagination