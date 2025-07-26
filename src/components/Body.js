import RestaurantCard from "./RestaurantCard";
import resItems from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resItems);
  const [infoArray, setInfoArray] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchResData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/swiggy");
      const data = await res.json();

      data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.map(
        (data) => {
          infoArray.push(data.info);
        }
      );

      data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map(
        (eachObject) => {
          infoArray.push(eachObject.info);
        }
      );

      // console.log(infoArray);

      setListOfRestaurants(
        data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );
    } catch (err) {
      console.error("Frontend Fetch Error:", err);
    }
  };

  console.log("Body Rendered");

  useEffect(() => {
    fetchResData();
  }, []);

  return infoArray.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search your product"
            value={searchText}
            onChange={
              (e) => {
                setSearchText(e.target.value)
            }}
          />
          <button
            onClick={() => {
              // Filter the Restaurant cards and Update the UI
              console.log("Search Text:", searchText);

              const filteredResList = infoArray.filter((eachRes) => {
                // console.log(eachRes)
                return eachRes.name.toLowerCase().includes(searchText.toLowerCase());
              });
              setInfoArray(filteredResList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = infoArray?.filter((eachRes) => {
              return eachRes?.avgRating > 4.5;
            });
            setListOfRestaurants(filteredList);
            setInfoArray(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* {listOfRestaurants.map((data) => (
          <RestaurantCard key={data.info.id} resData={data} infoArray={infoArray}/>
        ))} */}
        <RestaurantCard infoArray={infoArray} />
      </div>
    </div>
  );
};

export default Body;
