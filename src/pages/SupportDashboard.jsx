import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../assets/images/logo.png";
import person from "../assets/images/person.png";
import notification from "../assets/images/notification.png";
import shoppingcart from "../assets/images/shoppingcart.png";
import supportdashboard from "../assets/images/supportdashboard.png";

function SupportDashboard() {
    return (
        <div className="font-sans min-h-screen">
            <div
                className="relative"
                style={{
                    backgroundImage: `url(${supportdashboard})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "40vh",
                }}
            >
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
                        <input
                            type="text"
                            placeholder="Search"
                            className="px-3 py-2 rounded text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF5722] bg-white/50"
                        />
                        <img src={person} alt="Profile Icon" className="w-6 h-6" />
                        <img src={shoppingcart} alt="Shopping Cart" className="w-6 h-6" />
                        <img src={notification} alt="Notification Icon" className="w-6 h-6" />
                    </div>
                </header>

                <main className="max-w-6xl mx-auto p-6 relative">
                    <h1 className="text-3xl text-white font-bold text-center mb-12">
                        Hello, how can we help you today? 
                    </h1>

                    <div className="flex items-center justify-center mb-12">
                        <input
                            type="text"
                            placeholder="Search"
                            className="px-4 py-2 rounded-lg border border-gray-300 w-full max-w-xs bg-white/50"
                        />
                    </div>
                </main>
            </div>

            <main className="max-w-6xl mx-auto p-6 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div className="bg-[#E2725B] text-white p-6 rounded-lg">
                        <h2 className="text-xl font-bold mb-2">Getting Started</h2>
                        <p>Starters kit on all Afribite services</p>
                    </div>
                    <div className="bg-[#E2725B] text-white p-6 rounded-lg">
                        <h2 className="text-xl font-bold mb-2">About us</h2>
                        <p>Get to know more about us</p>
                    </div>
                    <div className="bg-[#E2725B] text-white p-6 rounded-lg">
                        <h2 className="text-xl font-bold mb-2">User Guides</h2>
                        <p>Guides and instruction for Afribite</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-left mb-6">Quick Links</h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* FAQ Button */}
                    <Link to="/faqs">
                        <div className="bg-white p-6 rounded-lg cursor-pointer">
                            <h3 className="text-xl font-bold mb-2">FAQ</h3>
                            <p>Questions about Afribite and services</p>
                        </div>
                    </Link>

                    {/* Get Support Button */}
                    <Link to="/get-support">
                        <div className="bg-white p-6 rounded-lg cursor-pointer">
                            <h3 className="text-xl font-bold mb-2">GET SUPPORT</h3>
                            <p>Information on how to navigate the site</p>
                        </div>
                    </Link>

                    {/* Reviews Button */}
                    <Link to="/reviews-and-ratings">
                        <div className="bg-white p-6 rounded-lg cursor-pointer">
                            <h3 className="text-xl font-bold mb-2">REVIEWS</h3>
                            <p>Here's what our customers are saying about us.</p>
                        </div>
                    </Link>

                    <Link to="/contact-us">
                    <div className="bg-white p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">SEND REQUEST</h3>
                        <p>Contact us through a specially prepared form</p>
                    </div>
                </Link>
                </div>
            </main>

            <footer className="bg-gray-100 text-center py-4 mt-6 text-[#212121]">
                <p>&copy; {new Date().getFullYear()} Afribite. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default SupportDashboard;
