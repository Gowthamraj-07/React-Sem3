import { useState } from 'react';
import '../styles/listDemo.css';

export default function List() {

    const [listItems,setList] = useState(['type the task inside the input area','click add button to add']);
    const [task,setTask] = useState('');

    const handleClick = () => {
        if(task === '')
        {
            alert('Don\'t leave the fields empty');
        }
        setList([...listItems,task]);
        setTask('');
    }

    return (
      <div className="app">
        <h1>Todo List</h1>

        
          <label>
            New Task :
            <input
              type="text"
              value={task}
              onChange={(event) => {
                setTask(event.target.value)
              }}
              placeholder='Enter Your Task'
            />
          </label>
          <button onClick={handleClick}>Add the Task</button>

          <hr />
       

        <div className='Yourtasks'>
          <h3>Your Tasks : </h3>
          <ul>
            {listItems.map((tasks,id) => (
                <li key={id}>↪ {tasks}</li>
            ))}
          </ul>
        </div>
      </div>
    )
}