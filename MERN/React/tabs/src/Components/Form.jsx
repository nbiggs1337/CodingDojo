import React from 'react';

const Form = props => {
    const {tab, setTab, display, setDisplay} = props;
    
    const handleSubmit = e => {
        e.preventDefault();
        const disp = {
            label: display.label,
            content: display.content
        };
        setTab([...tab,
        disp ]);
        setDisplay({...display,
            label: "",
            content: ""})
        
    }
    
    const handleChange = e => {
        setDisplay({...display,
        [e.target.name]: e.target.value
        })
    }
    
    return(
        
        <form onSubmit={ handleSubmit }>
            
            <h2>Create a Tab</h2>
            
            <label htmlFor="label">Tab Label: </label>
            <input type="text" name='label' onChange={ handleChange } value={display.label} />
            
            <label htmlFor="content">Tab Content: </label>
            <input type="text" name='content' onChange={ handleChange } value={display.content} />
            
            <input type="submit" value="Add Tab" />
            
        </form>
        
    );
}



export default Form;