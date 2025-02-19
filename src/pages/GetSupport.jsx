import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../assets/images/logo.png";
import cross from "../assets/images/cross.png";
import arrowDown from "../assets/images/arrowdown.png";
import person from "../assets/images/person.png";
import notification from "../assets/images/notification.png";
import shoppingcart from "../assets/images/shoppingcart.png";
import backbutton from "../assets/images/backbutton.png";
import arrowRight from "../assets/images/arrowright.png";
import search from "../assets/images/search.png"; // Import search icon

function GetSupport() {
    return (
        <div className="font-sans min-h-screen bg-white">
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
                    <div className="relative">
                        <input type="text" placeholder="Search" className="px-3 py-2 pl-10 rounded text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF5722]" />
                        <img src={search} alt="Search" className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
                    </div>
                    <img src={person} alt="Profile Icon" className="w-6 h-6" />
                    <img src={shoppingcart} alt="Shopping Cart" className="w-6 h-6" />
                    <img src={notification} alt="Notification Icon" className="w-6 h-6" />
                </div>
            </header>

            <main className="w-full">
                <div className="bg-[#E2725B] py-6 px-4">
                    <div className="max-w-6xl mx-auto">
                        <Link to="/support-dashboard">
                                            <button className="bg-[#FF5722] hover:bg-[rgb(230,74,25)] text-white px-12 py-2 rounded flex items-center gap-2">
                                                <img src={backbutton} alt="Back Button" className="w-4 h-4" /> Back
                                            </button>
                                            </Link>
                                            
                        <h2 className="text-center text-3xl font-bold mt-6 text-black bg-[#E2725B] p-4 rounded-lg">
                            GET SUPPORT
                        </h2>
                        <div className="flex space-x-4">
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
                    </div>
                </div>
               <div className="bg-white p-6 rounded-lg mt-6 max-w-6xl mx-auto">
                                   <SupportSection
                                       title="Something wrong with the driver/delivery?"
                                       icon={cross}
                                       items={[
                                           { text: "Driver was not friendly", link: arrowRight },
                                           { text: "Driver had hygiene issues", link: arrowRight },
                                           { text: "Items were damaged/spilled/crushed", link: arrowRight },
                                       ]}
                                   />
               
                                   <SupportSection
                                       title="Something wrong with the order?"
                                       icon={cross}
                                       items={[
                                           { text: "Order took too long", link: arrowRight },
                                           { text: "Received wrong order", link: arrowRight },
                                           { text: "Order incorrectly cooked met", link: arrowRight },
                                           { text: "Report requirements not met", link: arrowRight },
                                           { text: "Some items are missing", link: arrowRight },
                                           { text: "Incorrect items seem", link: arrowRight },
                                           { text: "Report cold food", link: arrowRight },
                                       ]}
                                   />
               
                                   <SupportSection
                                       title="Orders"
                                       icon={cross}
                                       items={[
                                           { text: "Get a receipt", link: arrowRight },
                                           { text: "Undefined issue", link: arrowRight },
                                       ]}
                                   />
                               </div>
                           </main>
               
                           <footer className="bg-white text-center py-4 mt-6">
                               <div className="max-w-6xl mx-auto">
                                   <p>&copy; {new Date().getFullYear()} Afribite. All rights reserved.</p>
                               </div>
                           </footer>
                       </div>
                   );
               }
               
               function SupportSection({ title, icon, items }) {
                   return (
                       <div className="mb-4">
                           <div className="flex items-center justify-between">
                               <p className="font-bold text-lg">{title}</p>
                               <img src={icon} alt="icon" className="w-6 h-6" />
                           </div>
                           <ul className="list-disc list-inside ml-4 bg-gray-100 px-4 py-2 rounded">
                               {items.map((item, index) => (
                                   <li key={index} className="flex items-center justify-between">
                                       {item.text}
                                       <img src={item.link} alt="arrow" className="w-5 h-5" />
                                   </li>
                               ))}
                           </ul>
                       </div>
                   );
               }
               
               export default GetSupport;
