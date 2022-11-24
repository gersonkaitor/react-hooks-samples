import useLocalStorage from "../hooks/useLocalStorage";

function CustomHookUseLocalStorage() {
  const [task, setTask] = useLocalStorage("task",'');
  const [tasks, setTasks] = useLocalStorage('tasks',[])

    const onSubmit = (e) =>{
        e.preventDefault();

        const taskObj = {
            task,
            completed: false,
            date: new Date().toLocaleDateString()
        }

        setTasks([...tasks, taskObj])
    }

  return (
    <>

    <form onSubmit={onSubmit} className="w-50">
      <div className="mb-3">
        <label htmlFor="task" className="form-label">
          Task
        </label>
        <input
          id="task"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="form-control"
        />
      </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    {tasks.map((task) =>(
        <h3 key={task.date}>{task.task}</h3>
    ))}
    </>
  );
}

export default CustomHookUseLocalStorage;
