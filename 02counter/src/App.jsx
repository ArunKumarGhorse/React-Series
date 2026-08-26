import React,{ useState } from 'react'
// Increment and Decrement the counter by 2 on each click of the button
function App() {
  const [count, setCount] = useState(0)
  function Increment(){
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
  }
  function Decrement(){
    setCount(prevCount => prevCount - 1)
    setCount(prevCount => prevCount - 1)
  }
  const button = React.createElement('button', { onClick:Increment}, "Increment")
  const button2 = React.createElement('button', { onClick: Decrement}, "Decrement")
  
  return(
    <>
    <p>Counter App</p>
    <p>Count: {count}</p>
      {button}
      {button2}
    </>
  )
}

export default App
