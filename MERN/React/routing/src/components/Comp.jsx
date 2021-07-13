
const Comp = props => {
    
    if ( props.a && props.b ){
        return( 
            <div>
            {!isNaN(props.input) ? <h1 style={{color: props.a, backgroundColor: props.b}}>The number is {props.input} </h1> : <h1 style={{color: props.a, backgroundColor: props.b}} >The word is {props.input}</h1>}
            </div>
        );
    } else {
        return(
        <div>
            {props.input === "Home" || props.input === "home" ? <h1>Welcome</h1> :  !isNaN(props.input) ? <h1>The number is: {props.input}</h1> : <h1>The word is: {props.input}</h1> }
            
        </div>
    );
    }
    
}

export default Comp;