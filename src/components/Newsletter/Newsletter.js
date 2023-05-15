import React from 'react'

function Newsletter() {
  return (
    <div
      className="w-full min-h-[307px] my-10 bg-cover flex justify-center items-center"
      
      style={{ backgroundImage: `url(/images/discount-banner-1.jpg)` }}
    >
      <div className="container-xl mx-auto">
        <div class="best-services w-full  flex flex-col  space-y-10 lg:space-y-0  lg:justify-between lg:items-center lg:h-[110px] px-10 lg:py-0 py-10">
            <h2 data-aos="fade-up" data-aos-duration="1000">Get 20% Off Discount Coupon</h2>
            <h5 data-aos="fade-up" data-aos-duration="1000" className='text-light text-center'>by Subscribe our Newsletter</h5>
            <div data-aos="fade-up" data-aos-duration="1000" className='w-80 mx-auto pt-4'>
                <input type="text"  className='w-[70%]'/>
                <button className='w-[30%] bg-yellow-500 text-black  capitalize'>submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter