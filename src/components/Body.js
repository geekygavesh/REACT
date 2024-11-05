import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = ()=>{
    
    const [listofRestaurants,setListofRestaurants] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick = {()=>{
                    const filteredlist = listofRestaurants.filter((i)=>i.info.avgRating>4)
                    setListofRestaurants(filteredlist)
                }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container"> 
                {
                listofRestaurants.map((i) => (<RestaurantCard key={i.info.id} resData={i}/>))
                }   
            </div>
        </div>
    );
};
export default Body;