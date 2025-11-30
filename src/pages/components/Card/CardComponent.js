import React from "react";
import "./CardComponent.css";
import { BASE_URL } from "../../utils/constants/const";

export const CardComponent = ({props}) => {
    const { image,name, cuisines, costForTwo, avgRating, cloudinaryImageId, aggregatedDiscountInfoV3}=props.info;
  return (
    <div className="card">
      <img src={BASE_URL+cloudinaryImageId} alt={name} className="card-img" />

      <h3 className="card-title">{name}</h3>
      <p className="card-desc">{cuisines.join(", ")}</p>
      <div className="card-bottom">
        <span className="card-price">{aggregatedDiscountInfoV3?.subHeader}</span>
        <p className="card-rating">{avgRating}</p>
        <button className="card-btn">Add to Cart</button>
      </div>
    </div>
  );
};

