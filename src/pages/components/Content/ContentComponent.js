import React, { useEffect, useState } from "react";
import {CardComponent} from "../Card/CardComponent"
import "./ContentComponent.css"
export const ContentComponent = () =>{
    const [searchVal, setSearchVal] = useState("");
    const [restaurantsData, setRestaurantsData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const onSearchRestaurant = (e) => {
        setSearchVal(e.target.value)
    }
    useEffect(()=>{
       fetchData();
    },[])

    const fetchData = async() =>{
         const fetchData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5288974&lng=73.8665321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await fetchData.json();
        const filterData = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if(filterData !== undefined){
            setRestaurantsData(filterData);
            setFilteredData(filterData);
        }
    }
    const searchRestaurant = () => {
       const newFilteredData = restaurantsData.filter(item => item.info.name?.toLowerCase().includes(searchVal.toLowerCase()));
       setFilteredData(newFilteredData);
    }
    const filterTopRated = () => {
        const newFilteredData = restaurantsData.filter(item => item.info.avgRating > 4)
       setFilteredData(newFilteredData);
    }
    return (
        <main className="content-wrapper">
           <div className="section-title">Restaurants with online food delivery.</div>
           <input type="text" value={searchVal} onChange={(e)=>onSearchRestaurant(e)} className="text-input"/>
           <button onClick={searchRestaurant} className="search-btn">Search</button>
           <button onClick={filterTopRated} className="filter-btn">Filter Top Rated</button>
           <hr/>

           <div className="card-layout">
            {
               filteredData && filteredData?.map((item)=>{
                    return(
                        <CardComponent props={item} key={item?.info?.id}/>
                    )
                })
            }
           </div>
        </main>
    )
}