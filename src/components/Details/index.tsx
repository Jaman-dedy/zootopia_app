import React from 'react';
import {useLocation} from 'react-router-dom';

import NavBar from 'common/NavBar';
import Footer from 'common/Footer';

import PaonImg from 'assets/images/details/paon.svg'

import CardDetail from 'common/CardDetail';
import TableComponent from 'common/Table'


const Details = ({route} :any) => {
    const location = useLocation();
    const data = location.state?.attributesState?.data
    return (
        <>
            <NavBar />
            <div className="pl-20">
                <div className="text-2xl font-semibold text-center mb-7 mt-7">Details</div>
                <div className="flex justify-center">
                    <CardDetail/>
                </div>
                <div className="text-2xl font-semibold text-center mb-7 mt-7">Attributes</div>
                <div className="flex justify-center">
                    <div className="shadow-md w-11/12">
                        <TableComponent data={data}/>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Details