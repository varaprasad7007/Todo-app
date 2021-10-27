import React,{useState} from 'react';
import './App.less';
import { Card,Input } from 'antd'; 
import Todolist from './TodoList'

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([])
  const changeHandler = e => {
    setTask(e.target.value)
  }
  const submitHandle = e => {
    e.preventDefault();
    const newTodos = [...todos, task]
    setTodos(newTodos)
    setTask("")
    console.log(task)
  }
  const deleteHandler = (indexvalue) => {
    const TodoIndex = todos.filter((todo, index) => index !== indexvalue);
    setTodos(TodoIndex)
    console.log("rinnng")
  }
  return (
    <div className="App">
      <div className="card-comp"> 
      <Card title="Todo Management" style={{ width: 500 }}>
      <form onSubmit={submitHandle}>
        <Input type="text" placeholder="add here" value={task}  allowClear onChange={changeHandler} />&nbsp;&nbsp; 
        <div className="addItem">
        <Input type="submit" name="add" value="add" />

        </div>
          </form> 
<Todolist todos={todos} deleteHandler={deleteHandler}/>

    </Card>
    
      </div>
      
    </div>
  );
}

export default App;
