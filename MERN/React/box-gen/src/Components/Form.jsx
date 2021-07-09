import React from 'react';

const Form = props => { 
    const {box, setBox, colors, setColors} = props; //init-ing props passed from App page - which passes down access to state
    
    const handleSubmit = e => { //handing submit 
        e.preventDefault(); //preventing default redirect on submit 
        const boxStyle = {      // creates object to plug into style 
            backgroundColor : box.color, //pulling & setting values from BOX state, as it updates ( from handleChange ln: 17)
            height: `${box.hw}px`,
            width: `${box.hw}px`
        } 
        setColors([...colors, boxStyle ]) //spreading colors EXISTING values, adding state object BOX to colors state (from line 28)
        setBox({...box, ////reseting box to "" blank - ...Opening box - 
            color: "", //finding keys that match - setting to these value
            hw: ""
            
        }) 
        
    }
    const handleChange = e => { // change handler is needed bc updating multiple values in object rather than setting one basic datatype value in state 
        setBox({...box,         //spreads existing boxes...
            [e.target.name]: e.target.value //sets all form inputs/targets to their value == inputs name matches box state props == works
        })
    }
    
    return(
        <div className="input">
            <h3>Add a Box</h3>
            <hr />
            <div className="form">
                <form onSubmit={handleSubmit}>  
                {/* ^^^ forms need onSubmit to handle submit  */}
                    <label htmlFor="color">
                    <h4>Color: </h4></label> 
                    
                    <input name="color" type="text" onChange={handleChange} value={box.color} /> 
                    {/* updating box state on changes (line 17-20)  ^^        ^^^ pulling from state to display changes in input value  */}
                    
                    <label htmlFor="hw"> <h4>Height / Width: </h4></label>
                    
                    <input name="hw" type="text" onChange={handleChange} value={box.hw}/>
                    
                    <input type="submit" value="Add" /> 
                    </form>
            </div>
            
        </div>
        
    );
}

export default Form;