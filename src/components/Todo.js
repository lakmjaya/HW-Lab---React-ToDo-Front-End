import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTodo, deleteTodo } from "../Services/todos-api";

export default function Todo(){
    const nav = useNavigate()
    const {id} = useParams()// destructuring the id parameter for use
    const [todo, setTodo] = useState({}) // setting up our state
    useEffect(() => {
        getTodo(id) // getting the one Todo from the api using the id
        .then(res => setTodo(res.data))}, [])
        console.log(todo)
    const deleteTheTodo = ()=>{
            //delete function needs to go here
        deleteTodo(id);
            //nav back to the main screen
        nav('/')
    }

    return(
        <div>
      <h2>
        To-do:
      </h2>
        <h3>{todo.description}</h3>
       Completed:<input type='checkbox' defaultChecked={todo.complete}></input>
      <button onClick={()=>{nav(`/${id}/edit`)}}>edit</button>
      <button onClick={deleteTheTodo}>delete</button>
      <button onClick={()=>{nav('/')}}>return to main</button>
    </div>
    )
}