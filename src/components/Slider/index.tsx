import { Link } from "react-router-dom";
import {useState} from 'react';
import { Icon } from "@iconify/react/dist/iconify.js";
import { sliderProps } from "../../types";

export default function Slider(data : sliderProps){  
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = data.slides.length;
  const [showArrows, setShowArrows] = useState(data.showArrows);

const handleNextSlide = () => {
  setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
};

const handlePreviousSlide = () => {
  setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
};

  return (
    <section className={`slider`}>
        <div className={`relative flex items-center justify-center w-full overflow-hidden`}>
            {data.slides.map((slide, index) => {
              return(
                <>
                  <div className={index === currentSlide ? 'flex' : 'hidden'} key={index}>
                        <div className={`w-full relative `}>
                          <div className={`w-full`}>

                            <div className={`flex h-[500px] w-screen  max-w-full md:h-[700px] bg-cover bg-center`} style={{backgroundImage: `url(${slide.url})`}}></div>

                            {data.showLink && (
                              <div className="absolute z-5 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                                  <Link 
                                    to={slide.link}
                                    className="bg-green-500 px-8 py-4 rounded-lg shadow-lg text-white hover:bg-green-600 transition-all duration-300 ease-in-out"
                                >
                                    Saiba Mais
                                </Link>
                              </div>
                            )}
                          </div>
                        </div>

                  </div>
                </>
              )
            })}
            {data.showArrows && (
              <>
                <button 
                  onClick={handlePreviousSlide} 
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-4 rounded-full opacity-70 hover:opacity-100"
                >
                  <div className="relative w-full flex items-center justify-center">
                      <Icon icon="simple-line-icons:arrow-left" className="h-4 w-4 md:w-8 md:h-8 text-white"/>
                  </div>
                </button>

                <button 
                  onClick={handleNextSlide}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-4 rounded-full opacity-70 hover:opacity-100"
                >
                     <div className="relative w-full flex items-center justify-center">
                      <Icon icon="simple-line-icons:arrow-right" className="h-4 w-4 md:w-8 md:h-8 text-white"/>
                  </div>
                </button>
              </>
            )}
        </div>
    </section>
  )
}
