import { createSlice } from "@reduxjs/toolkit";

let nextTodoId = 0

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({ id: nextTodoId++, title: action.payload.title, status: 'new' })
        },
        toggleTodo(state, action) {
            let todoIndex = state.findIndex(todo => todo.id === action.payload.id);

            if (todoIndex >= 0) {
                state[todoIndex] = action.payload;
                state[todoIndex].status === 'new' ? state[todoIndex].status = 'completed' : state[todoIndex].status = 'new';
            }
        }
    }
});

const { actions, reducer } = todoSlice;
export const { addTodo, toggleTodo } = actions;
export default reducer;
