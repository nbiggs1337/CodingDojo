import axios from 'axios';
import { Link } from '@reach/router';
import React, { useState, useEffect } from 'react';

const OneProduct = (props) => {
    const [product, setProduct] = useState(null);
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [])
    
    return(
        
            
            <div>
                <Link to="/">Home</Link>
            { product ? 
            <div>
                <h1>{product.title}</h1>
                <h2>{product.price}</h2>
                <h4>{product.description}</h4>
            </div> 
            : <span> Something went wrong. </span>}
            </div>
    )
}

export default OneProduct;