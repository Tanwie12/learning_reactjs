import React from "react";

function FunctionClick(){
    var text="Click";
    function clickHandler(){
        text="Click me!";
        console.log(text);
        

    }
   
        return(

            <div>
                   <p>{text}</p>
<button onClick={clickHandler} >click</button>
            </div>
        )
    
}
export default FunctionClick;