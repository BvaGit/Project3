import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import RoomsHeader from '../RoomsHeader'
import Rooms from '../Rooms'
import AddRoom from '../AddRoom';
import { addToken } from '../../store/users/asyncActions'

import './mainPaige.scss'

const MainPage = () => {

   const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addToken());
    }, []);

    return (
        <div>
        <header className="header">
            <img className="header__logo" src="../../../public/assets/images/logo.png"/>
            <h1 className="header__appName">Blabber</h1>
        </header>
        <div className="rooms__box">
            <RoomsHeader />
            <Rooms />
            <AddRoom />
        </div>
        </div> 
    )
}

export default MainPage
