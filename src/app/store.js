import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/Todo/todoSlice';

const rootReducer = {
    todos: todoReducer,
}

const store = configureStore({
    reducer: rootReducer,
});

export default store;