import React from 'react'
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function Banner3() {
  return (    
    <div className="" style={{backgroundColor:"#EDEAE3"}}>
        <div className="">
                <h1 className="limenzy-Title">title</h1>
                <h2 className="limenzy-Subtitle"> section</h2>
            <div className="ingredient-feature-wrap " >
                <div className="ingredient-feature modular">    
                    <div className="ingredientThumb owl-carousel owl-theme" id="slider">
                    <Swiper
                            slidesPerView={1}
                            autoplay={{ delay: 2500 }}
                            pagination={{
                                clickable: true,
                            }}
                            effect={"fade"}
                            navigation={{
                                nextEl: ".image-swiper-button-next",
                                prevEl: ".image-swiper-button-prev",
                                disabledClass: "swiper-button-disabled",
                            
                            }}
                            loop={true}
                        className="mySwiper "
                        modules={[Pagination,EffectFade, Autoplay , Navigation]}
                    >
                        <SwiperSlide className="ingrediant-images-list">
                            <img alt="Ingredient" data-ingredient="1" className="yes" src="https://images.pexels.com/photos/16564746/pexels-photo-16564746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                        </SwiperSlide>
                        <SwiperSlide className="ingrediant-images-list">
                            <img alt="Ingredient" data-ingredient="2" className="" src="https://images.pexels.com/photos/16564746/pexels-photo-16564746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                        </SwiperSlide>
                        <SwiperSlide className="ingrediant-images-list">
                            <img alt="Ingredient" data-ingredient="3" className="" src="https://images.pexels.com/photos/16564746/pexels-photo-16564746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                        </SwiperSlide>
                        <SwiperSlide className="ingrediant-images-list">
                            <img alt="Ingredient" data-ingredient="4" className="" src="https://images.pexels.com/photos/16564746/pexels-photo-16564746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                        </SwiperSlide>
                        <SwiperSlide className="ingrediant-images-list">
                            <img alt="Ingredient" data-ingredient="5" className="" src="https://images.pexels.com/photos/16564746/pexels-photo-16564746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                        </SwiperSlide>
                    </Swiper>
                    </div>

                    <div className="ingredientFocus">
                    
                        <div className="ingredient-wrap yes ingredient-wrap" data-ingredient="1">
                            <div className="ingredient-image">
                                <img alt="Ingredient" data-ingredient="1" className="yes" src="https://images.pexels.com/photos/16564746/pexels-photo-16564746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                                <img alt="Ingredient" data-ingredient="2" className="" src="https://images.pexels.com/photos/16564746/pexels-photo-16564746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                                <img alt="Ingredient" data-ingredient="3" className="" src="https://images.pexels.com/photos/16564746/pexels-photo-16564746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                                <img alt="Ingredient" data-ingredient="4" className="" src="https://images.pexels.com/photos/16564746/pexels-photo-16564746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                            </div>
                            <div className="ingredient-text">
                                <h2 className="">
                                    heading
                                </h2>
                                <div className="">text</div>
                            </div>
                        </div>           
                    </div>    
                </div>  
            </div>

        
                    
            {/* <div classNameName="bottom-slider slickslider" id="slider2">
                <div className="mobile-image">
                        <img alt="Ingredient" data-ingredient="1" className="yes" src="https://images.pexels.com/photos/16564746/pexels-photo-16564746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                        <img alt="Ingredient" data-ingredient="2" className="" src="https://images.pexels.com/photos/16564746/pexels-photo-16564746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                        <img alt="Ingredient" data-ingredient="3" className="" src="https://images.pexels.com/photos/16564746/pexels-photo-16564746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                        <img alt="Ingredient" data-ingredient="4" className="" src="https://images.pexels.com/photos/16564746/pexels-photo-16564746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <div>  
                        <h1>B-Complex (B1, B2, B3, B5, B6,&nbsp;B9)&nbsp;</h1>
                        <p><strong>Source:</strong> Southern India, extracted from organic Guava and Tulsi </p>
                        <p><strong>Dose:</strong> 100mg, helps convert fat, protein, and carbs into energy*  </p>
                        <p><strong>Form:</strong> Standardized to Thiamine 2.2%, Riboflavin 2%, Niacin 3.4%, Pantothenic Acid 3.8%, B6   2.2%, Folic Acid 0.07% </p>
                    </div>
                </div>         
            </div>  */}
            
        
        </div>
    </div>
  )
}

export default Banner3





