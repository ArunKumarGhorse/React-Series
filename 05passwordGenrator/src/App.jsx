import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charactersAllowed, setCharactersAllowed] = useState(false)
  const [password, setPassword] = useState('')

  // useRef Hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (numberAllowed) str += "1234567890"
    if (charactersAllowed) str += "!@#$%^&*()_+"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charactersAllowed])

  const copyPassToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 99)

    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charactersAllowed, passwordGenerator])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 my-8 text-white text-center bg-gray-700">
      Password Generator

      {/* Password input */}
      <div className="flex shadow rounded-lg overflow-hidden my-3 bg-white">
        <input
          className="outline-none w-full px-3 py-1 text-orange-500"
          type="text"
          value={password}
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />

        <button className="outline-none bg-blue-700 text-white px-3 py-1"
        onClick={copyPassToClipboard}>
          Copy
        </button>
      </div>

      {/* Controls */}
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min="8"
            max="100"
            value={length}
            onChange={(e) => setLength((e.target.value))}
          />

          <label>Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={(e) => setNumberAllowed(prev => !prev)}
          />

          <label> Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charactersAllowed}
            onChange={(e) => setCharactersAllowed(prev => !prev)}
          />

          <label> Characters</label>
        </div>

      </div>
    </div>
  )
}

export default App