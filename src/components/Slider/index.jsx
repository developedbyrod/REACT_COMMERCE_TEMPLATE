import { Link } from "react-router-dom";
import {useState} from 'react';
import { Icon } from "@iconify/react/dist/iconify.js";
const sliderData = {
  slides: [
    {
      url:"https://plus.unsplash.com/premium_photo-1669239112427-bfbc84fcd74c?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link:"https://www.google.com",
    },
    {
      url:"https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link:"https://www.google.com",
    },
    {
      url:"https://plus.unsplash.com/premium_photo-1676139292819-5566666a42cb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link:"https://www.google.com",
    },
    {
      url:"https://images.unsplash.com/photo-1704192257598-be5cb6e710e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link:"https://www.google.com",
    },
  ],
  autoPlay: true,
  interval: 5000,
  showArrows: true,
  showDots: true,
  showLink: false,
  width: 'full',
  height: '700px'
}


export default function Slider({data = sliderData}){  
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = data.slides.length;
  const [showArrows, setShowArrows] = useState(data.showArrows);
  const [showLink, setShowLink] = useState(data.showLink);

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

                            <div className={`flex w-screen  max-w-full h-[${data.height}] bg-cover bg-center`} style={{backgroundImage: `url(${slide.url})`}}></div>

                            {showLink && (
                              <div className="absolute z-5 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                                  <Link to={slide.link}>Saiba Mais</Link>
                              </div>
                            )}
                              {/* <img src={slide.url} alt="Carrousel Image" className="" /> */}
                          </div>
                        </div>

                  </div>
                </>
              )
            })}
            {showArrows && (
              <>
                <button 
                  onClick={handlePreviousSlide} 
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-4 rounded-full opacity-70 hover:opacity-100"
                >
                  <div className="relative w-full flex items-center justify-center">
                      <Icon icon="simple-line-icons:arrow-left" className="w-12 h-12 text-white"/>
                  </div>
                </button>

                <button 
                  onClick={handleNextSlide}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-4 rounded-full opacity-70 hover:opacity-100"
                >
                     <div className="relative w-full flex items-center justify-center">
                      <Icon icon="simple-line-icons:arrow-right" className="w-12 h-12 text-white"/>
                  </div>
                </button>
              </>
            )}
        </div>
    </section>
  )
}
