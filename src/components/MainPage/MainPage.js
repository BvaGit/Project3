import React from 'react';

import RoomsHeader from '../RoomsHeader'
import Rooms from '../Rooms'
import AddRoom from '../AddRoom';

import './mainPaige.scss'

const MainPage = () => (
    <div>
        <header className="header">
            <img className="header__logo" src="/assets/images/hate.png"/>
            <h1 className="header__appName">Blabber</h1>
        </header>
        <div className="rooms__box">
            <RoomsHeader />
            <Rooms />
            <AddRoom />
        </div>
    </div> 
)

export default MainPage