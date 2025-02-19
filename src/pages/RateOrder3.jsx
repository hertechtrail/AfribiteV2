import { Link } from "react-router-dom"; // Import Link from react-router-dom
import React, { useState } from 'react';
import logo from "../assets/images/logo.png";
import person from "../assets/images/person.png";
import notification from "../assets/images/notification.png";
import shoppingcart from "../assets/images/shoppingcart.png";
import Ratefood from "../assets/images/Ratefood.png";
import add from "../assets/images/add.png";
import remove from "../assets/images/remove.png";
import search from "../assets/images/search.png"; // Add this import for the search icon
import { useNavigate } from 'react-router-dom';

function RateOrder3() {
    const [quantity, setQuantity] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    const navigate = useNavigate();

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setRating(0);
        setReview("");
    };

    const handleRateOrder = () => {
        console.log("Rating submitted:", rating);
        console.log("Review submitted:", review);
        navigate('/thank-you');
        closeModal();
    };

    const handleStarClick = (selectedRating) => {
        setRating(selectedRating);
    };

    return (
        <div className="font-sans bg-white min-h-screen relative">
            {/* Header / Navbar */}
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
                    {/* Search Bar with Icon */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border p-2 rounded-md pl-10" // Added padding for the icon
                        />
                        <img
                            src={search}
                            alt="Search Icon"
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                        />
                    </div>
                    <img src={person} alt="Profile" className="h-6" />
                    <img src={shoppingcart} alt="Cart" className="h-6" />
                    <img src={notification} alt="Notifications" className="h-6" />
                </div>
            </header>

            {/* Main Content */}
            <div className="flex flex-col laptop:flex-row items-center laptop:items-start gap-10 p-10">
                <img src={Ratefood} alt="Food" className="w-96 h-80 object-cover rounded-md shadow-md" />

                <div className="flex-1">
                    <div className="flex items-center gap-2 text-gray-500">
                        {[...Array(5)].map((_, i) => (
                            <span
                                key={i}
                                className={`text-yellow-400 text-2xl cursor-pointer ${i < rating ? 'filled' : ''}`}
                                onClick={() => handleStarClick(i + 1)}
                            >
                                ★
                            </span>
                        ))}
                        <span>19/02/25</span>
                    </div>
                    <h2 className="text-2xl font-bold mt-2">Amala-Gbegiri-Ewedu with Assorted Meat</h2>
                    <p className="text-lg font-semibold mt-1">Price: <span className="text-gray-700">$172</span></p>
                    <p className="text-gray-600 mt-2">"Amala with Gbegiri, Ewedu, assorted meat, extra meat, and one serving."</p>

                    <div className="flex items-center mt-4 rounded-lg overflow-hidden shadow-md">
                        <button className="bg-[#4CAF50] text-white px-4 py-2 hover:bg-[#45A049] focus:outline-none" onClick={handleDecrement}>
                            <img src={remove} alt="Minus" className="h-5 w-5" />
                        </button>
                        <span className="px-4 py-2 text-lg font-medium bg-white">{quantity}</span>
                        <button className="bg-[#4CAF50] text-white px-4 py-2 hover:bg-[#45A049] focus:outline-none" onClick={handleIncrement}>
                            <img src={add} alt="Plus" className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="mt-6 flex gap-4">
                        <button className="bg-[#FF5722] hover:bg-orange-500 text-white px-6 py-2 rounded flex items-center gap-2">
                            <img src={shoppingcart} alt="Cart" className="w-4 h-4" />
                            <span>Add to Cart</span>
                        </button>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-md">Check Out</button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-4 p-10 mt-10">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-md" onClick={openModal}>
                    Rate Order
                </button>
                <button className="border border-orange-500 hover:bg-orange-100 text-orange-500 font-bold py-2 px-6 rounded-md">
                    Leave a Review
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40">
                    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md z-50 shadow-md">
                        <h2 className="text-lg font-bold mb-4">How did you enjoy your meal?</h2>
                        {/* Modal content here */}
                    </div>
                </div>
            )}
        </div>
    );
}

export default RateOrder3;
