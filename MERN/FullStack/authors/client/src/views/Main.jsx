import React, { useEffect, useState } from 'react';
import { Link } from "@reach/router";
import BasicTable from '../components/Table';
import axios from 'axios';

const Main = props => {
    const { refresher } = props;
    const { refresh } = props;
    const [authors, setAuthors] = useState([])
    
    useEffect( () => {
        axios.get("http://localhost:8000/api")
            .then(res => {
                setAuthors(res.data.results)
                console.log(res.data.results)})
            .catch(err => console.log(err))
    }, [refresh])

    return (
        <div style={{width: "70%", justifyContent: 'center', marginLeft: "15%"}}>
            <h1>All Authors</h1>
            <Link to="/add">Add a Author</Link>
            <br/>
            <BasicTable authors={authors} setAuthors={setAuthors} refresher={refresher} /> 
            
            
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width"
            />
        </div>
    );
}

export default Main;