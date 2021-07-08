import React from 'react';

const Results = props => {
    const {data} = props;
    return(
        <div>
            <br />
            <hr/>
            <br />
                <h2>Super Security Check: Make sure we have it all correct!</h2>
                <h3>First Name: {data.firstName}</h3>
                <h3>Last Name : {data.lastName}</h3>
                <h3>Email Address: {data.email}</h3>
                <h3>Password: {data.password}</h3>
                <h3>Confirm Password: {data.confirmPassword}</h3>
            </div>
    );
    
}

export default Results;