import React from 'react';

import PaonImg from 'assets/images/paon.svg'

import NavBar from 'common/NavBar';
import Footer from 'common/Footer';

import CardRatings from 'common/CardRatings';
import ItemComponent from 'common/Item';


const Favourites = () => {
    return (
        <>
            <NavBar />
            <div className="pl-20">
                <div className="text-2xl font-semibold text-center mb-7">Reveiws and ratings</div>
                <div className="flex">
                    <CardRatings />
                    <CardRatings />
                    <CardRatings />
                </div>
                <div className="text-2xl font-semibold text-center mb-7 mt-10">My Ratings</div>
                <div>
                    <ItemComponent />
                    <ItemComponent />
                    <ItemComponent />
                    <ItemComponent />
                    <ItemComponent />
                    <ItemComponent />
                    <ItemComponent />
                    <ItemComponent />
                </div>

            </div>

            <Footer />
        </>

    )
}

export default Favourites