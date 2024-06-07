
import { useState } from 'react'
import './App.css'
import ColorDemo from './components/ColorDemo'
import ShapeDemo from './components/ShapeDemo'
import SizeDemo from './components/SizeDemo'

function App() {
  const [selectedDemo, setSelectedDemo] = useState(null)

  const selectDemo = (type) =>{
    setSelectedDemo(type)
  }
 
  return (
    <>
     <h1>React Lazy load explained</h1>
     <div>
                    <button onClick={() => selectDemo("shape")}>
                        Shape Demo
                    </button>
                    <button onClick={() => selectDemo("color")}>
                        Color Demo
                    </button>
                    <button onClick={() => selectDemo("size")}>
                        Size Demo
                    </button>
                </div>
    { selectedDemo === "shape" && <ShapeDemo />}
    { selectedDemo === "color" && <ColorDemo />}
    { selectedDemo === "size" &&  <SizeDemo />}
     
    
    </>
  )
}

export default App
