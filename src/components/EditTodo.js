import {getTodo, editTodo} from "../Services/todos-api"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const EditTodo = () =>{
    const {id} = useParams()
    const nav = useNavigate()
    const [data, setData] = useState({})

    useEffect( () => {
        getTodo(id) // getting the todo that matches this id
        .then(res => setData(res.data))
    }, [])


const editTheTodo = e => {
    e.preventDefault()
    const updatedTodo = {description: e.target.description.value, complete: e.target.complete.checked}
    editTodo(id, updatedTodo)
     .then(response =>{
        console.log(response);
        nav(`/view-todo/${id}`);
     })
     .catch(error => console.log(error));
}
 
    // if (loading) {
    //     return <h1> Loading.....</h1>
    // }
    return (
        <div>
            <form onSubmit={editTheTodo}>
                Description:<input type='text' name='description' defaultValue={data.description}/>
                Completed:<input type='checkbox' name='complete' defaultChecked={data.complete} />
                <input type='submit' />
            </form>
        </div>
      )
}

