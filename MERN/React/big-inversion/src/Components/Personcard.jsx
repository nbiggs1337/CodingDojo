import { div } from 'prelude-ls';
import React from 'react';

const PersonCard = props => {
    return(
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: {props.age }</p>
            <p>Hair Color: {props.hair }</p>
        </div>
    );
}

export default PersonCard;