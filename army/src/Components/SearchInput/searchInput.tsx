import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import supabase from "../../config/supabaseClient";
import { Link } from "react-router";

interface SearchProps {
  Open: () => void;
}

interface BaseItem {
  id: number;
  img: string;
  title: string;
  price: number;
}

const SearchInput: React.FC<SearchProps> = ({ Open }) => {
  const [base, setBase] = useState<BaseItem[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // fetching data supabase formation

  useEffect(() => {
    const fetchBase = async () => {
      const { data, error } = await supabase.from("base").select();

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setBase(data as BaseItem[]);
      }
    };

    fetchBase();
  }, []);

  //   Filtering Logic
  const filteredItems =
    searchQuery.trim() !== ""
      ? base.filter((item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [];

  return (
    <div className="bg-[#2c2d2f] h-[500px] transition-all duration-400 ease-in-out">
      <div className="text-center relative">
        <p className="text-[#3cbc1c] text-[45px] lg:pt-0 pt-8">
          Start typing and hit Enter
        </p>
        <div
          className="absolute top-0 right-6 text-[#3cbc1c] font-bold text-4xl cursor-pointer"
          onClick={Open}
        >
          ×
        </div>
      </div>

      {/* Search Input */}
      <div className="w-[80%] m-auto h-[40px] relative mt-[50px]">
        <input
          placeholder="Search Anything"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full h-full border-b-2 border-b-white text-white outline-none px-4 bg-transparent"
        />
        <div className="absolute top-2 right-2 text-[#3cbc1c]">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>

      {/*Display Filtered Results */}
      <div className="text-white">
        {filteredItems.length > 0 ? (
          filteredItems?.map((item) => (
            // when click product send to product page and close searchBar
            <Link to={`/shop/${item.id}`} onClick={Open}>
              <div
                key={item.id}
                className="flex items-center w-9/12 m-auto justify-start gap-4 p-2"
              >
                <img src={item.img} alt={item.title} className="w-12 h-12" />
                <div>
                  <p className="text-lg">{item.title}</p>
                  <p className="text-sm text-gray-400">${item.price}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-400 text-center mt-4">No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
