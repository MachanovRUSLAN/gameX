import React, { useEffect, useState } from "react";
import Products from "../../Components/Products/Products";
import supabase from "../../config/supabaseClient";
import ShopHead from "../../Components/shopHead/ShopHead";

interface BaseItem {
  id: number;
  img: string;
  title: string;
  price: number;
  Category: string;
}

function Shop() {
  const [base, setBase] = useState<BaseItem[]>([]);

  // fetchin data

  useEffect(() => {
    const fetchBase = async () => {
      const { data, error } = await supabase.from("base").select();
      console.log("Fetched Data:", data);

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setBase(data);
      }
    };

    fetchBase();
  }, []);

  return (
    <div>
      <ShopHead />
      {/* send data like prop prroduct page by Data name */}
      <Products Data={base} />
    </div>
  );
}

export default Shop;
