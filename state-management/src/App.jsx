import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  //destructuring
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>increase</button>
        <button onClick={() => setCount(count - 1)}>decrease</button>

        <div className="App" style={{padding: "50px", textAlign: "center"}}>

          <h1>
            
            React Popup Example
          </h1>

          <button onClick={() => setIsOpen(true)}>
           Open Popup
            </button>
            
       <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <h2>
              Hello from the pop-out!
            </h2>
            <p>This is a dynamic content area for the popup.</p>
          </Popup>
          </div>
        </div>
        </>
  )
}

export default App
