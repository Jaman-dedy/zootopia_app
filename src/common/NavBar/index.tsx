import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {clearAction} from 'redux/actions/attributes/fetchAttributes'
import Logo from 'assets/images/logo.png'


const NavBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogoClicked = () => {
        clearAction(dispatch)
        navigate('/')
    }
    return (
        <div className="flex justify-between pt-10 px-20">
            <div className="w-28 cursor-pointer" onClick={handleLogoClicked}>
                <img src={Logo} alt="logo" />
            </div>
            <div className="flex justify-between w-1/2">
                <div className="cursor-pointer">Animals</div>
                <div className="cursor-pointer" onClick={() => navigate('/my-ratings')}>My Ratings</div>
                <div className="cursor-pointer" onClick={() => navigate('/my-favourites')}>My favorites</div>
                <div className="cursor-pointer">About us</div>
            </div>
            <div className="flex">
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold mr-3 py-2 px-4 border border-gray-400 rounded shadow">
                    Get in touch
                </button>

                <button className="bg-zinc-700 hover:bg-zinc-900 text-white font-bold py-2 px-4 rounded">
                    Create an account
                </button>
            </div>

        </div>
    )
}

export default NavBar