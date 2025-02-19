import React from 'react'
import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <>
        <div className='mt-20'>
            <nav className="py-8 bg-transparent laptop:mx-16  tablet:p-6 flex items-start justify-between flex-wrap font-pop  ">
                {/* Logo */}
            
                <div className="flex w-36 gap-3.5 items-center">
                    <img src={logo} alt="Afribite Logo" />
                    <p className="text-terra-cotta text-2xl font-extrabold">AFRIBITE</p>
                </div>

                {/* Explore  */}
                <div className='flex flex-col gap-6'>
                    <h1 className='font-bold text-xl'>Explore</h1>
                    <div className='flex flex-col gap-3 underline '>
                        <a href="">Home</a>
                        <a href="">Browse Restaurants</a>
                        <a href="">Offers And Discount</a>
                        <a href="">Help Center</a>
                    </div>
                </div> 

                <div className='flex flex-col gap-6'>
                    <h1 className='font-bold text-xl'>Your Account</h1>
                    <div className='flex flex-col gap-3 underline '>
                        <a href="">Track Your Order</a>
                        <a href="">Payment Methods</a>
                        <a href="">Settings</a>
                    </div>
                </div> 

                <div className='flex flex-col gap-6'>
                    <h1 className='font-bold text-xl'>Legal Pages</h1>
                    <div className='flex flex-col gap-3 underline '>
                        <a href="">Privacy Policy</a>
                        <a href="">Terms and conditions</a>
                    </div>
                </div> 

                <div className='flex flex-col gap-6'>
                    <h1 className='font-bold text-xl'>Stay Updated</h1>
                    <a className='text black'>Follow us on</a>
                    <ul className='flex flex-col gap-3 list-disc ml-8'>
                        <li><a href="">Instagram</a></li>
                        <li>  <a href="">Facebook</a></li>
                        <li><a href="">Twitter</a></li>
                    </ul>
                </div> 
            </nav>
        </div>
        <div className='bg-black text-white h-16 flex justify-start items-center pl-14 gap-10'>
            <p>&copy; 2025 Afribite.</p>
            <p>All Rights Reserved</p>
        </div>
    </>
  )
}

export default Footer