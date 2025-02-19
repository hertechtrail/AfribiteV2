import { Link } from "react-router-dom"; // Import Link from react-router-dom
import React from "react";
import logo from "../assets/images/logo.png";
import person from "../assets/images/person.png";
import shoppingcart from "../assets/images/shoppingcart.png";
import notification from "../assets/images/notification.png";
import backbutton from "../assets/images/backbutton.png";
import audio from "../assets/images/audio.png";
import reaction from "../assets/images/reaction.png";
import mic from "../assets/images/mic.png";
import remove from "../assets/images/remove.png";
import search from "../assets/images/search.png";

const LiveChatAbout = () => {
    return (
        <div className="font-sans min-h-screen bg-white flex flex-col">
            {/* Header */}
            <header className="py-4 px-6 laptop:px-20 flex items-center justify-between bg-white text-black border-b border-gray-300">
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
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="px-3 py-2 pl-10 rounded text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF5722]"
                        />
                        <img 
                            src={search} 
                            alt="Search Icon" 
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                        />
                        <img 
                                                src={search} 
                                                alt="Search Icon" 
                                                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                                            />
                    </div>
                    <img src={person} alt="Profile Icon" className="w-6 h-6" />
                    <img src={shoppingcart} alt="Shopping Cart" className="w-6 h-6" />
                    <img src={notification} alt="Notification Icon" className="w-6 h-6" />
                </div>
            </header>

            {/* Main Chat Section */}
            <main className="w-full flex-grow">
                <div className="bg-[#E2725B] py-6 px-4">
                    <div className="max-w-6xl mx-auto">
                        <button className="bg-[#E2725B] border hover:border-yellow-500 text-white px-12 py-2 rounded flex items-center gap-2 mb-4">
                            <img src={backbutton} alt="Back Button" className="w-4 h-4" /> Back
                        </button>

                        <h2 className="text-center text-3xl font-bold mt-6 text-black bg-[#E2725B] p-4 rounded-lg">
                            LIVE CHAT ABOUT
                        </h2>
                    </div>
                </div>

                {/* Chat Messages */}
                <div className="bg-white p-6 rounded-lg shadow max-w-6xl mx-auto mt-6">
                    <div key="1" className="mb-4">
                        <p className="bg-gray-100 p-3 rounded-lg text-left">
                            I am Judith, a customer care representative. Thank you for getting in touch. Please let us know how we can help.
                        </p>
                        <p className="text-left text-sm text-gray-500">12:14</p>
                    </div>

                    <div key="2" className="mb-4 text-right">
                        <p className="bg-green-100 p-3 rounded-lg inline-block">
                            Hello Judith, I am experiencing some issues with my payment. I mistakenly placed the same order twice. Kindly assist me in reversing one of the transactions. Thank you for your assistance.
                        </p>
                        <p className="text-sm text-gray-500">12:16</p>
                    </div>

                    <div key="3" className="mb-4 text-left">
                        <p className="bg-gray-200 p-3 rounded-lg inline-block">
                            Judith: Hello, Thank you for contacting Jaheez customer support. I'm Judith, and I'll be happy to help you with your payment issue.
                            I see that you mistakenly placed the same order twice. I can certainly help you reverse one of the transactions. Could you please provide me with your order number so I can look into this further?
                        </p>
                        <p className="text-sm text-gray-500">12:16</p>
                    </div>

                    <div key="4" className="mb-4 text-right">
                        <p className="bg-green-100 p-3 rounded-lg inline-block">
                            Customer: Thank you, Judith. The order number is.
                        </p>
                        <p className="text-sm text-gray-500">12:16</p>
                    </div>

                    <div key="5" className="mb-4 text-left">
                        <p className="bg-gray-200 p-3 rounded-lg inline-block">
                            Judith: Thank you for providing your order number. I've looked into your account and see that you indeed placed the same order twice. I've gone ahead and reversed one of the transactions. You should see the refund reflected in your account within 7-10 business days.
                            Is there anything else I can help you with today?
                        </p>
                        <p className="text-sm text-gray-500">12:16</p>
                    </div>

                    <div key="6" className="mb-4 text-right">
                        <p className="bg-green-100 p-3 rounded-lg inline-block">
                            Customer: No, that's all. Thank you so much.
                        </p>
                        <p className="text-sm text-gray-500">12:16</p>
                    </div>
                    <div className="mb-4 text-right">
                        <img src={audio} alt="Audio Message" className="w-100 h-24 ml-auto" />
                        <p className="text-sm text-gray-500">12:18</p>
                    </div>
                </div>

                {/* Chat Input Section */}
                <div className="max-w-6xl mx-auto w-full flex items-center border-t border-gray-300 p-4 mt-4">
                    <div className="relative flex-grow">
                        <input
                            type="text"
                            placeholder="Type your message here..."
                            className="w-full px-3 py-2 border border-gray-300 rounded pl-10 focus:outline-none focus:ring-2 focus:ring-[#FF5722]"
                        />
                        <img
                            src={reaction} 
                            alt="Reaction" 
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
                        />
                    </div>
                    <button className="bg-[#ffffff] text-white border-x-amber-500 py-2 px-2 rounded ml-4 flex items-center gap-2">
                    <img src={mic} alt="Send Icon" className="w-4 h-4" /></button>
            
                    <button className="bg-[#ffffff] text-white border-amber-500 py-2 px-2 rounded ml-4 flex items-center gap-2">
                    <img src={remove} alt="Send Icon" className="w-4 h-4" /></button>
                    <button className="bg-[#FF5722] text-white py-2 px-6 rounded ml-4">
                        Send
                    </button>
                    </div>
            </main>
        </div>
    );
};

export default LiveChatAbout;
