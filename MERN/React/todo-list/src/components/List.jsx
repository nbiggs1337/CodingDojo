import React from 'react';

const List = props => {
    const {list, setList, item, setItem} = props;
    
    const completeHandler = (e, i) => {
        let task = list[i];
        task.complete = !task.complete;
        setList(
            [...list.slice(0,i), task, ...list.slice(i+1) ]
            );
    }
    
    const handleDelete = (e, i) => {
        setList(
            [...list.slice(0,i), ...list.slice(i+1) ]
            );
    }
    
    return(
        <div>
            <h1>Items To-do</h1>
            <hr />
            <table className="table table-striped">
                <tr className="table table-striped">
                    <th>Key</th>
                    <th>Task</th>
                    <th>Completed</th>
                    <td>Delete</td>
                </tr>
                {
                    list.map( ( item, i ) => 
                    
                    <tr className="table table-striped">
                        <td>{i}</td>
                        {!item.complete  ?<td>{item.task} </td> :  <td><del>{item.task}</del> </td> }
                        <td> <input type="checkbox" name="complete" checked={item.complete} onChange={ e => completeHandler(e, i) } /> </td>
                        <td><button onClick={ e => handleDelete(e, i) } >Delete</button></td>
                    </tr>
                    
                    )}
                
                
                
                
                
            </table>
            
            
        </div>
    );
    
}

export default List;