import React from 'react'

function Salecard() {
    
  return (
      <div className='container my-10 mx-auto grid gap-x-8 gap-y-4  lg:grid-cols-2' >
          <div style={{backgroundImage: `url(/images/banner-2.png)`}} className='p-10 rounded bg-cover h-96 flex flex-col justify-center ' data-aos="fade-right" data-aos-duration="2000">
              <div className='flex gap-4  '>  
                <div><div className='rounded-full bg-white w-20 h-20 flex items-center justify-center text-lg text-red-600'>0</div><h6 className='text-center mt-2 '>days</h6></div>
                <div><div className='rounded-full bg-white w-20 h-20 flex items-center justify-center text-lg text-green-600'>0</div><h6 className='text-center mt-2 '>hour</h6></div>
                <div><div className='rounded-full bg-white w-20 h-20 flex items-center justify-center text-lg text-yellow-600'>0</div><h6 className='text-center mt-2 '>minutes</h6></div>
                <div><div className='rounded-full bg-white w-20 h-20 flex items-center justify-center text-lg text-blue-600'>0</div><h6 className='text-center mt-2 '>seconds</h6></div>
              </div>
              <h2 className=''>wooo flash sale</h2>
              <button className='rounded bg-white px-5 py-3 w-fit '>
              <a
                href="http://"
                className="flex items-center justify-center gap-2 "
              >
                View More
                <i class="fa-solid fa-arrow-right-long fa-lg transition ease-in-out delay-150  hover:translate-x-3  duration-500 "></i>
              </a>
            </button>
          </div>
          <div style={{ backgroundImage: `url(/images/banner-1.png)` }} className='p-10 bg-cover' data-aos="fade-left" data-aos-duration="2000">
              <h5>Mobile App version</h5>
              <h2 className='w-3/6'>Get Our <span className='text-red-600 underline mr-2'>Mobile App </span> It’s Make easy for you life !</h2>
              <div className='flex gap-5 mt-10'>
                  <a href="http://"><img src="/images/play-store.png" alt="" /></a>
                  <a href="http://"><img src="/images/apple-store.png" alt="" /></a>
              </div>
          </div>
    </div>
  )
}

export default Salecard