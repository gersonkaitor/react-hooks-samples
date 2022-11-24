import React, { useState, useCallback } from 'react'

function UseCallbackSample() {

    const [tasks, setTasks] = useState([])

    const addTask = useCallback(() =>{
        setTasks((prevState) => [
            ...prevState,
            'Some Task'
        ])
    },[setTasks])
  return (
    <div>
    <Button addTask={addTask}/>
    {tasks.map((task, index) =>(
        <p key={index}>{task}</p>
    ))}
    </div>
  )
}

//To memo wise/ stop re rending the button making the button a prop to higher React component function
const Button = React.memo(({addTask}) =>{
    console.log('Button rendered');
    return <div>
        <button onClick={addTask} className="btn btn-primary">Add Task</button>
    </div>
})

export default UseCallbackSample