import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png";
import person from "../assets/images/person.png";
import notification from "../assets/images/notification.png";
import shoppingcart from "../assets/images/shoppingcart.png";
import Zara from "../assets/images/Zara.png";
import backbutton from "../assets/images/backbutton.png"; // Ensure backbutton is imported
import reviewpic from "../assets/images/reviewpic.png"; // Ensure reviewpic is imported

function ReviewsandRatings() {
    const reviews = [
        {
            name: "Olatunbosun Mariam Afolake",
            date: "19/10/24",
            rating: 5,
            content:
                "Lorem ipsum dolor sit amet consectetur. Ultricies maecenas eget convallis vel. Vestibulum sed vitae mauris sagittis convallis. Mattis enim venenatis pharetra hac. Nam urna viverra quisque tempus ac sed lacus urna. A quis sed aliquet nisi ultricies. Id et venenatis fringilla cursus posuere vestibulum.",
        },
        {
            name: "Azeezah Adeyemi A.",
            date: "19/10/24",
            rating: 4,
            content:
                "Lorem ipsum dolor sit amet consectetur. Ultricies maecenas eget convallis vel. Vestibulum sed vitae mauris sagittis convallis. Mattis enim venenatis pharetra hac. Nam urna viverra quisque tempus ac sed lacus urna. A quis sed aliquet nisi ultricies. Id et venenatis fringilla cursus posuere vestibulum.",
        },
        {
            name: "Adeola Elizabeth",
            date: "19/10/24",
            rating: 5,
            content:
                "Lorem ipsum dolor sit amet consectetur. Ultricies maecenas eget convallis vel. Vestibulum sed vitae mauris sagittis convallis. Mattis enim venenatis pharetra hac. Nam urna viverra quisque tempus ac sed lacus urna. A quis sed aliquet nisi ultricies. Id et venenatis fringilla cursus posuere vestibulum.",
        },
    ];

    const restaurants = [
        "Chicken Republic, Nigeria",
        "Net Republic, Kenya",
        "Ghana Kitchen",
        "Uganda kitchen",
    ];

    return (
        <div className="font-sans bg-white min-h-screen">
            <header className="py-4 px-6 laptop:px-20 flex items-center justify-between bg-white text-black">
                <div className="flex items-center gap-3">
                    <img src={logo} alt="Afribite Logo" className="h-10" />
                    <p className="text-xl text-orange-600 font-bold">AFRIBITE</p>
                </div>

                {/* Navigation bar on the same line as the logo */}
                <nav className="flex items-center space-x-6 ml-8 ">
                <a href="#" className="hover:underline focus:text-orange-600 active:text-orange-600">Home</a>
                                        <Link to="/adminhome/dashboard" className="hover:underline focus:text-orange-600 active:text-orange-600">Dashboard</Link>
                                        <Link to="/rate-order2" className="hover:underline focus:text-orange-600 active:text-orange-600">Order</Link>
                                        <Link to="/leave-a-review" className="hover:underline focus:text-orange-600 active:text-orange-600">Reviews</Link>
                                        
                                        <Link to="/live-chat-about" className="hover:underline focus:text-orange-600 active:text-orange-600">About</Link>
                                    </nav>

                <div className="flex items-center gap-4">
                    <input type="text" placeholder="Search" className="border p-2 rounded-md" />
                    <img src={person} alt="Person" className="h-6" />
                    <img src={shoppingcart} alt="Shopping Cart" className="h-6" />
                    <img src={notification} alt="Notifications" className="h-6" />
                    
                </div>
            </header>

            <div className="flex justify-center mt-4">
                <div className="bg-white p-6 rounded-xl shadow-lg w-3/4">
                    <h2 className="text-xl font-bold mb-4">Afribite Ratings & Reviews</h2>
                    <div className="flex space-x-2 mb-6">
                        {restaurants.map((restaurant, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 rounded-lg border ${index === 0 ? 'bg-orange-600' : 'border-orange-500 text-black'}`}
                            >
                                {restaurant} Restaurants
                            </button>
                        ))}
                    </div>
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-gray-200 p-4 rounded-lg mb-4 flex items-start">
                            <img src={reviewpic} alt="Profile" className="h-10 w-10 rounded-full mr-3" />
                            <div>
                                <p className="font-bold">{review.name}</p>
                                <p className="text-sm text-gray-500">⭐ {review.rating} - {review.date}</p>
                                <p className="mt-2">{review.content}</p>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-between space-x-2 mt-6 items-center">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map(num => (
                                <button key={num} className={`px-3 py-2 rounded-lg ${num === 1 ? 'bg-orange-600' : 'bg-orange-600 text-white'}`}>
                                    {num}
                                </button>
                            ))}
                        </div>
                        <div className="flex space-x-4">
                            <button className="bg-[#FF5722] hover:bg-[rgb(230,74,25)] text-white px-12 py-2 rounded flex items-center gap-2">
                                <img src={backbutton} alt="Back Button" className="w-4 h-4" /> Next
                            </button>
                            </div>
                            <Link to="/leave-a-review">
                                                <button className="bg-[#FF5722] hover:bg-[rgb(230,74,25)] text-white px-12 py-2 rounded flex items-center gap-2">
                                                    <img src={backbutton} alt="Back Button" className="w-4 h-4" /> Leave a Review
                                                </button>
                                                </Link>
                    </div>
                </div>

                <div className="ml-20 mt-60 flex flex-col items-center space-y-4 bg-white p-16 rounded-lg shadow-lg w-30  ">
                    <button className="bg-green-500 text-white px-16 py-2 rounded-lg">Reply</button>
                    <button className="bg-gray-500 text-white px-16 py-2 rounded-lg">Send</button>
                    <img src={Zara} alt="User" className="h-36 w-36 rounded-full" />
                    <button className="bg-green-500 text-white px-16 py-1 rounded-lg">Share Review</button>
                </div>
            </div>
        </div>
    );
}

export default ReviewsandRatings;

