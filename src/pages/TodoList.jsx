import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { doneTodoAction, deleteTodoAction } from "../store/todo/actions";

const TodoListPage = () => {
    const { todoList } = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const markDone = (todoId) => {
        dispatch(doneTodoAction(todoId));
    };

    const deleteTodo = (todoId) => {
        dispatch(deleteTodoAction(todoId));
    };

    return (
        <div>
            <h2>Todo List</h2>
            {todoList.map((item) => (
                <div key={item.id}>
                    <span style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
                        {item.text}
                    </span>
                    {!item.done && (
                        <button onClick={() => markDone(item.id)}>Done</button>
                    )}
                    <button onClick={() => deleteTodo(item.id)}>Delete</button>
                </div>
            ))}
            <Link to={'/create'}>To create</Link>
        </div>
    );
};

export default TodoListPage;
