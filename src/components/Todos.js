import { getTodos } from "../Services/todos-api"
import { useState, useEffect } from "react"
import Create from "./CreateTodo"


export default function Todos() {
    const [todos, setTodos] = useState([])
    useEffect( () => {
        getTodos() // calling the function to get the data
        .then( res => setTodos(res.data))
    }, [])
    console.log(todos)
    return(
        <div className='todo'>
            <h1>ToDo List</h1>
            <div className='create-form'>
                <Create />
            </div>
            <ul className='list'>
            {todos.map((todo) =>{
                return (
                    <li><a href={`/${todo._id}`}>{todo.description}</a></li>
                )
            })}
          </ul>
        </div>
    )
}