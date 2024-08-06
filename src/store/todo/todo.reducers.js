// todoReducer.js
const initialState = {
    todoList: [],
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                todoList: [...state.todoList, { id: Date.now(), text: action.payload, done: false }],
            };
        case 'DONE_TODO':
            return {
                ...state,
                todoList: state.todoList.map(todo =>
                    todo.id === action.payload ? { ...todo, done: true } : todo
                ),
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todoList: state.todoList.filter(todo => todo.id !== action.payload),
            };
        default:
            return state;
    }
};
