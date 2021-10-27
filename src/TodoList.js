import React from 'react'
import {Button, Tooltip} from 'antd'
const TodoList = ({todos, deleteHandler }) => {
    return (
        <div>
            {todos.map((ele, index) => <div key={index}><Tooltip title={ele}><h3>{ele}&nbsp; <Button type="primary" danger onClick={() => deleteHandler(index)}>Delete</Button></h3> </Tooltip></div> )}
        </div>
    )
}

export default TodoList
