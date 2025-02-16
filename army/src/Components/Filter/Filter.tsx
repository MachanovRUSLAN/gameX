import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import { SetCategory } from "../../Redux/Slice";

interface CategProps {
  closeFilter: () => void;
}

const Filter: React.FC<CategProps> = ({ closeFilter }) => {
  const dispatch = useDispatch();

  const handlCategoryClick = (Category: string) => {
    dispatch(SetCategory(Category));
  };

  return (
    <div className="p-3">
      <div className="categories">
        <div className="border-l-green-600 border-l-4 text-white px-2 relative font-bold text-xl">
          CATEGORIES
        </div>

        <ul>
          <li
            className="text-white font-bold pt-4 text-[17px]"
            onClick={() => handlCategoryClick("Keyboard")}
          >
            Keyboard
          </li>
          <li
            className="text-white font-bold pt-4 text-[17px]"
            onClick={() => handlCategoryClick("Fan")}
          >
            Fan
          </li>
          <li
            className="text-white font-bold pt-4 text-[17px]"
            onClick={() => handlCategoryClick("Controller")}
          >
            Controller
          </li>
          <li
            className="text-white font-bold pt-4 text-[17px]"
            onClick={() => handlCategoryClick("HeadPhon")}
          >
            HeadPhon
          </li>
          <li
            className="text-white font-bold pt-4 text-[17px]"
            onClick={() => handlCategoryClick("Headset")}
          >
            Headset
          </li>
          <li
            className="text-white font-bold pt-4 text-[17px]"
            onClick={() => handlCategoryClick("GameController")}
          >
            Game Controller
          </li>
          <li
            className="text-white font-bold pt-4 text-[17px]"
            onClick={() => handlCategoryClick("Smart")}
          >
            Smart
          </li>
          <li
            className="text-white font-bold pt-4 text-[17px]"
            onClick={() => handlCategoryClick("Chair")}
          >
            Chair
          </li>
          <li
            className="text-white font-bold pt-4 text-[17px]"
            onClick={() => handlCategoryClick("")}
          >
            All
          </li>
        </ul>
      </div>

      <div className="Size">
        <div className=" relative">
          <img src="/src/assets/Imgs/filter.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Filter;
