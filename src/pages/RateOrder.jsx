import { Link } from "react-router-dom"; // Import Link from react-router-dom
import React, { useState } from 'react';
import logo from "../assets/images/logo.png";
import person from "../assets/images/person.png";
import notification from "../assets/images/notification.png";
import shoppingcart from "../assets/images/shoppingcart.png";
import Ratefood from "../assets/images/Ratefood.png";
import add from "../assets/images/add.png";
import remove from "../assets/images/remove.png";
import search from "../assets/images/search.png";

function RateOrder() {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="font-sans bg-white min-h-screen">
            <header className="py-4 px-6 laptop:px-20 flex items-center justify-between bg-white text-black shadow-md">
                <div className="flex items-center gap-3">
                    <img src={logo} alt="Afribite Logo" className="h-10" />
                    <p className="text-xl text-orange-600 font-bold">AFRIBITE</p>
                </div>
                <nav className="flex-1 flex justify-center gap-6 text-gray-600">
                <a href="#" className="hover:underline focus:text-orange-600 active:text-orange-600">Home</a>
                        <Link to="/adminhome/dashboard" className="hover:underline focus:text-orange-600 active:text-orange-600">Dashboard</Link>
                        <Link to="/rate-order2" className="hover:underline focus:text-orange-600 active:text-orange-600">Order</Link>
                        <Link to="/reviews-and-ratings" className="hover:underline focus:text-orange-600 active:text-orange-600">Reviews</Link>
                        
                        <Link to="/live-chat-about" className="hover:underline focus:text-orange-600 active:text-orange-600">About</Link>
                    </nav>
                <div className="flex items-center gap-4">
                    <div className="relative">
                        {/* Wrap the input and position the search icon */}
                        <input
                            type="text"
                            placeholder="Search"
                            className="border p-2 rounded-md pl-10" // Added padding-left to make room for the icon
                        />
                        {/* Search icon */}
                        <img
                            src={search}
                            alt="Search Icon"
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" // Position the icon correctly
                        />
                    </div>
                    <img src={person} alt="Profile" className="h-6" />
                    <img src={shoppingcart} alt="Cart" className="h-6" />
                    <img
                        src={notification}
                        alt="Notifications"
                        className="h-6"
                    />
                </div>
            </header>

            <div className="flex flex-col laptop:flex-row items-center laptop:items-start gap-10 p-10">
                <img
                    src={Ratefood}
                    alt="Food"
                    className="w-96 h-80 object-cover rounded-md shadow-md"
                />

                <div className="flex-1">
                    <div className="flex items-center gap-2 text-gray-500">
                        ⭐ ★ ★ ★ ★ <span>19/02/25</span>
                    </div>
                    <h2 className="text-2xl font-bold mt-2">
                        Amala-Gbegiri-Ewedu with Assorted Meat
                    </h2>
                    <p className="text-lg font-semibold mt-1">
                        Price: <span className="text-gray-700">$172</span>
                    </p>
                    <p className="text-gray-600 mt-2">
                        "Amala with Gbegiri, Ewedu, assorted meat, extra meat,
                        and one serving."
                    </p>

                    <div className="flex items-center mt-4 rounded-lg overflow-hidden shadow-md">
                        <button
                            className="bg-[#4CAF50] text-white px-4 py-2 hover:bg-[#45A050] focus:outline-none"
                            onClick={handleDecrement}
                        >
                            <img src={remove} alt="Minus" className="h-5 w-5" />
                        </button>
                        <span className="px-1 py-1 text-lg font-medium bg-[#45A050]">
                            {quantity}
                        </span>
                        <button
                            className="bg-[#4CAF50] text-white px-4 py-2 hover:bg-[#45A050] focus:outline-none"
                            onClick={handleIncrement}
                        >
                            <img src={add} alt="Plus" className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="mt-6 flex gap-4">
                        <button className="bg-[#FF5722] hover:bg-orange-500 text-white px-6 py-2 rounded flex items-center gap-2">
                            <img
                                src={shoppingcart}
                                alt="Cart"
                                className="w-4 h-4"
                            />
                            <span>Add to Cart</span>
                        </button>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-md">
                            Check Out
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-4 p-10 mt-10">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-md">
                    Rate Order
                </button>
                <Link to="/leave-a-review">
                <button className="border border-orange-500 hover:bg-orange-100 text-orange-500 font-bold py-2 px-6 rounded-md">
                    Leave a Review
                </button>
                </Link>
            </div>
        </div>
    );
}

export default RateOrder;
