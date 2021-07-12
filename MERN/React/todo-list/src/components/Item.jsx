import React, { useState } from 'react';
import List from './List';

const Item = props => {
    const {item, setItem, list, setList} = props;
    
    const SubmitHandler = e => {
        e.preventDefault();
        setList([...list,
        item]);
        setItem({...item,
            task: "",
            complete: false
        })
    }
    
    const handleChange = e => {
        setItem({
            ...item,
            [e.target.name]: e.target.value
        });
    }
    
    return(
        <div>
            <form onSubmit={SubmitHandler}>
                <h2>Add a Task</h2>
                <hr />
                <label htmlFor="task" className='form-control'>Task: </label>
                
                <input type="text" className='form-control' onChange={ handleChange } value={ item.task } name='task' />
                
                <input type="hidden" name="complete" value={0} />
                <br />
                <input type="submit" value="Add Task" />
                
                
            </form>
            
            
        </div>
    );
    
}

export default Item;