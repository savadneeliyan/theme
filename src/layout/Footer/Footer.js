import React from 'react'

function Footer() {
  return (
    <div className="container m-auto">
      <h2 className="text-center p-4 border-b ">ECART</h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4 footer-bottom ">
        <div className="mr-4">
          <h5>About Us</h5>
          <p>
            We know there are a lot of threa developers our but we pride into a
            firm in the industry.
          </p>
        </div>
        <ul className="p-0">
          <h5>Feature</h5>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Terms and condetion</a>
          </li>
          <li>
            <a href="">Best Products</a>
          </li>
        </ul>
        <ul className="p-0">
          <h5>Genaral Links</h5>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Tracking order</a>
          </li>
          <li>
            <a href="">Became Seller</a>
          </li>
        </ul>
        <ul className="p-0">
          <h5>Helpful</h5>
          <li>
            <a href="">Flash sale</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
        </ul>
      </div>
      <div>
        <p className="border-y text-xs p-2">All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer