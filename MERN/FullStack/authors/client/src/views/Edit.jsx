import React, { useEffect, useState } from 'react';
import { FormHelperText, InputLabel } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { navigate } from '@reach/router';


const Edit = props => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState(null)
    const { id } = props;
    const { refresher } = props;
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/${id}`)
        .then(res => setName(res.data.results.name))
        .catch(err => console.log(err))
    }, [] )
    
    
    const submitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/${id}`, { name })
            .then( res => { if ( res.data.error ){
                setErrors(res.data.error.errors)
            } else {
                console.log(res)
                refresher();
                navigate("/");
            }
                })
            .catch(err => console.log(err))
    }
    
    

    return (
        <div>
            <h1>Edit a Author</h1>
            
            <form onSubmit={ submitHandler } component={Paper} style={{padding: "20px", backgroundColor: 'whitesmoke'}}>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                
                <input id="my-input" aria-describedby="my-helper-text" onChange={ (e) => { setName(e.target.value) } } value={name} />
                
                {errors ? <FormHelperText id="my-helper-text" style={{display: "flex", justifyContent: 'center'}} > {errors.name.message} </FormHelperText> 
                    : <FormHelperText id="my-helper-text" style={{display: "flex", justifyContent: 'center'}}> Please use authors full name.  </FormHelperText>}
                <br />
                
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Edit;