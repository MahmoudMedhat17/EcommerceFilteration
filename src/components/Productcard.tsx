


interface productProps{
    title:string;
    image:string;
    price:number;
};


const Productcard = ({title, image, price}:productProps) => {
  return (
    <div className="border-2 border-gray-200 p-4 cursor-pointer">
        <div>
            <img src={image} alt={title} className="block mx-auto w-56"/>
            <h3 className="font-bold">{title.slice(0,16)}</h3>
            <p>${price}</p>
        </div>
    </div>
  )
}

export default Productcard;