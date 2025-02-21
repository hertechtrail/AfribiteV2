import React, { useState } from 'react'
import RestaurantMenuHeader from '../components/RestaurantMenuHeader'
import Footer from '../components/Footer'
import AsideBar from '../components/AsideBar'
import verified from '../assets/verified.svg'
import review from '../assets/review.svg'
import clock from '../assets/clocck.svg'
import bike from '../assets/bike.svg'
import filter from '../assets/mage_filter.svg'
import search from '../assets/search.svg'
import { customerReview, desertData, drinksData, mainCourseData, popularDishesData, specialOffersData, starterData, } from '../utilities/dummyData'
import contact from '../assets/contact.svg'
import map from '../assets/map.svg'
import { Link } from 'react-router-dom'





function RestaurantProfile() {

    const [productDisplay, setProductDisplay] = useState(specialOffersData)

    const [openFilter, setOpenFilter] = useState(false)

    const [activeButton, setActiveButton] = useState('specialOffers')

    const [changeTitle, setChangeTitle] = useState('Special Offers')

    const handleProductDisplay = (value) => {
        if (value === 'popularDishes'){
            setActiveButton('popularDishes')
            setChangeTitle('Popular Dishes')
            setProductDisplay(popularDishesData)  
        } else if (value === 'specialOffers') {
            setActiveButton('specialOffers')
            setChangeTitle('Special Offers')
            setProductDisplay(specialOffersData)
        } else if (value === 'starters') {
            setActiveButton('starters')
            setChangeTitle('Starters')
            setProductDisplay(starterData)
        } else if (value === 'mainCourse') {
            setActiveButton('mainCourse')
            setChangeTitle('Main CourseS')
            setProductDisplay(mainCourseData)
        } else if (value === 'desert') {
            setActiveButton('desert')
            setChangeTitle('Dessert')
            setProductDisplay(desertData)
        } else if (value === 'drinks') {
            setActiveButton('drinks')
            setChangeTitle('Drinks')
            setProductDisplay(drinksData)
        } else {
            setActiveButton('specialOffers')
            setChangeTitle('Special Offers')
            setProductDisplay(specialOffersData)
        } 
    }



    
  return (
    <div className='overflow-x-hidden'>
        <RestaurantMenuHeader />
        <div className='flex w-[100vw]'>
            <div className='mt-[50px] w-[73%] ml-[80px] '>
                <div className='relative h-[280px] rounded-xl mr-6 bg-cover bg-center bg-no-repeat' style={{backgroundImage: "url('./src/assets/image 121.svg')",}}>  
                    <div className='absolute inset-0 bg-black opacity-80 rounded-xl flex flex-col items-start justify-center pl-8 gap-5'>
                        <div className='flex gap-6'>
                            <h1 className='text-white text-5xl'>Boma African Grill</h1>
                            <img src={verified} alt="" />
                        </div>
                        <p>The Taste of Africa</p>
                        <div className='flex gap-6'>
                            <div className='border border-white flex rounded-full p-2 gap-2'>
                                <img src={review} alt="" />
                                <p className='text-white'>325 Customer Review</p>
                            </div>
                            <div className='border border-white flex rounded-full p-2 gap-2'>
                                <img src={clock} alt="" />
                                <p className='text-white text-nowrap'>Estimated fee $5-$15</p>
                            </div>
                            <div className='border border-white flex rounded-full p-2 gap-2'>
                                <img src={bike} alt="" />
                                <p className='text-white'>Delivery in 30-45 Minutes</p>
                            </div>
                        </div>
                    </div>
                    <div className='absolute -bottom-3 left-0 bg-orange-400 text-white flex px-10'>
                        <img src={clock} alt=""  />
                        <p className='text-lg p-3 text-white'>Open until 7:00pm</p>
                    </div>
                   
                </div>
                
                <div className='bg-orange-500 h-[60px] mr-6 mt-[50px] flex gap-6 pl-[80px] justify-start items-center '>
                    <p onClick={() => handleProductDisplay('specialOffers')} className={`text-base hover:scale-105 transition-transform duration-50  ${activeButton === 'specialOffers' ? 'bg-yellow-400 p-2 rounded-md text-black hover:scale-100 transition-transform duration-50' : 'bg-transparent text-white '} `}>Special Offers</p>
                    <p onClick={() => handleProductDisplay('popularDishes')} className={`  text-base hover:scale-105 transition-transform duration-50  ${activeButton === 'popularDishes' ? 'bg-yellow-400 p-2 rounded-md text-black hover:scale-100 transition-transform duration-50' : 'bg-transparent text-white '} `}>Popular Dishes</p>
                    <p onClick={() => handleProductDisplay('starters')} className={` text-base hover:scale-105 transition-transform duration-50   ${activeButton === 'starters' ? 'bg-yellow-400 p-2 rounded-md text-black hover:scale-100 transition-transform duration-50' : 'bg-transparent text-white '} `}>Starters</p>
                    <p onClick={() => handleProductDisplay('mainCourse')} className={` text-base hover:scale-105 transition-transform duration-50  ${activeButton === 'mainCourse' ? 'bg-yellow-400 p-2 rounded-md text-black hover:scale-100 transition-transform duration-50' : 'bg-transparent text-white '} `}>Main Course</p>
                    <p onClick={() => handleProductDisplay('desert')} className={` text-base hover:scale-110 transition-transform duration-50  ${activeButton === 'desert' ? 'bg-yellow-400 p-2 rounded-md text-black hover:scale-100 transition-transform duration-50' : 'bg-transparent text-white '} `}>Desserts</p>
                    <p onClick={() => handleProductDisplay('drinks')} className={` text-base  hover:scale-110 transition-transform duration-50 ${activeButton === 'drinks' ? 'bg-yellow-400 p-2 rounded-md text-black hover:scale-100 transition-transform duration-50' : 'bg-transparent text-white '} `}>Drinks</p>
                 </div>

                <div className='mr-5'>
                    <div className='flex justify-between  mt-[30px]'>
                        <div className='relative flex justify-center bg-[#f5f5f5]'>
                            <input type="text"  placeholder='Search for our menu' className='bg-[#F5F5F5] h-[40px] w-[400px] rounded-md ml-14' />
                            <img src={search} className='absolute left-3 top-1/2 transform -translate-y-1/2 '/>
                        </div>
                        <div onClick={() => setOpenFilter(!openFilter)} className='bg-yellow-400 mr-1 text-xl rounded-md text-black flex justify-center items-center px-5 py-3 gap-2 hover:bg-yellow-300'>
                            <img src={filter} alt="" className='filter invert ' />
                            <p className='text-black'>Filters</p>
                        </div>
                    </div>
                </div>

                <div className={`w-[137%] h-[700px] bg-[#FFEDE6] ml-[-0px] mt-6 rounded-lg ${openFilter ? "flex" : 'hidden'} items-start justify-between gap-14 p-20 px-40`} >
                    <div className='flex flex-col w-1/3 gap-8'>
                        <div className='flex flex-col'>
                            <h1  className='text-4xl font-semibold  mb-4'>Meal Types</h1>
                            <ul  className='list-disc pl-10 marker:text-3xl text-lg' >
                                <li >Appetizers/Starters</li> 
                                <li>Appetizers/Starters</li>
                                <li>Desserts</li>
                                <li>Side Dish</li>
                                <li>Snack</li>
                            </ul>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-4xl font-semibold  mb-4'>Food Categories</h1>
                            <ul className='list-disc pl-10 marker:text-3xl text-lg' >
                                <li>Soup</li>
                                <li>Salads</li>
                                <li>Sanwiches</li>
                                <li>Grilled Item</li>
                                <li>Rice Dish</li>
                                <li>Seafood</li>
                            </ul>
                        </div>
                    </div>
                   <div className='flex flex-col w-1/3 gap-8'>
                        <div>
                                <h1 className='text-4xl font-semibold  mb-4'>Drinks</h1>
                                <ul className='list-disc pl-10 marker:text-3xl text-lg' >
                                    <li>Non-Alcoholic</li>
                                    <li>Hot Beverage</li>
                                    <li>Cocktails</li>
                                    <li>Mocktail</li>
                                    <li>Wine</li>
                                </ul>
                        </div>
                        <div>
                        <h1 className='text-4xl font-semibold  mb-4'>Price Range</h1>
                            <ul className='list-disc pl-10 marker:text-3xl text-lg' >
                                <li>Budget-Friendly</li>
                                <li>Mid-Range</li>
                                <li>Premium</li>
                            </ul>
                        </div>
                   </div>
                    <div className='flex flex-col w-1/3'>
                    <div>
                        <h1 className='text-4xl font-semibold  mb-4'>Tags</h1>
                            <ul className='list-disc pl-10 marker:text-3xl text-lg' >
                                <li>Tags</li>
                                <li>Comfort Food</li>
                                <li>Sweet</li>
                                <li>Spicy</li>
                                <li>Refreshing</li>
                                <li>Crunch</li>
                                <li>Vegan-Friendly</li>
                                <li>African Cuisine</li>
                                <li>Gluten-free</li>
                                <li>African Special</li>
                            </ul>
                        </div>
                    </div>
                </div>  
                  
                <div className=' mr-5'>
                    <h1 className='text-2xl font-semibold mt-6 '>{changeTitle}</h1>
                    <div className='grid grid-cols-2 gap-10 mt-6 '>

                             {productDisplay.map((item,index) => (
                                    <div className='border border-orange-200 shadow-lg rounded-lg flex gap-10 px-3 py-4 '>
                                                <div className='relative'>
                                                    <img src={item.icon} alt=""className='px-1 py-2 rounded-sm bg-[#FFEDE6]' />
                                                    {item.discount ? (
                                                    <div className='absolute bg-yellow-400 top-2 -right-0 px-2 py-1 rounded-sm'>
                                                        <p className='text-black'>{item.discount}</p>
                                                    </div>
                                                    ) : null }
                                                </div>
                                                <div className='w-full flex flex-col gap-3'>
                                                    <h1 className='font-semibold text-xl'>{item.food}</h1>
                                                    <p className='text-sm'>{item.description}</p>
                                                    {item.add ? (
                                                    <h6 className='text-xs'>{item.add}</h6>
                                                    ) : null }
                                                    <div className='flex justify-between items-center font-semibold'>
                                                        <div className='flex gap-5'>
                                                                <h1>{item.price1}</h1>
                                                                <h1>{item.price2}</h1>
                                                        </div>
                                                        <div className= 'bg-orange-500 rounded-full w-9 h-9 flex items-center justify-center mr-10'>
                                                                <p className='text-2xl text-white'>{item.addCart}</p>
                                                        </div>
                                                
                                                    </div>
                                                </div>
                                    </div>
                             ))}
                    </div>
                </div>
                       



                
            </div>
            <AsideBar />
        </div>
        <div className='w-[full] border border-gray-200 mt-10 mx-[80px] shadow-md h-[400px] rounded-lg flex justify-between items-center px-14 '>
            <div className='flex flex-col gap-4 w-1/3'>
                <div className='flex gap-2 mb-3'>
                    <img src={contact} alt="" />
                    <h1 className='font-semibold text-3xl'>Contact Information</h1>
                </div>
                <p className=' text-black text-lg'><span className='font-semibold'>Phone Number:</span> +1 (123) 456-7890</p>
                <p  className=' text-black text-lg'><span className='font-semibold'>Email:</span> contact@bomaafricangrill.com</p>
                <p  className=' text-black text-lg'> <span className='font-semibold'>Website:</span> www.bomaafricangrill.com</p>
                <p  className=' text-black text-lg'><span className='font-semibold'>Address:</span> 1234 Main St, Cityville, Country</p>
            </div>
            <div className="flex flex-col gap-4 w-1/3">
                 <div className='flex gap-2'>
                    <img src={clock} alt="" className='invert filter' />
                    <h1 className='font-semibold text-3xl'>Operating Hours</h1>
                </div>
                <p className=' text-black text-lg'><span className='font-semibold'>Monday to Friday:</span> 10:00 AM - 10:00 PM</p>
                <p className=' text-black text-lg'><span className='font-semibold'>Saturday:</span> 11:00 AM - 11:00 PM</p>
                <p className=' text-black text-lg'><span className='font-semibold'>Sunday:</span> 12:00 PM - 8:00 PM</p>
                <p className=' text-black text-lg pr-16'><span className='font-semibold'>Holidays:</span> Closed on major holidays (e.g., Christmas, New Year's Day)</p>
            </div>
            <div className="flex flex-col gap-4 w-1/3">
                 <div className='flex gap-2'>
                    <img src={bike} alt="" className='invert filter' />
                    <h1 className='font-semibold text-3xl'>Delivery Information</h1>
                </div>
                <p className=' text-black text-lg'><span className='font-semibold'>Delivery Fee:</span> $5 - $15</p>
                <p className=' text-black text-lg'><span className='font-semibold'>Delivery Time:</span> 30 - 45 Minutes</p>
                <p className=' text-black text-lg pr-20'><span className='font-semibold'>Delivery Areas:</span> Available within a 10-mile radius of the restaurant.</p>
            </div>
         </div>

         <div className='w-[full] border border-gray-200 mt-10 mx-[80px] h-[600px] shadow-sm rounded-md flex p-7'>
            <div className='flex flex-col w-[50%] gap-5 mr-6'>
                <h1 className='text-3xl font-semibold '>Contact Us</h1>
                <p className='text-lg'>We’d Love to Hear From You!</p>
                <input type="text" id='name' placeholder='Enter your full name' className='border border-orange-400 h-14 rounded-lg pl-6' />
                <input type="email"id='email' placeholder='Entaer your email address' className='border border-orange-400 h-14 rounded-lg pl-6 '  />
                <input type="textarea" id='message' placeholder='Message' className='border border-orange-400 h-44 rounded-lg pl-6 ' />
                <button className='bg-orange-500 text-base rounded-lg h-14 '>Send Message</button>
            </div>
            <div className='w-[50%] flex items-center justify-center h-full '>
                             <img src={map} alt="" />
            </div>
         </div>

         <div className='w-[full] bg-gray-100 h-[400px] mt-10 flex px-[80px] py-[60px]'>
            <div className='flex flex-col w-[25%] items-start justify-center pr-11 '>
                <p className='text-base '>What Our Customers Say</p>
                <h1 className='text-2xl font-semibold mt-6 mb-8 '>Rated by 150+ happy customers!</h1>
                <Link to="/CustomerReviewPage">
                    <button className='bg-orange-500 text-white px-8 py-2 rounded-lg text-xl font-semibold hover:bg-orange-400'>View More</button>
                </Link>
            </div>
            <div className='w-[75%] flex justify-between items-center gap-6'>
            {customerReview.map((item, index) => (
                <div className='bg-white rounded-md h-full w-1/3 flex flex-col justify-center items-start px-6'>
                    <div className='flex mb-6 gap-4'>
                        <img src={item.icon} alt="" />
                        <div>
                            <h1 className='text-xl font-semibold'>{item.name}</h1>
                            <p>{item.location}</p>
                        </div>
                    </div>
                    <div className='flex mb-6'>
                        <img src={item.stars} alt="" />
                        <img src={item.stars} alt="" />
                        <img src={item.stars} alt="" />
                        <img src={item.stars} alt="" />
                        <img src={item.stars} alt="" />
                    </div>
                    <div className='mb-6'>
                        <h1>{item.review}</h1>
                    </div>
                    <div>
                        <p>{item.date}</p>
                    </div>
                </div>
            ))}
            </div>
         </div>
        <Footer />
    </div>
  )
}

export default RestaurantProfile