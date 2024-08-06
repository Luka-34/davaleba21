import CreateTodo from "../pages/createTodo";
import TodoListPage from "../pages/TodoList";

const routes = [
{    
    element: <CreateTodo />,
    path: '/create'
},
{    
    element: <TodoListPage />,
    path: '/'
}
]

export default routes