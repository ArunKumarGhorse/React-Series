import React,{ useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const button = React.createElement('button', { onClick: () => setCount(count + 1) }, "Increment")
  const button2 = React.createElement('button', { onClick: () => setCount(count - 1) }, "Decrement")
  
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
