import React from 'react'
import RestaurantMenuHeader from '../components/RestaurantMenuHeader'
import star from '../assets/star.svg'
import Footer from '../components/Footer'
import { reviewData } from '../utilities/dummyData'
import rating from '../assets/Frame 7133.svg'
import star1 from '../assets/frame 7101.svg'
import star2 from '../assets/frame 71012.svg'
import star3 from '../assets/frame 71013.svg'
import star4 from '../assets/frame 7104.svg'
import star5 from '../assets/frame 7105.svg'


function CustomerReviewPage() {
  return (
   <>
    <RestaurantMenuHeader />
    <div className='w-[100vw]'>
        <div className='flex justify-center items-center h-[200px] w-[full]'>
            <h1 className='text-white text-4xl bg-orange-600 px-10 py-3 text-center rounded-md'>Customer Review</h1>
        </div>
        <div className='flex gap-10 mx-24 h-[400px] W-[full]  '>
            <div className='bg-[#F5F5F5] h-[full] rounded-lg w-[50%] px-32 flex justify-center items-center '>
                <div className='flex flex-col items-start gap-8  '>
                    <div className='flex items-center justify-center gap-2 text-2xl'>
                        <h1>5</h1>
                        <img src={star} alt="" className='w-10 h-10'/>
                        <img src={star1} alt="" />
                        <h1>4.5k</h1>
                    </div>
                    <div className='flex items-center justify-center gap-2 text-2xl'>
                        <h1>4</h1>
                        <img src={star} alt="" className='w-10 h-10'/>
                        <img src={star2} alt="" />
                        <h1>980</h1>
                    </div>
                    <div className='flex items-center justify-center gap-2 text-2xl'>
                        <h1>3</h1>
                        <img src={star} alt="" className='w-10 h-10'/>
                        <img src={star3} alt="" />
                        <h1>75</h1>
                    </div>
                    <div className='flex items-center justify-center gap-2 text-2xl'>
                        <h1>2</h1>
                        <img src={star} alt="" className='w-10 h-10'/>
                        <img src={star4} alt="" />
                        <h1>25</h1>
                    </div>
                    <div className='flex items-center justify-center gap-2 text-2xl'>
                        <h1>1</h1>
                        <img src={star} alt="" className='w-10 h-10'/>
                        <img src={star5} alt="" />
                        <h1>10</h1>
                    </div>
                </div>
            </div>
            <div className='bg-[#F5F5F5] h-[full]  rounded-lg w-[50%] flex flex-col items-center justify-center gap-11 font-semibold text-3xl'>
                <h1>4.5</h1>
                <div className='flex gap-6 '>
                    <img src={star} alt="" className='w-14 h-14'/>
                    <img src={star} alt="" className='w-14 h-14'/>
                    <img src={star} alt="" className='w-14 h-14'/>
                    <img src={star} alt="" className='w-14 h-14'/>
                    <img src={star} alt="" className='w-14 h-14'/>
                </div>
                <h1>50 Ratings</h1>
            </div>
        </div>

        <div className='flex flex-col gap-6 mt-28'>
           {reviewData.map((item, index) =>(
                 <div className=' mx-24 h-[250px] W-[full] bg-[#F5F5F5]  flex items-center justify-center pl-10 pr-40 gap-8'>
                    <div className='flex items-center justify-center w-[20%] h-full'>
                        <img src={item.profile} alt="" className='' />
                    </div>
                    <div className='flex flex-col '>
                        <div className='flex justify-between'>
                            <h1 className='text-2xl font-semibold'>{item.name}</h1>
                            <img src={item.rate} alt="" />
                        </div>
                        <p className='text-lg '>{item.comment}</p>
                    </div>
                </div>

           ))}
           
        </div>
        <div className='flex flex-col mt-32 gap-8 mx-[85px]' >
           <h1 className='text-3xl font-semibold'>Add Rating</h1>
           <div className='mb-8'>
            <img src={rating} alt="" />
           </div>
           <form action="" className='flex flex-col gap-10 '>
                <div className='flex gap-10'>
                    <div className='flex flex-col text-3xl w-1/2 gap-6'>
                        <label htmlFor="Name">Name</label>
                        <input type="text" className='border border-orange-500 h-[60px] rounded-xl'/>
                    </div>
                    <div className='flex flex-col text-3xl w-1/2 gap-6'>
                        <label htmlFor="Name">Email</label>
                        <input type="text" className='border border-orange-500 h-[60px] rounded-xl'/>
                    </div>
                </div>
                <label htmlFor="Name " className='text-3xl '>Add Review</label>
                <input type="text" className='border border-orange-500 rounded-xl h-[400px]' />
           </form>
           <button className='text-3xl bg-orange-500 px-28 py-6 w-[450px] text-white rounded-xl mt-8 mb-28'>Sublit Review</button>
        
        </div>


        <Footer />
    </div>
   </>
  )
}

export default CustomerReviewPage