import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = props => {
    const {loaded, setLoaded} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0.0);
    const [description, setDescription] = useState("");
    
    const SubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products/new", {
            title,
            price,
            description
        })
            .then(res => {
                setLoaded(!loaded)
                console.log(res)
            })
            
            .catch(err => console.log(err));
        
        setTitle("");
        setPrice(0.0);
        setDescription("");
    }
    
    return(
        <form onSubmit={ SubmitHandler }>
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
            
            <input type="submit" value="Add Product" />
            
        </form>
    );
}
export default ProductForm;

