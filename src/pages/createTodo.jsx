import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodoAction,} from "../store/todo/actions"
import { Link } from "react-router-dom"

const CreateTodo = () => {
    const dispatch = useDispatch()
    const [value, setVAlue] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(addTodoAction(value))
        setVAlue('')
    }

    return <form onSubmit={onSubmit}>
        <input type="text" value={value}  onChange={e => setVAlue(e.target.value)}/>
        <button>Submit</button>

        <Link to={'/'} >To List</Link>
    </form>
}

export default CreateTodo