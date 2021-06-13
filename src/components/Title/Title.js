import React, { Component } from 'react';
import './Title.scss';

class Title extends Component {
    render () {
        const { textBig, textSmall} = this.props;
        return (
            <div className="title">
                <h1 className="title__big">{textBig}</h1>
                <br/>
                <h2 className="title__small">{textSmall}</h2>
            </div>
        )
    }
}

export default Title;
