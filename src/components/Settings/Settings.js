import React from 'react';

import CustomModal from '../CustomModal';
import ModalSettings from '../ModalSettings/ModalSettings';

import './settings.scss'

class Settings extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show: false
        }
    }

    showModal=()=>{
        this.setState ({
            show: this.state.show == false ? true : false
        })
    }

    render(){
        return <div>
                    <img onClick={this.showModal} className="rooms-header__settings" src="../../../public/assets/images/seting_2.png"/>
                    {this.state.show ? <CustomModal header="Settings" handlecloseModal={this.showModal} content={<ModalSettings closeModal={this.showModal}/>}/> : null}
                </div>
    }
}

export default Settings