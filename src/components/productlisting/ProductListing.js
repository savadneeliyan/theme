import React from "react";

function ProductListing({ title }) {

  return (
    <>
      <div
        className="bg-white container m-auto"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="mx-auto   sm:py-10  ">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              {title}
            </h2>
            <button>
              <a
                href="http://"
                className="flex items-center justify-center gap-2 "
              >
                View More{" "}
                <i class="fa-solid fa-arrow-right-long fa-lg transition ease-in-out delay-150  hover:translate-x-3  duration-500 "></i>
              </a>
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="group relative">
              <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="{product.imageAlt}"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                      <span aria-hidden="true" className="absolute inset-0" />
                      camera
                    </a>
                  </h3>
                  <div className="flex gap-1">
                    <i class="fa-solid text-yellow-400 fa-star"></i>
                    <i class="fa-regular text-yellow-400 fa-star"></i>
                    <i class="fa-regular text-yellow-400 fa-star"></i>
                    <i class="fa-regular text-yellow-400 fa-star"></i>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">black</p>
                </div>

                <p className="text-sm font-medium text-gray-900">
                  {" "}
                  <span className="line-through	mr-3">40000</span> 35000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductListing;
