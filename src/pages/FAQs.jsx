import { Link } from "react-router-dom"; // Import Link from react-router-dom
import React from "react";
import logo from "../assets/images/logo.png";
import backbutton from "../assets/images/backbutton.png";
import person from "../assets/images/person.png";
import notification from "../assets/images/notification.png";
import shoppingcart from "../assets/images/shoppingcart.png";
import cross from "../assets/images/cross.png"; // Import arrow icon
import faqs from "../assets/images/faqs.png"; // Import FAQs image
import search  from "../assets/images/search.png"; // Add search icon path

function FAQs() {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="py-4 px-6 laptop:px-20 flex items-center justify-between bg-white text-black">
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
            <img src={search} alt="Search Icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
          </div>
          <img src={person} alt="Profile Icon" className="w-6 h-6" />
          <img src={shoppingcart} alt="Shopping Cart" className="w-6 h-6" />
          <img src={notification} alt="Notification Icon" className="w-6 h-6" />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6">
        {/* Orange Background Wrapper */}
        <div className="bg-[#E2725B] p-6 rounded-lg">
          {/* Back Button */}
          <Link to="/support-dashboard">
                              <button className="bg-[#FF5722] hover:bg-[rgb(230,74,25)] text-white px-12 py-2 rounded flex items-center gap-2">
                                  <img src={backbutton} alt="Back Button" className="w-4 h-4" /> Back
                              </button>
                              </Link>

          {/* FAQ Image */}
          <div className="flex justify-center">
            <img src={faqs} alt="FAQs Illustration" className="w-40 mb-4 rounded-lg" />
          </div>

          {/* FAQ Title */}
          <h2 className="text-center text-3xl font-bold text-white p-4 rounded-lg">
            FREQUENTLY ASKED QUESTIONS (FAQS)
          </h2>

          {/* FAQ Content */}
          <div className="bg-white p-6 rounded-lg shadow mt-6">
            
            {/* FAQ Item 1 */}
            <div className="mb-4 cursor-pointer bg-gray-100 p-3 rounded-lg flex justify-between items-center">
              <h3 className="font-bold text-lg text-[#E2725B]">Q: How do I place an order?</h3>
              <img src={cross} alt="Expand" className="w-5 h-5" />
            </div>
            <p className="bg-gray-50 p-3 rounded-lg">
              To place an order, simply go to our website, select your items, and proceed to checkout.
            </p>

            {/* FAQ Item 2 */}
            <div className="mb-4 cursor-pointer bg-gray-100 p-3 rounded-lg flex justify-between items-center">
              <h3 className="font-bold text-lg text-[#E2725B]">Q: What payment methods do you accept?</h3>
              <img src={cross} alt="Expand" className="w-5 h-5" />
            </div>
            <p className="bg-gray-50 p-3 rounded-lg">
              We accept credit cards, PayPal, and mobile money transfers.
            </p>

            {/* FAQ Item 3 */}
            <div className="mb-4 cursor-pointer bg-gray-100 p-3 rounded-lg flex justify-between items-center">
              <h3 className="font-bold text-lg text-[#E2725B]">Q: How long does delivery take?</h3>
              <img src={cross} alt="Expand" className="w-5 h-5" />
            </div>
            <p className="bg-gray-50 p-3 rounded-lg">
              Delivery typically takes 2-5 business days, depending on your location.
            </p>

          </div>
        </div>
      </main>
    </div>
  );
}

export default FAQs;
