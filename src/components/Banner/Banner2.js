import React from 'react'

function Banner2() {
  return (
      <>
          <div className="container my-10 mx-auto flex gap-3">
              <div className="one w-[100%] p-10 flex justify-center flex-col bg-red-500" data-aos="fade-right" data-aos-duration="2000">
                  <h5 className='rounded-lg bg-white mb-5 w-fit px-3 mb-4 capitalize py-1'>new release</h5>
                  <h5 className='font-thin text-6xl mb-8'>Apple wireless</h5>
                  <h2 className='text-9xl'>Samsung </h2>
                  <h5 className='text-9xl font-thin'>s10+</h5>
                  <button className='w-fit border-b-2 mt-5'><a className='text-white capitalize text-xl ' href="">shop now</a></button>
              </div>
              <div className="flex w-[100%]   flex-col gap-3" data-aos="fade-left" data-aos-duration="2000">
                  <div className="one p-10  min-h-[350px] bg-yellow-300">
                      <h5 className='rounded-lg bg-white mb-5 w-fit px-3 mb-4 capitalize py-1'>Gaming</h5>
                  <h2 className='text-6xl'>Apple smart watch </h2>
                  <button className='w-fit border-b-2 mt-5'><a className='text-white capitalize text-xl ' href="">shop now</a></button>
                </div>
                <div className="one p-10 min-h-[350px] bg-yellow-300" data-aos="fade-left" data-aos-duration="2000">
                  <h5 className='rounded-lg bg-white mb-5 w-fit px-3 mb-4 capitalize py-1'>gaming</h5>
                  <h2 className='text-6xl'>xbox 5th version </h2>
                  <button className='w-fit border-b-2 mt-5'><a className='text-white capitalize text-xl ' href="">shop now</a></button></div>  
              </div>
          </div>
      </>
  )
}

export default Banner2