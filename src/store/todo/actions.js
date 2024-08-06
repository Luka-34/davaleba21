export const addTodoAction = (payload) => ({
    type: 'ADD_TODO',
    payload,
});

export const doneTodoAction = (todoID) => ({
    type: 'DONE_TODO',
    payload: todoID,
});

export const deleteTodoAction = (todoID) => ({
    type: 'DELETE_TODO',
    payload: todoID,
});