import React from 'react';
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';

import LionImg from 'assets/images/lion.png'
import crapeau from 'assets/images/home/crapeau.svg'
import lezard from 'assets/images/home/lezard.svg'
import peroque from 'assets/images/home/peroque.svg'
import tiger from 'assets/images/home/tiger.svg'
import tiger1 from 'assets/images/home/tiger1.svg'
import bear from 'assets/images/home/bear.svg'
import birds from 'assets/images/home/birds.svg'
import lezard2 from 'assets/images/home/lezard2.svg'
import paon from 'assets/images/home/paon.svg'
import porc from 'assets/images/home/porc.svg'
import squirel from 'assets/images/home/squirel.svg'
import hibou from 'assets/images/home/hibou.svg'

import Slide1 from 'assets/images/slide1.svg'
import Slide2 from 'assets/images/slide2.svg'
import Slide3 from 'assets/images/slide3.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NavBar from 'common/NavBar';
import RightSlide from 'common/RirghtSlide';
import Card from 'common/Card';
import Footer from 'common/Footer';
import Tag from 'common/Tag';


type Props = {
  handleFetchAttributes: (args: string) => void
}

const HomeComponent = ({handleFetchAttributes}: Props) => {
  const navigate = useNavigate();
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
        <div className="">
          <Slider {...settings} className="mt-10">
            <div className="">
              <div className="flex">
                <img  onClick={() => navigate('/details')} src={Slide1} alt="" className="w-7/12 cursor-pointer" />
                <RightSlide  />
              </div>

            </div>
            <div className="">
              <div className="flex">
                <img  onClick={() => navigate('/details')} src={Slide2} alt="" className="w-7/12 cursor-pointer" />
                <RightSlide />
              </div>

            </div>
            <div className="">
              <div className="flex">
                <img  onClick={() => navigate('/details')} src={Slide3} alt="" className="w-7/12 cursor-pointer" />
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
            <Card img={LionImg} name="lion" onClick={handleFetchAttributes} />
            <Card img={crapeau} name="toad" onClick={handleFetchAttributes} /> 
            <Card img={lezard} name="lizard" onClick={handleFetchAttributes} />
            <Card img={peroque} name="parrot" onClick={handleFetchAttributes} />
            <Card img={tiger} name="cheetah" onClick={handleFetchAttributes} />
            <Card img={tiger1} name="tiger" onClick={handleFetchAttributes} />
            <Card img={bear} name="bear" onClick={handleFetchAttributes} />
            <Card img={birds} name="bird" onClick={handleFetchAttributes} />
            <Card img={paon} name="peacock" onClick={handleFetchAttributes} />
            <Card img={porc} name="porc" onClick={handleFetchAttributes} />
            <Card img={squirel} name="squirrel" onClick={handleFetchAttributes} />
            <Card img={hibou} name="owl" onClick={handleFetchAttributes} />
          </div>

        </div>
      </div>

      <Footer />

    </>

  )
}

export default HomeComponent