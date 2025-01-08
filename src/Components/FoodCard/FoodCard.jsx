const FoodCard = ({item}) => {
  const {name, image, price, description} = item;
  return (
      <div className="card bg-base-100 shadow-xl">
          <figure><img src={image} className="w-[300px] h-[200px]" alt="Shoes" /></figure>
          <p className="absolute inter right-0 mr-16 mt-4 px-4 rounded-md bg-slate-900 text-white">${price}</p>
          <div className="card-body flex flex-col items-center">
              <h2 className="card-title inter">{name}</h2>
              <p >{description}</p>
              <div className="card-actions justify-end">
                  <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
              </div>
          </div>
      </div>
  );
};

export default FoodCard;