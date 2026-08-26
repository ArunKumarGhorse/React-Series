import { useState } from 'react'

function App() {
  const [color, setColor] = useState('lightgray')

  return (
    <div className="App" style={{ backgroundColor: color, height: '100vh' }}>
   <div className="fixed bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 rounded-md bg-gray/50 p-2.5">

        <button onClick={() => setColor('red')} className="px-4 py-2 rounded-full text-black bg-red-500" style={{ backgroundColor: 'red' }}>red</button>
        <button onClick={() => setColor('white')} className="px-4 py-2 rounded-full text-black bg-black" style={{ backgroundColor: 'white' }}>white</button>
        <button onClick={() => setColor('orange')} className=' outline-none px-4 py-1  rounded-full text-black shadow-lg gap-10px' style={{ backgroundColor: 'orange' }}>orange</button>
        <button onClick={() => setColor('green')} className='outline-none px-4 py-1  rounded-full text-black shadow-lg gap-10px' style={{ backgroundColor: 'green' }}>green</button>
        <button onClick={() => setColor('blue')} className='outline-none px-4 py-1  rounded-full text-black shadow-lg gap-10px' style={{ backgroundColor: 'blue' }}>blue</button>
        <button onClick={() => setColor('pink')} className='outline-none px-4 py-1  rounded-full text-black shadow-lg gap-10px' style={{ backgroundColor: 'pink' }}>pink</button>

      </div>
    </div>

  )
}

export default App
