import React from 'react'

const imgs = [
    {
        url:"/images/brand-1.png"
    },
    {
        url:"/images/brand-2.png"
    },
    {
        url:"/images/brand-3.png"
    },
    {
        url:"/images/brand-4.png"
    },
    {
        url:"/images/brand-5.png"
    },
    {
        url:"/images/brand-6.png"
    },
    {
        url:"/images/brand-7.png"
    },
    {
        url:"/images/brand-8.png"
    },
    {
        url:"/images/brand-9.png"
    },
    {
        url:"/images/brand-10.png"
    },
    {
        url:"/images/brand-11.png"
    },
    {
        url:"/images/brand-12.png"
    }
]

function PartnerList() {
  return (
      <div className='container m-auto'>
          <div className="mx-auto my-10 grid max-w-lg grid-cols-4 items-center  sm:max-w-xl sm:grid-cols-6  lg:mx-0 lg:max-w-none lg:grid-cols-6">    
            {
                  imgs.map((item, i) => (
                    <div className='col-span-2 p-16 border-slate-100 max-h-12 flex items-center justify-center border h-100 w-full object-contain lg:col-span-1 '>  
                        <img
                            className=''
                            
                            src={item.url} alt=""
                        />
                    </div>
                ))  
            }
          </div>
    </div>
  )
}

export default PartnerList