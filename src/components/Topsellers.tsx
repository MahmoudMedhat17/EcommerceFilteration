import axios from "axios";
import { useState, useEffect } from "react";


interface userProps{
  id:number;
  image:string;
  firstName:string;
  lastName:string;
};

const Topsellers = () => {


  const[usersData,setUsersData] = useState([]);


  useEffect(()=>{
    axios.get("https://dummyjson.com/users?limit=5")
    .then((user)=>{
      console.log(user.data);
      setUsersData(user.data);
    })
    .catch((error)=>(
      console.log(error, "Can't the users data from the API.")
    ))
  },[]);

  return (
    <div className="border-2 border-gray-200 p-4 rounded-md">
      <h3 className="font-bold text-xl">Top Sellers</h3>
      <div className="p-2">
        {
          usersData?.users?.map((user:userProps)=>(
            <div key={user.id} className="flex justify-between items-center space-y-4">
            <div className="flex items-center gap-2">
              <img src={user.image} alt={user.firstName} className="w-10 h-10"/>
              <h5 className="font-semibold">{user.firstName}{" "}{user.lastName}</h5>
            </div>
            <button className="p-2 bg-black text-white rounded-sm cursor-pointer">
              Follow
            </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Topsellers;