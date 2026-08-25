import React, { useState } from 'react';

export default  function Count() {
    const [counter,setCounter] = useState(0);
    const button = React.createElement("button",()=> setCounter(counter+1),"Increase");
    const button2 = React.createElement("button",()=> setCounter(counter-1),"Decrease");
return (
    <>
    <p>Count: {counter}</p>
    {button}
    &nbsp;&nbsp;
    {button2}
    <p>Final Count: {counter}ß</p>
    </>
)
}