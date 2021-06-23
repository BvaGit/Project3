import React from 'react';
import ReactDOM from 'react-dom';

class Portal extends React.Component{
    render() {
        console.log(this.props.children);
        return ReactDOM.createPortal(this.props.children, document.getElementById('portal'))
    }
}

export default Portal;
