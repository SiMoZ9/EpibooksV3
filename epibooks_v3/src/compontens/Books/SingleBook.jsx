import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selected, setSelected } from "../../reducers/bookReducers";
import { addAsin, Asin, fetchComments } from "../../reducers/commentsReducers";
import CommentArea from "../Comments/CommentArea";

const SingleBook = ({ title, category, img, price, asin }) => {
  const [_selected, setIsSelected] = useState(false);
  const dispatch = useDispatch();

  const id = useSelector(Asin);
  const API_URL = `https://striveschool-api.herokuapp.com/api/comments/`;

  const fetchParams = {
    url: API_URL + asin,
    params: {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZhMDBlOGU4NDIyNzAwMTRjMzI2NzciLCJpYXQiOjE2OTU3MzMxNTgsImV4cCI6MTY5Njk0Mjc1OH0.z-Fxi9IbskrELa5IM7x6ua1Cvdx1FFmvztf_1R_Pwkg",
        "Content-Type": "application/json",
      },
    },
  };

  useEffect(() => {}, []);

  const handleClick = () => {
    setIsSelected(!_selected);
    dispatch(setSelected(_selected));
    dispatch(addAsin(asin));
    dispatch(fetchComments(fetchParams));

    console.log(id);
  };

  return (
    <>
      <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <img
          src={img}
          alt="Product"
          className="h-80 w-72 object-cover rounded-t-xl"
          onClick={handleClick}
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">
            {category}
          </span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            {title}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              {price}
            </p>
          </div>

          <div>
            <Link to={`/book/${asin}`}>
              <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full">
                Vai
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBook;
