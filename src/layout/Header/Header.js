
import React from 'react'

function Header() {
  return (
    <>
      <header className='	'>
        <div className='border-2 border-b p-3 flex items-center'>
          <div className='flex  container justify-between	m-auto'>
            <ul className='flex m-0 p-0 gap-5'>
              <li>Account</li>
              <li>Track Order</li>
              <li>Support</li>
            </ul>
            <ul className='flex m-0 p-0 gap-5'>
              <li>US</li>
              <li>USD</li>
              <li>Bangla</li>
            </ul>
          </div>
        </div>
        <nav className="flex py-3 container justify-between	m-auto">
          <a href="https://google.com" className=' flex-none'>
            <h2>ECART</h2>
          </a>
          
          <div className=''>
            <ul className='flex gap-x-4 p-0 m-0'>
              <li className='w-8 h-8 relative'><a href="https://google.com"><span className='flex justify-center items-center w-3 h-3 absolute top-0 right-0 text-white text-xs rounded bg-orange-600 p-2'>1</span><i className="fa-regular fa-heart fa-xl"></i></a></li>
              <li className='w-8 h-8 relative'><a href="https://google.com"><span className='flex justify-center items-center w-3 h-3 absolute top-0 right-0 text-white text-xs rounded bg-orange-600 p-2'>1</span><i className="fa-solid fa-bag-shopping fa-xl"></i></a></li>
              <li className='w-8 h-8 relative'><a href="https://google.com"><span className='flex justify-center items-center w-3 h-3 absolute top-0 right-0 text-white text-xs rounded bg-orange-600 p-2'>1</span><i class="fa-regular fa-user fa-xl"></i></a></li>
            </ul>
          </div>
        </nav>
        <div className='bg-orange-600 py-4'>
            <ul className=' container m-auto flex justify-center gap-x-6'>
              <li><a className='text-white' href="https://google.com">About</a></li>
              <li><a className='text-white' href="https://google.com">Service</a></li>
              <li><a className='text-white' href="https://google.com">Pricing</a></li>
              <li><a className='text-white' href="https://google.com">Company</a></li>
              <li><a className='text-white' href="https://google.com">Home</a></li>
            </ul>
          </div>
      </header>
    </>
  )
}

export default Header