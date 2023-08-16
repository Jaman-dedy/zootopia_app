import React from 'react';
import Slider from "react-slick";

import Slide1 from 'assets/images/slide1.svg'
import Slide2 from 'assets/images/slide2.svg'
import Slide3 from 'assets/images/slide3.svg'
import LionImg from 'assets/images/lion.png'
import MonkeyImg from 'assets/images/monkey.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NavBar from 'common/NavBar';
import RightSlide from 'common/RirghtSlide';
import Card from 'common/Card';
import Footer from 'common/Footer';

const HomeComponent = () => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    customPaging: (i: any) => (
      <div className="bg-slate-900 w-3 h-3 rounded-full">
      </div>
    ),
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };
  return (
    <>
      <NavBar />
      <div className="ml-20">
        <div>
          <Slider {...settings} className="mt-10">
            <div className="">
              <div className="flex">
                <img src={Slide1} alt="" className="w-7/12" />
                <RightSlide />
              </div>

            </div>
            <div className="">
              <div className="flex">
                <img src={Slide2} alt="" className="w-7/12" />
                <RightSlide />
              </div>

            </div>
            <div className="">
              <div className="flex">
                <img src={Slide3} alt="" className="w-7/12" />
                <RightSlide />
              </div>
            </div>
          </Slider>
        </div>
        <div>
          <div className="mt-10 text-2xl mb-4">
            Categories
          </div>
          <div>
            <span className="inline-flex items-center rounded-md border-2 border-green-200 bg-green-200 px-2 py-1 text-sm font-semibold text-green-600 shadow-sm mr-2 mb-2">
              All
            </span>
            <span className="inline-flex items-center rounded-md border-2 border-green-200 bg-green-200 px-2 py-1 text-sm font-semibold text-green-600 shadow-sm mr-2">
              Birds
            </span>
            <span className="inline-flex items-center rounded-md border-2 border-green-200 bg-green-200 px-2 py-1 text-sm font-semibold text-green-600 shadow-sm mr-2">
              Reptiles
            </span>
            <span className="inline-flex items-center rounded-md border-2 border-green-200 bg-green-200 px-2 py-1 text-sm font-semibold text-green-600 shadow-sm mr-2">
              Fishes
            </span>
            <span className="inline-flex items-center rounded-md border-2 border-green-200 bg-green-200 px-2 py-1 text-sm font-semibold text-green-600 shadow-sm mr-2">
              Amphibiens
            </span>
            <span className="inline-flex items-center rounded-md border-2 border-green-200 bg-green-200 px-2 py-1 text-sm font-semibold text-green-600 shadow-sm mr-2">
              Bear
            </span>
            <span className="inline-flex items-center rounded-md border-2 border-green-200 bg-green-200 px-2 py-1 text-sm font-semibold text-green-600 shadow-sm mr-2">
              Rodents
            </span>
            <span className="inline-flex items-center rounded-md border-2 border-green-200 bg-green-200 px-2 py-1 text-sm font-semibold text-green-600 shadow-sm mr-2">
              Alligator
            </span>
            <span className="inline-flex items-center rounded-md border-2 border-green-200 bg-green-200 px-2 py-1 text-sm font-semibold text-green-600 shadow-sm mr-2">
              Mollusces
            </span>
            <span className="inline-flex items-center rounded-md border-2 border-green-200 bg-green-200 px-2 py-1 text-sm font-semibold text-green-600 shadow-sm mr-2">
              Snakes
            </span>
            <span className="inline-flex items-center rounded-md border-2 border-green-200 bg-green-200 px-2 py-1 text-sm font-semibold text-green-600 shadow-sm mr-2">
              Mammals
            </span>
            <span className="inline-flex items-center rounded-md border-2 border-green-200 bg-green-200 px-2 py-1 text-sm font-semibold text-green-600 shadow-sm mr-2">
              Squirel
            </span>
            <span className="inline-flex items-center rounded-md border-2 border-green-200 bg-green-200 px-2 py-1 text-sm font-semibold text-green-600 shadow-sm mr-2">
              Monkey
            </span>
            <span className="inline-flex items-center rounded-md border-2 border-green-200 bg-green-200 px-2 py-1 text-sm font-semibold text-green-600 shadow-sm mr-2">
              Hyena
            </span>
            <span className="inline-flex items-center rounded-md border-2 border-green-200 bg-green-200 px-2 py-1 text-sm font-semibold text-green-600 shadow-sm mr-2">
              Amodillo
            </span>
            <span className="inline-flex items-center rounded-md border-2 border-green-200 bg-green-200 px-2 py-1 text-sm font-semibold text-green-600 shadow-sm mr-2">
              Seal
            </span>
            <span className="inline-flex items-center rounded-md border-2 border-green-200 bg-green-200 px-2 py-1 text-sm font-semibold text-green-600 shadow-sm mr-2">
              Arthropods
            </span>
            <span className="inline-flex items-center rounded-md border-2 border-green-200 bg-green-200 px-2 py-1 text-sm font-semibold text-green-600 shadow-sm mr-2">
              Crododiles
            </span>
            <span className="inline-flex items-center rounded-md border-2 border-green-200 bg-green-200 px-2 py-1 text-sm font-semibold text-green-600 shadow-sm mr-2">
              Invertebrates
            </span>
            <span className="inline-flex items-center rounded-md border-2 border-green-200 bg-green-200 px-2 py-1 text-sm font-semibold text-green-600 shadow-sm mr-2">
              Jaguar
            </span>
            <span className="inline-flex items-center rounded-md border-2 border-green-200 bg-green-200 px-2 py-1 text-sm font-semibold text-green-600 shadow-sm mr-2">
              Hare
            </span>
            <span className="inline-flex items-center rounded-md border-2 border-green-200 bg-green-200 px-2 py-1 text-sm font-semibold text-green-600 shadow-sm mr-2">
              Wild cat
            </span>
            <span className="inline-flex items-center rounded-md border-2 border-green-200 bg-green-200 px-2 py-1 text-sm font-semibold text-green-600 shadow-sm mr-2">
              Lizard
            </span>
          </div>
          <div className="flex flex-wrap">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

          </div>

        </div>
      </div>
      
     <Footer/>

    </>

  )
}

export default HomeComponent