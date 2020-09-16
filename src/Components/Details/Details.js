import React from 'react';

const Details = (props) => {
    const{name,description} = props.info
    console.log(name, description)
    return (
        <div>
            <h2>{props.name}</h2>
        </div>
    );
};

export default Details;