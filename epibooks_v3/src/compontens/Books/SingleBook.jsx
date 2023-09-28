import React from "react";

const SingleBook = ({ title, category, img, price }) => {
  return (
      <>
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img src={img}
                   alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">{category}</span>
                <p className="text-lg font-bold text-black truncate block capitalize">{title}</p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">{price}</p>
                </div>
              </div>
            </a>
          </div>
        </>
);
}

export default SingleBook;
