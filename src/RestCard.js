import { CARD_IMG } from "./utils/constants";

const RestCard = ({oneRest})=>{
    const data = oneRest?.info;
    const{name,cloudinaryImageId,locality,areaName,costForTwo,cuisines,avgRating}=data;
    const dy_img = CARD_IMG;
    
    return(
        <div className="card">
        <img className = "card-image" src= {dy_img+cloudinaryImageId}/>
        <div className="card-content">
        <h4>{name}</h4>
        <h6>{locality}</h6>
        <h6>{areaName}</h6>
        <h6>{costForTwo}</h6>
        <h6>{cuisines}</h6>
        <h6>{avgRating}</h6>
        </div>
    </div>
    )
}

export default RestCard;