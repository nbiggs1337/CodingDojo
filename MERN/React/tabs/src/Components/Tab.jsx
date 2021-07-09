import React, { useState } from 'react';

const Tab = props => {
    const {tab, setTabs, display, setDisplay} = props;
    
    const [onDisplay, setOnDisplay] = useState("")
    
    const clickHandler = (e, content) => {
        setOnDisplay(content)
    }
    
    return (
        <div>
            <center>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {tab.map( (t, i) => 
        
                <div className='tab'>
                    <button key={i} style={{display: 'inline-block'}} onClick={ (e) => clickHandler(e, t.content) }>{t.label}</button>
                </div>
                )}
            </div>
            </center>
            <h4>{onDisplay}</h4>
        </div>
    );
}

export default Tab;