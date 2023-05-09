import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

function Recent({ title }) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
      <div className='container m-auto my-10' data-aos="fade-up"
        data-aos-duration="2000">
          <div className="flex items-center justify-between">
              <h2>{title}</h2>
              <button>
              <a
                href="http://"
                className="flex items-center justify-center gap-2 "
              >
                View More
                <i class="fa-solid fa-arrow-right-long fa-lg transition ease-in-out delay-150  hover:translate-x-3  duration-500 "></i>
              </a>
            </button>
          </div>
          <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-10 '>
              <div className='border flex items-center gap-5'>
                  <div className='h-32 w-40'><img className='w-full h-full object-cover	' src="https://images.unsplash.com/photo-1491927570842-0261e477d937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /></div>
                  <div>
                      <h2 className='text-lg'>Xoggle aute et pariatur</h2>
                      <h4 className='text-sm'><span className='line-through mr-4'>$24.44</span>$24.44</h4>
                  </div>
              </div>
              <div className='border flex items-center gap-5'>
                  <div className='h-32 w-40'><img className='w-full h-full object-cover	' src="https://images.unsplash.com/photo-1491927570842-0261e477d937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /></div>
                  <div>
                      <h2 className='text-lg'>Xoggle aute et pariatur</h2>
                      <h4 className='text-sm'><span className='line-through mr-4'>$24.44</span>$24.44</h4>
                  </div>
              </div>
              <div className='border flex items-center gap-5'>
                  <div className='h-32 w-40'><img className='w-full h-full object-cover	' src="https://images.unsplash.com/photo-1491927570842-0261e477d937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /></div>
                  <div>
                      <h2 className='text-lg'>Xoggle aute et pariatur</h2>
                      <h4 className='text-sm'><span className='line-through mr-4'>$24.44</span>$24.44</h4>
                  </div>
              </div>
              <div className='border flex items-center gap-5'>
                  <div className='h-32 w-40'><img className='w-full h-full object-cover	' src="https://images.unsplash.com/photo-1491927570842-0261e477d937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /></div>
                  <div>
                      <h2 className='text-lg'>Xoggle aute et pariatur</h2>
                      <h4 className='text-sm'><span className='line-through mr-4'>$24.44</span>$24.44</h4>
                  </div>
              </div>
              <div className='border flex items-center gap-5'>
                  <div className='h-32 w-40'><img className='w-full h-full object-cover	' src="https://images.unsplash.com/photo-1491927570842-0261e477d937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /></div>
                  <div>
                      <h2 className='text-lg'>Xoggle aute et pariatur</h2>
                      <h4 className='text-sm'><span className='line-through mr-4'>$24.44</span>$24.44</h4>
                  </div>
              </div>
              <div className='border flex items-center gap-5'>
                  <div className='h-32 w-40'><img className='w-full h-full object-cover	' src="https://images.unsplash.com/photo-1491927570842-0261e477d937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /></div>
                  <div>
                      <h2 className='text-lg'>Xoggle aute et pariatur</h2>
                      <h4 className='text-sm'><span className='line-through mr-4'>$24.44</span>$24.44</h4>
                  </div>
              </div>
              <div className='border flex items-center gap-5'>
                  <div className='h-32 w-40'><img className='w-full h-full object-cover	' src="https://images.unsplash.com/photo-1491927570842-0261e477d937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /></div>
                  <div>
                      <h2 className='text-lg'>Xoggle aute et pariatur</h2>
                      <h4 className='text-sm'><span className='line-through mr-4'>$24.44</span>$24.44</h4>
                  </div>
              </div>
              <div className='border flex items-center gap-5'>
                  <div className='h-32 w-40'><img className='w-full h-full object-cover	' src="https://images.unsplash.com/photo-1491927570842-0261e477d937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /></div>
                  <div>
                      <h2 className='text-lg'>Xoggle aute et pariatur</h2>
                      <h4 className='text-sm'><span className='line-through mr-4'>$24.44</span>$24.44</h4>
                  </div>
              </div>
              <div className='border flex items-center gap-5'>
                  <div className='h-32 w-40'><img className='w-full h-full object-cover	' src="https://images.unsplash.com/photo-1491927570842-0261e477d937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /></div>
                  <div>
                      <h2 className='text-lg'>Xoggle aute et pariatur</h2>
                      <h4 className='text-sm'><span className='line-through mr-4'>$24.44</span>$24.44</h4>
                  </div>
              </div>
              
              
          </div>
    </div>
  )
}

export default Recent