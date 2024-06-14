import { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "./utils/constants";


const RestaurantMenu = ()=>{

    const[menu,setMenu] =useState(null);

    const {resId} = useParams();

    

    const fetchmenuList = async()=>{

        const data =  await fetch(MENU_URL+resId);
        const menuList = await data.json(" ");
        setMenu(menuList.data.cards)
     }
     
     useEffect(()=>{
         fetchmenuList();
     },[]);

     console.log(menu)

     if(menu===null){
        return <Shimmer/>
     }
     const{name,cuisines,costForTwoMessage}=menu[2].card.card.info;

    const itemcards=menu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
   
   
   
    return (
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            <h3>Menu</h3>
            <ul>
                {itemcards.map((men)=>(
                   <li>{men.card.info.name}-{"Rs."}-{men.card.info.price/100}</li> 
                ))}
            </ul>
        </div>
    )
}


export default RestaurantMenu;