import React from 'react';

const UserForm = (props) => {
    const {inputs, setInputs} = props;


    // const createUser = (e) => {
    //     e.preventDefault();
    //     // const newUser = { firstName, lastName, email, password, confirm };
    //     console.log("Welcome ", newUser);
    // };
    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        })
    }


    return (
        <>
        <form>
            <div className="formgroup">
                <label htmlFor="firstName">First Name: </label>
                <input name="firstName" type="text" onChange={ onChange } value={inputs.firstName}/> <br />
                {inputs.firstName.length < 2 && inputs.firstName.length !== 0 ? <small style={{ color: 'red' }}>First Name must be at least 2 characters!</small> : <span></span> }
                
            </div>
            <div className="formgroup">
                <label htmlFor="lastName">Last Name: </label>
                <input name="lastName"type="text" onChange={ onChange } value={inputs.lastName} /> <br />
                {inputs.lastName.length < 2 && inputs.lastName.length !== 0 ? <small style={{ color: 'red' }}>Last Name must be at least 2 characters!</small> : <span></span> }
            </div>
            
            <div className="formgroup">
                <label htmlFor="email">Email: </label>
                <input name="email" type="text" onChange={ onChange } value={inputs.email} /> <br />
                {inputs.email.length < 4 && inputs.email.length !== 0 ? <small style={{ color: 'red' }}>Email must be at least 4 characters!</small> : <span></span> }
            </div>
            <div className="formgroup">
                <label htmlFor="password">Password: </label>
                <input name="password" type="password" onChange={ onChange }  value={inputs.password}/> <br />
                { inputs.password.length < 8 && inputs.password.length !== 0 ? <small style={{ color: 'red' }}>Password must be at least 8 characters!</small> : <span></span> }
                { inputs.password.length < 8 && inputs.password !== inputs.confirmPassword ? <br /> : <span></span> }
                { inputs.password !== inputs.confirmPassword && inputs.password.length !== 0 ? <small style={{ color: 'red' }}>Passwords do not match. </small> : <span></span> }
            </div>
            <div className="formgroup">
                <label >Confirm Password: </label>
                <input name="confirmPassword" type="password" onChange={ onChange } value={inputs.confirmPassword} /> <br />
                { inputs.password !== inputs.confirmPassword && inputs.confirmPassword.length !== 0 ? <small style={{ color: 'red' }}>Passwords do not match. </small> : <span></span> }
            </div>
            <div className="formgroup">
                <input className="btn" type="submit" value="Create User" />
            </div>
            
            
        </form>
        </>
    );
};

export default UserForm;