import React, {useEffect} from 'react';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { InitialState } from 'types'
import fetchAttributes from 'redux/actions/attributes/fetchAttributes';

import HomeComponent from 'components/Home'

const typedUseSelectorHook: TypedUseSelectorHook<InitialState> = useSelector;


const HomeConatiner = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        attributes: { attributes: attributesState }
      } = typedUseSelectorHook(({ attributes }) => ({
        attributes
      }))

    const handleFetchAttributes = (name: string) => {
        fetchAttributes(name)(dispatch)
       
    }

    console.log('attributesState :>> ', attributesState);

    useEffect(() => {
      if(Array.isArray(attributesState.data) && attributesState.data.length > 0){
        navigate('/details', {state: {attributesState}})
      }
    }, [attributesState.data])

    return (
        <HomeComponent handleFetchAttributes={handleFetchAttributes}/>
    )
}

export default HomeConatiner