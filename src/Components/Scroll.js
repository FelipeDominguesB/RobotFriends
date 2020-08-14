import React from 'react';

const Scroll = (properties) =>
{
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '500px' }}>
            {properties.children}
        </div>

    );
};


export default Scroll;

