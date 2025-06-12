import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { useCart } from "./context/CartContext";

import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [productsList, setProductsList] = useState([]);
  const { addToCart } = useCart();
  const [toastMessage, setToastMessage] = useState('');


  // useEffect(() => {
  //   axios
  //     .get(`https://fakestoreapi.com/products`)
  //     .then((response) => {
  //       setProductsList(response.data);
  //       console.log("API was called");
  //     })
  //     .catch((err) => {
  //       console.log("error:", err);
  //     });
  // }, []);

  const fetchProducts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/products")
    const productsWithId = response.data.map(product => ({
      ...product,
      id: product._id,
    }));
    setProductsList(productsWithId);
    console.log(productsWithId);
  } catch(err) {
    console.log("Error: ", err)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      <Navbar />
      {toastMessage && (
        <div className="fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded shadow-lg z-50">
          {toastMessage}
        </div>
      )}

      <Routes>
        <Route
          path="/"
          element={
            productsList.length === 0 ? (
              <div className="p-10 text-xl">Loading products...</div>
            ) : (
              <div className="grid grid-cols-4 gap-4 p-10">
                {productsList.map((product) => (
                  <div
                    key={product.id}
                    className="border p-4 rounded shadow relative transform transition duration-200 hover:scale-105 hover:shadow-2xl hover:z-10"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-40 object-contain mx-auto"
                    />
                    <h3 className="text-lg font-semibold mt-2">
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-600">${product.price}</p>
                    <button
                      className="bg-gray-300 rounded-md p-1 px-2 absolute bottom-3 right-3 text-xs hover:bg-green-400 transition-colors duration-300"
                      onClick={() => {
                        addToCart(product, (message) => {
                          setToastMessage(message);
                          setTimeout(() => setToastMessage(''), 2000);
                        });
                      }}
                    >
                      Add to cart
                    </button>

                  </div>
                ))}
              </div>
            )
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
