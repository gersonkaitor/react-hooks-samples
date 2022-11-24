import { useState } from 'react';
import Todo from './Todo'

function UseRefSample2() {

    const [showTodo, setShowTodo] = useState(true)
  return (
    <div>
      <h1>useRef - Memory Leak Error Fix</h1>
      <hr />
      {showTodo && <Todo/> }
      <button className="btn btn-primary" onClick={() => setShowTodo(!showTodo)}>Togggle Todo</button>
    </div>
  )
}

export default UseRefSample2
