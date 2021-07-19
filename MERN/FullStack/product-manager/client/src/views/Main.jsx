import axios from 'axios';
import { Link } from '@reach/router';
import React, { useState, useEffect } from 'react';
import ProductForm from '../components/ProductForm';

const Main = (props) => {
    const [products, setProducts] = useState(null);
    const [loaded, setLoaded ] = useState(true);
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setProducts(res.data)
                setLoaded(true)
            })
                .catch(err => console.log(err))
    }, [loaded])
    
    return(
        <div>
            <ProductForm loaded={loaded} setLoaded={setLoaded} />
            <div className="products">
                <h1>All Products: </h1>
                {
                    loaded ?
                    products ? products.map((product, i ) => {
                        return <li key={i}> <Link to={'/'+ product._id} >{product.title}</Link></li>
                    })
                    : "" : null
                    
                }
                
                
            </div>
        </div>
    )
}

export default Main;