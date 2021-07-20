import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from '@reach/router';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const BasicTable = (props) => {
    const { authors, setAuthors } = props;
    const classes = useStyles();
    const { refresher } = props;
    
    const deleteHandler = (id) => [
        axios.delete(`http://localhost:8000/api/${id}`)
            .then(res => refresher())
            .catch(err => console.log(err))
    ]
    
    
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell><b>Author Name</b></TableCell> 
                        <TableCell align="right"><b>Edit</b></TableCell>
                        <TableCell align="right"><b>Delete</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {authors ? authors.map((row, i) => (
                        <TableRow key={i}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right"> <Link to={"/edit/" + row._id} > Edit</Link> </TableCell>
                            <TableCell align="right"> <button onClick={(e) => deleteHandler(row._id)}>Delete</button></TableCell>
                        </TableRow>
                    )) : "" } 
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default BasicTable;