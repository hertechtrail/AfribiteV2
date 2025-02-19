import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png";
import person from "../assets/images/person.png";
import notification from "../assets/images/notification.png";
import shoppingcart from "../assets/images/shoppingcart.png";
import backbutton from "../assets/images/backbutton.png";
import social1 from "../assets/images/social1.png";
import social2 from "../assets/images/social2.png";
import social3 from "../assets/images/social3.png";
import letter1 from "../assets/images/letter1.png";
import phoneicon from "../assets/images/phoneicon.png";
import emailicon from "../assets/images/emailicon.png";
import locationicon from "../assets/images/locationicon.png";
import ellipse1 from "../assets/images/ellipse1.png";
import ellipse2 from "../assets/images/ellipse2.png";
import search from "../assets/images/search.png";

function ContactUs() {
    return (
        <div className="font-sans bg-white-100">
            {/* Orange background section */}
            <div className="bg-[#E2725B]">
                <header className="py-8 px-6 laptop:px-20 laptop:pr-6 tablet:p-6 flex items-center justify-between flex-wrap font-pop bg-[#fdfdfb] relative">
                    <div className="flex w-36 gap-3.5 items-center">
                        <img src={logo} alt="Afribite Logo" className="h-8 w-auto" />
                        <p className="text-[#E2725B] text-2xl font-extrabold">AFRIBITE</p>
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
                                        </div>
                                        <img src={person} alt="Profile Icon" className="w-6 h-6" />
                                        <img src={shoppingcart} alt="Shopping Cart" className="w-6 h-6" />
                                        <img src={notification} alt="Notification Icon" className="w-6 h-6" />
                                    </div>
                                </header>

                <main className="max-w-6xl mx-auto p-6">
                    <Link to="/adminhome/dashboard">
                    <button className="bg-[#FF5722] hover:bg-[rgb(230,74,25)] text-white px-12 py-2 rounded flex items-center gap-2">
                        <img src={backbutton} alt="Back Button" className="w-4 h-4" /> Back
                    </button>
                    </Link>

                    <h2 className="text-center text-3xl font-bold mt-6 text-[#080302]">CONTACT US</h2>
                </main>
            </div> {/* Orange background ends here */}

            {/* Main content container */}
            <main className="max-w-6xl mx-auto p-6">
                {/* Buttons container */}
               

<div className="flex space-x-4 mt-4">
    <Link to="/faqs">
        <button className="bg-[#ffffff] hover:bg-[#F57C00] text-[#212121] hover:text-[#f3f2f0] px-24 py-2 rounded border-2 border-[#FF9800] hover:border-[#F57C00]">
            FAQs
        </button>
    </Link>

    <Link to="/live-chat-about">
        <button className="bg-[#ffffff] hover:bg-[#F57C00] text-[#212121] hover:text-[#f3f2f0] px-24 py-2 rounded border-2 border-[#FF9800] hover:border-[#F57C00]">
            Live chat
        </button>
    </Link>

    <Link to="/get-support">
        <button className="bg-[#ffffff] hover:bg-[#F57C00] text-[#212121] hover:text-[#f3f2f0] px-24 py-2 rounded border-2 border-[#FF9800] hover:border-[#F57C00]">
            Get support
        </button>
    </Link>

    <Link to="/contact-us">
        <button className="bg-[#ffffff] hover:bg-[#F57C00] text-[#212121] hover:text-[#f3f2f0] px-24 py-2 rounded border-2 border-[#FF9800] hover:border-[#F57C00]">
            Contact us
        </button>
    </Link>
</div>


                {/* Contact Info and Form container */}
                <div className="grid laptop:grid-cols-2 gap-6 mt-6">
                    {/* Contact Info */}
                    <div className="bg-[#E2725B] text-white p-6 rounded-lg relative">
                        <p className="text-3xl text-white mb-4">Contact Information</p>
                        <p className="text-gray-100 mb-4">Say something to start a live chat!</p>

                        <div className="mb-4 flex items-center">
                            <img src={phoneicon} alt="Phone Icon" className="w-6 h-6 mr-2" />
                            <span className="text-white">+44 12 3456 789</span>
                        </div>

                        <div className="mb-4 flex items-center">
                            <img src={emailicon} alt="Email Icon" className="w-6 h-6 mr-2" />
                            <span className="text-white">demo@gmail.com</span>
                        </div>

                        <div className="mb-4 flex items-center">
                            <img src={locationicon} alt="Location Icon" className="w-6 h-6 mr-2" />
                            <span className="text-white">132 Dartmouth Street, Boston, MA 02156, UK</span>
                        </div>

                        {/* Social Media Icons */}
                        <div className="absolute left-0 bottom-0 flex space-x-4 mb-4 ml-4">
                            <span className="bg-white p-2 rounded-full">
                                <img src={social2} alt="Phone Icon" className="w-6 h-6" />
                            </span>
                            <span className="bg-white p-2 rounded-full">
                                <img src={social1} alt="Message Icon" className="w-6 h-6" />
                            </span>
                            <span className="bg-white p-2 rounded-full">
                                <img src={social3} alt="Message Icon" className="w-6 h-6" />
                            </span>
                        </div>

                        {/* Two Icons at the Bottom Right */}
                        <div className="absolute right-0 bottom-0 flex flex-col space-y-2 mb-4 mr-4">
                        <span>
                        <img src={ellipse1} alt="Icon 4" className="w-6 h-6" />
                        </span>
                        <span>
                        <img src={ellipse2} alt="Icon 5" className="w-8 h-8" />
                        </span>
</div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-6 rounded-lg">
                        <form>
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="First Name" className="border-b-2 border-white py-2 focus:outline-none focus:border-black" />
                                <input type="text" placeholder="Last Name" className="border-b-2 border-white py-2 focus:outline-none focus:border-black" />
                            </div>
                            <input type="email" placeholder="Email" className="border-b-2 border-white py-2 w-full mt-4 focus:outline-none focus:border-black" />
                            <input type="text" placeholder="Phone Number" className="border-b-2 border-white py-2 w-full mt-4 focus:outline-none focus:border-black" />

                            <p className="mt-4">Select Subject:</p>
                            <div className="flex space-x-3 mt-2">
                                <label className="flex items-center">
                                    <input type="radio" name="subject" className="mr-2" /> General Inquiry
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="subject" className="mr-2" /> General Inquiry
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="subject" className="mr-2" /> General Inquiry
                                </label>
                            </div>

                            <textarea placeholder="Write your message..." className="border-b-2 border-gray-300 py-2 w-full mt-4 h-24 focus:outline-none focus:border-pink-500"></textarea>

                            <div className="flex justify-end mt-4">
                                <button className="bg-[#E2725B] text-white px-6 py-2 rounded">
                                    Send Message
                                </button>
                            </div>
                            <div className="flex justify-center mt-4">
                                <img src={letter1} alt="Arrow Button" className="w-8 h-8 transform rotate-180" />
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            <footer className="bg-gray-100 text-center py-4 mt-6 text-[#212121]">
                <p>&copy; {new Date().getFullYear()} Afribite. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default ContactUs;