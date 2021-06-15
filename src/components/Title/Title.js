import React from 'react';
import './Title.scss';

const Title = (props) => {
    const { textBig, textSmall} = props;
        return (
            <div className="title">
                <h1 className="title__big">{textBig}</h1>
                <br/>
                <h2 className="title__small">{textSmall}</h2>
            </div>
        )
}

export default Title;
