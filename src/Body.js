import { useState } from "react";
import { useEffect } from "react";
import RestCard from "./RestCard";
import { SWIGGY_API } from "./utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = ()=>{


    const [resList,setresList] =useState([]);

    let [filteredList,setfilteredList] =useState([]);

    const[searchText,setsearchText] = useState("")
    
   
    const getData = async()=>{
        const data = await fetch(SWIGGY_API);
        const response = await data.json(",")
        
        
        setresList(response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredList(response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

  
useEffect(()=>{
    getData();
},[])

if(resList.length === 0){
    return <Shimmer />
    }


    return (
        <div className="body">
        <div className="inputbutton">
        <input type="text" className="search" value={searchText} onChange={(data)=>{setsearchText(data.target.value)}}></input>
        <button className="search_button" onClick={()=>{
            const filteredList = resList.filter((res)=>{
            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
            })
            setfilteredList(filteredList)
            
        }}>search</button>
        </div> 
        <div className="filterButton">
        <button onClick={()=>{
         const filteredList = resList.filter((restaurant)=>restaurant.info.avgRating>4)
         setfilteredList(filteredList)}
        }>Top Rating Restaurants</button>
    </div>
    <div className="cards">
    {
            filteredList.map((restaurant)=>
            (<Link to={"restaurants/"+restaurant.info.id}><RestCard key={restaurant.info.id} oneRest={restaurant}/></Link>))
        }
    </div>
        
        
    </div>
    )
}

export default Body;