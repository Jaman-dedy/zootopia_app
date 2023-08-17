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
import Tag from 'common/Tag';

const HomeComponent = () => {
  const tags = [
    'All', 'Birds', 'Reptiles', 'Fishes', 'Amphibiens', 'Bear', 'Rodents', 
    'Alligator', 'Mollusces', 'Snakes', 'Mammals', 'Squirel', 'Hyena', 'Amodillo', 
    'Seal', 'Arthropods', 'Crododiles', 'Invertebrates', 'Jaguar', 'Hare', 'Wild cat', 'Lizard'
  ]
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
            <Tag tags={tags}/>
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

      <Footer />

    </>

  )
}

export default HomeComponent