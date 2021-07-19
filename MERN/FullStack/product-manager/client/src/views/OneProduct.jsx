import axios from 'axios';
import { Link, navigate } from '@reach/router';
import React, { useState, useEffect } from 'react';

const OneProduct = (props) => {
    const [product, setProduct] = useState(null);
    
    const deleteHandler = e => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/products/delete/${props.id}`);
        navigate("/");
    }
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    },[props.id])
    
    return(
        
            
            <div>
                <Link to="/">Home</Link> 
            { product ? 
            <div>
                <h1>{product.title}</h1>
                <h2>{product.price}</h2>
                <h4>{product.description}</h4>
                <br /><br />
                <div><Link to={`/${props.id}/edit`}> Edit </Link> <br />
                <form onSubmit={ deleteHandler }><button type="submit">Delete</button></form></div>
                
            </div>  
            : <span> Something went wrong. </span>}
            </div>
    )
}

export default OneProduct;