import React, { useState } from "react";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Filter from "../Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/Slice";
import { Link } from "react-router";
import { useParams } from "react-router";
import { RootState } from "../../Redux/Store";

// type managment
interface BaseItem {
  id: number;
  img: string;
  title: string;
  price: number;
  Category: string;
}

interface ProductsProps {
  Data: BaseItem[];
}

function Products({ Data }: ProductsProps) {
  const [likedItems, setLikedItems] = useState<{ [key: number]: boolean }>({});

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const selectdCategory = useSelector(
    (state: RootState) => state.counter.selectedCategory
  );

 // Toggle heart state for each product
 const toggleClickHeart = (id: number) => {
  setLikedItems((prev) => ({
    ...prev,
    [id]: !prev[id], // Toggle the specific product's heart state
  }));
};

  // open and close Filter bar
  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const filteredData = selectdCategory
    ? Data.filter((item) => item.Category === selectdCategory)
    : Data;

  return (
    <div className="bg-black">
      <div>
        <button
          onClick={toggleFilter}
          title="button"
          className="bg-green-500 text-white font-bold w-[180px] p-2 ml-4 rounded-md"
        >
          <p className="text-white">Filter</p>
        </button>
      </div>
      <div className="lg:flex">
        {/* filter component is here  */}
        <div onClick={toggleFilter}>
          {isOpen && <Filter closeFilter={toggleFilter} />}
        </div>
        <div className="grid lg:grid-cols-3 gap-4">
          {/* map and display your filtered Data */}
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div key={item.id} className="p-4">
                <div className="bg-[#2c2d2f] relative py-[60px] p-4 rounded-lg shadow-lg">
                  {/* // Link to ProductPage component by Id */}
                  <Link to={`/shop/${item.id}`}>
                    <img
                      src={item.img}
                      alt={item.title || "Product"}
                      className="w-full h-auto object-cover rounded-md"
                    />
                  </Link>
                  <div className="absolute top-6 left-6 text-green-500 font-bold text-2xl">
                    {item.title}
                  </div>
                  <div
                    onClick={() => toggleClickHeart(item.id)}
                    className={`${
                      likedItems[item.id] ? "text-green-500" : "text-white"
                    } absolute top-2 right-6 text-2xl cursor-pointer`}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                  <div className="absolute flex justify-between items-center bottom-4 w-full px-6">
                    <div className="font-bold text-2xl text-green-600">
                      ${item.price}
                    </div>

                    <button
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: item.id,
                            title: item.title,
                            price: item.price,
                            img: item.img,
                            quantity: 1,
                            category: item.Category,
                          })
                        )
                      }
                      title="Button"
                      className="bg-[#3cbc1c] text-white font-bold p-2 w-[160px] flex items-center justify-center gap-2 
                                 hover:bg-white hover:text-[#3cbc1c] border-2 border-[#3cbc1c] transition-all duration-300 rounded-md"
                    >
                      Add To Cart
                      <span>
                        <FontAwesomeIcon icon={faCartShopping} />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white">No Products Found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
