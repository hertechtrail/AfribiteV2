import React from 'react'
import cart from '../assets/image 1.svg'

function AsideBar() {
  return (
    <div className='top-0 right-0 h-[480px] mt-[50px] w-[27%] border border-orange-100 mr-[80px] rounded-lg'>
        <div className='flex flex-col my-24 justify-center items-center '>
            <img src={cart} alt=""  className='bg-[#ffede6f1] rounded-full p-6' />
            <div className='flex flex-col justify-center items-center mx-4 mt-4 gap-1'>
                <h1 className='text-black  text-xl font-bold'>Your Cart is Empty</h1>
                <p className='text-center text-sm text-black'>It looks like you haven’t added anything to your cart yet. Browse our menu and add some delicious dishes to get started!</p>
            </div>
        </div>
    </div>
  )
}

export default AsideBar