import { Link } from "react-router-dom"; // Import Link from react-router-dom
import React, { useState } from 'react';
import logo from "../assets/images/logo.png";
import person from "../assets/images/person.png";
import notification from "../assets/images/notification.png";
import shoppingcart from "../assets/images/shoppingcart.png";
import search from "../assets/images/search.png"; // Add search icon path
import Zara from "../assets/images/Zara.png";

function LeaveaReview() {
    const [rating, setRating] = useState(4);
    const [reviewText, setReviewText] = useState("");

    const handleStarClick = (selectedRating) => {
        setRating(selectedRating);
    };

    const handleSubmit = () => {
        console.log('Rating:', rating);
        console.log('Review:', reviewText);
        alert('Thank you for your review!');
        setReviewText("");  // Clear review text after submission
    };

    return (
        <div className="font-sans bg-white min-h-screen flex flex-col items-center px-6 py-10">
            {/* Header */}
            <header className="py-4 px-6 laptop:px-20 flex items-center justify-between bg-white text-black w-full">
                <div className="flex items-center gap-3">
                    <img src={logo} alt="Afribite Logo" className="h-10" />
                    <p className="text-xl text-orange-600 font-bold">AFRIBITE</p>
                </div>
                <nav className="hidden laptop:flex space-x-6">
                <a href="#" className="hover:underline focus:text-orange-600 active:text-orange-600">Home</a>
                        <Link to="/adminhome/dashboard" className="hover:underline focus:text-orange-600 active:text-orange-600">Dashboard</Link>
                        <Link to="/rate-order2" className="hover:underline focus:text-orange-600 active:text-orange-600">Order</Link>
                        <Link to="/reviews-and-ratings" className="hover:underline focus:text-orange-600 active:text-orange-600">Reviews</Link>
                        
                        <Link to="/live-chat-about" className="hover:underline focus:text-orange-600 active:text-orange-600">About</Link>
                    </nav>
                <div className="flex items-center space-x-4">
                    {/* Search Bar with Icon */}
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Search" 
                            className="px-3 py-2 pl-10 rounded text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF5722]" 
                        />
                        <img src={search} alt="search icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
                    </div>
                    <img src={person} alt="profileIcon" className="w-6 h-6" />
                    <img src={shoppingcart} alt="shoppingCart" className="w-6 h-6" />
                    <img src={notification} alt="sendMail" className="w-6 h-6" />
                </div>
            </header>
            
            {/* Review Buttons */}
            <div className="flex gap-4 mt-6">
                <button className="px-4 py-2 border border-orange-600 rounded-lg">Chicken Republic, Nigeria Restaurants</button>
                <button className="px-4 py-2 border border-orange-600 rounded-lg">Amala-Gbegiri-Ewedu</button>
                <button className="px-4 py-2 border border-orange-600 rounded-lg">Reviews</button>
                <button className="px-4 py-2 bg-orange-600 text-white rounded-lg">Leave a Review</button>
            </div>
            
            {/* Review Section */}
            <div className="mt-10 text-center">
                <h2 className="text-2xl font-semibold">Leave a review</h2>
                <p className="text-gray-600 mt-2">Your input is important in helping us curate our meals and services to satisfy your needs and hunger.</p>
                <div className="flex justify-center gap-2 mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            className={`text-3xl cursor-pointer ${star <= rating ? 'text-yellow-400' : 'text-gray-400'}`}
                            onClick={() => handleStarClick(star)}
                        >
                            ★
                        </span>
                    ))}
                </div>
                <div className="mt-4">
                    <label className="block text-lg">Experience</label>
                    <textarea 
                        className="w-96 p-2 border border-gray-300 rounded mt-2"
                        placeholder="Describe your meal and service experience (50 characters)"
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                    />
                </div>
                <button onClick={handleSubmit} className="mt-4 px-6 py-2 bg-orange-600 text-white rounded-lg">Submit</button>
            </div>
            
            {/* User Profile */}
            <div className="absolute top-80 right-10 flex items-center gap-3">
                <img src={Zara} alt="User Profile" className="w-36 h-36 rounded-full border border-gray-300" />
                <span className="text-lg font-semibold">Zara</span>
            </div>
        </div>
    );
}

export default LeaveaReview;


