import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate, Redirect } from '@reach/router';


const EditProduct = props => {
    const { id } = props;
    const [product, setProduct] = useState(null);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0.0);
    const [description, setDescription] = useState("");
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {console.log(res.data)
                setProduct(res.data)
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)})
    },[])
    
    
    
    
    const SubmitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/update/${id}`, {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        
        setTitle("");
        setPrice(0.0);
        setDescription("");
        navigate("/")
    }
    
    return(
        <form onSubmit={ SubmitHandler }>
            <Link to="/"> Home </Link>
            <p>
                <label name="title">Title: </label>
                <input type="text" onChange={ (e) => setTitle(e.target.value)} value={title} />
            </p>
            
            <p>
                <label name="Price">Price: </label>
                <input type="price" onChange={ (e) => setPrice(e.target.value)} value={price} />
            </p>
            
            <p>
                <label name="Description">Description: </label>
                <input type="text" onChange={ (e) => setDescription(e.target.value)} value={description} />
            </p>
            
            <input type="submit" value="Update Product" />
            
        </form>
    );
}
export default EditProduct;

