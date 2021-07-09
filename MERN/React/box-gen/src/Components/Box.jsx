import React from 'react';

const Box = props => {
    const {colors} = props //deconstructing props {exact names from app.js?} - colors so props can be refered to directly rather than props.colors
    
    const BoxList = ["red", "blue"]; //Irrelevent - added to see display functions
    return (
        <div className="boxes">
            { BoxList.map( (c, i) => // c is index name, i is key and is needed!
            
            <div className="box" key={i} style={{backgroundColor:  c  }} ></div>
            
            )}
            
            { colors.map( (c, i) => 
            // ^^maps state objects with c as value, i as index
            <div className="box" key={i} style={c} ></div>
            //                                 ^^ sets style bc state BOX is preconstructed object of style from form.jsx 8-12
            )}
            
            
        </div>
    );
    
    
}

export default Box;