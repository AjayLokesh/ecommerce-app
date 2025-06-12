// Cart.jsx
import { useCart } from "../context/CartContext";

function Cart() {
    const { cartItems, updateQuantity, removeFromCart } = useCart();

    const grandTotal = cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity
    }, 0)

    return (
        <>
            <div className="p-10">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                {cartItems.map((item, index) => {
                    const total = item.quantity * item.price;
                    return (
                        <>
                            <div key={index} className="flex justify-between items-start border-2 mt-6 px-7 py-5 border-gray-500 relative">
                                <img src={item.image} alt={item.title} className="h-24 min-w-24 max-w-24 mr-4" />
                                <div className="flex-1 pr-4">
                                    <h3 className="font-semibold pl-10">{item.title}</h3>
                                    <button className=" bg-red-600 text-white border-2 border-red-600 rounded-md ml-10 mt-3 py-1 px-3 hover:bg-white hover:text-black duration-200" onClick={(e) => {removeFromCart(item.id)}}>Remove</button>
                                </div>
                                <div className="flex flex-col items-end min-w-[120px]">
                                    <div className="text-right mb-1">
                                        Price: ${item.price.toFixed(2)}
                                    </div>
                                <div className="text-right mb-1 text-green-700 font-semibold">
                                    Total: ${total.toFixed(2)}
                                </div>
                                <input
                                    type="number"
                                    min={1}
                                    value={item.quantity}
                                    className="border-2 border-black rounded-md w-10 text-center"
                                    onChange={(e) =>
                                        updateQuantity(item.id, Number(e.target.value))
                                    }
                                />
                                </div>
                            </div>
                        </>
                    );
                })}
                </div>
            )}
            </div>
            <div className="text-center text-2xl font-bold">Total: ${grandTotal.toFixed(2)}</div>
            <button className="bg-green-400 py-2 px-4 rounded-md border-2 border-green-500 block mx-auto m-5 mb-28 hover:bg-white transition-colors duration-200 ">Check out</button>
    </>
    );
}

export default Cart;
