import React from 'react'
import { Link, } from "react-router-dom";
import RestaurantMenuHeader from '../components/RestaurantMenuHeader'
import Footer from '../components/Footer'
import MyIcon from '../assets/location.svg'
import filter from '../assets/mage_filter.svg'
import { categoryData, restaurantData } from '../utilities/dummyData'
import first from '../assets/first.svg'
import prev from '../assets/prev.svg'





function RestaurantPpage() {
  return (
    <>
        <RestaurantMenuHeader />
        <div className='relative w-100vw h-[250px] m-[80px] mb-0 rounded-xl flex items-center justify-left text-white px-4 '
        style={{
            backgroundImage: "linear-gradient(to right, rgba(37, 20, 0, 1) 65%, transparent 100%), url('./src/assets/image 11.jpg')",
            backgroundSize: "contain",
            backgroundPosition: "right center",
        }}>
            <div className='w-full flex gap-4 flex-col ml-8'>
                <h1 className='text-3xl font-semibold'>
                    Explore Restaurants Near You
                </h1>
                <p className='max-w-xl text-xs'>Discover the best food spots offering your favorite dishes. From African delicacies to global flavors, find the perfect restaurant for your cravings</p>
                <div className='w-[700px] flex'>
                    <div className='relative'>
                        <input className='h-[60px] w-[600px] pl-14 rounded-l-md'  type='text' placeholder='Search for restaurants near your location'></input>
                        <img src={MyIcon} className='absolute left-3 top-1/2 transform -translate-y-1/2 '/>
                    </div>
                    <button className='bg-[#f57c00] w-[100px] font-normal h-[60px] flex items-center justify-center rounded-r-md'>Search</button>
                </div>
            </div>
        </div>
        <div className='ml-[80px] mr-[120px] mt-8 text-3xl font-medium '>
            <h1 className='mb-8'>Browse by categories</h1>
            <div className='flex flex-wrap gap-6 '>

                {categoryData.map((item,index) => (
                    <div className='bg-[#ffede6] w-max rounded-full flex items-center gap-2 text-center p-5 hover:bg-[#ebac94] '>
                        <img src={item.icon} alt="" />
                        <h1 className='text-xl '>{item.cat}</h1>
                    </div>
                ))}
                
            </div>
        </div>

        <div className='mx-[80px]'>
            <div className='flex justify-between my-10 '>
                <h1 className='text-3xl '>All Restaurants</h1>
                <div className='bg-[#388e3c] hover:bg-[#61c266] mr-1 text-xl rounded-md text-white flex justify-center items-center px-5 py-3 gap-2'>
                    <img src={filter} alt="" />
                    <button>Filters</button>
                </div>
            </div>

            <div className='grid grid-cols-3 px-6 gap-14 '>
                {restaurantData.map((item,index) => (
                    <div className='w-full  '>
                    <div className=' mb-4' >
                        <img src={item.icon} alt="" className='rounded-xl w-full' />
                    </div>
                    <div className=''>
                       <div className='flex justify-between mb-3'>
                            <h1 className='text-2xl font-semibold'>{item.name}</h1>
                            <div className='flex text-lg justify-center items-center'>
                                <img src={item.rating} alt="" />
                                <p className='text-black mr-4'>{item.rate}</p>
                                <p>{item.order}</p>
                            </div>
                       </div>
                       <div className='flex items-center gap-2 mb-3'>
                        <img src={item.clock} alt="" />
                        <p className='text-sm text-black'>{item.time}</p>
                       </div>
                       <p className='text-sm text-black mb-3'>{item.location}</p>
                       <div className='bg-terra-cotta hover:bg-[#eb6a38] h-[35px] rounded-md flex justify-center items-center text-white'>
                        <Link to="/RestaurantProfile">
                         <button>{item.link}</button>
                        </Link>
                       </div>
                    </div>
                </div>
                ))}

            </div>
            <div className='flex justify-center items-center h-18 w-18 mt-16 gap-3  mb-6 text-lg'>
               <button className='rounded-md border border-gray-200 p-2 h-15 '><img src={first} alt="" /></button>
               <button className='rounded-md border border-gray-200 p-2 '><img src={prev} alt="" /></button>
                <button className='rounded-md border border-gray-200  text-sm'>1</button>
                <button className='rounded-md border border-gray-200 p-2 '></button>
               
                <button>...</button>
                <button>10</button>
                <img src="" alt="" srcset="" />
                <img src="" alt="" />
            </div>
        </div>
        <Footer />
    </>
  )
}

export default RestaurantPpage