import axios from 'axios';
import { Link } from '@reach/router';
import React, { useState, useEffect } from 'react';
import ProductForm from '../components/ProductForm';

const Main = (props) => {
    const [products, setProducts] = useState(null);
    const [loaded, setLoaded ] = useState(true);
    const [reload, setReload] = useState(0)
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setProducts(res.data)
                setLoaded(true)
            })
                .catch(err => console.log(err))
    }, [loaded, reload])
    
    const clickHandler = (productid) => {
        axios.delete(`http://localhost:8000/api/products/delete/${productid}`)
        .then(res =>console.log(res))
        setReload(reload+1);
    }
    
    return(
        <div>
            <ProductForm loaded={loaded} setLoaded={setLoaded} />
            <div className="products">
                <h1>All Products: </h1>
                {
                    loaded ?
                    products ? products.map((product, i ) => {
                        return <li key={i}> <Link to={'/'+ product._id} ><h3>{product.title}</h3></Link> <button onClick={ (e) => { clickHandler(product._id) } }>Delete</button></li>
                    })
                    : "" : null
                    
                }
                
                
            </div>
        </div>
    )
}

export default Main;