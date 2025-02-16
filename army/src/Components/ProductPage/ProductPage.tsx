import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; // ✅ Correct import
import supabase from "../../config/supabaseClient";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import { addToCart, increaseQuantity } from "../../Redux/Slice";

interface BaseItem {
  id: number;
  img: string;
  title: string;
  price: number;
  quantity: number;
}

function ProductPage() {
  const { id } = useParams(); //  Getting the product ID from the URL
  const [product, setProduct] = useState<BaseItem | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data, error } = await supabase
        .from("base")
        .select()
        .eq("id", id) // Fetch only the product that matches the ID
        .single(); // Since we expect only one item

      console.log("Fetched Data:", data);

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setProduct(data);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]); //  Dependency array to refetch when `id` changes

  const cartItems = useSelector((state: RootState) => state.counter.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="bg-black">
      <h1>Product Page {id}</h1>
      {product ? (
        <div className="grid lg:grid-cols-12 p-4">
          <div className="col-span-7">
            <div className="bg-red-black flex justify-center items-center">
              <img src={product.img} alt={product.title} />
            </div>
          </div>

          <div className="col-span-5 px-10">
            <div className="text-white text-4xl font-bold">{product.title}</div>
            <div className="text-green-600 text-2xl my-4 font-bold">
              ${product.price} USD
            </div>
            <div className="text-white font-bold my-4">
              Description Lorem ipsum dolor sit amet consectetur. Egestas nec a
              mauris risus eu ullamcorper neque dictum amet. At vel porta ut
              eget non turpis nibh. Quam vel maecenas amet nulla rhoncus augue
              donec. Consectetur tincidunt vestibulum lacus ullamcorper.
              Pulvinar tristique neque purus elementum. Elit netus tincidunt
              praesent egestas. Sed neque...
            </div>
            {/* add to cart and router link */}
            <Link to="/cart">
              <div
                onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
                className="bg-green-500 p-5 text-white font-bold flex justify-center items-center cursor-pointer"
              >
                Add To Cart
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductPage;
