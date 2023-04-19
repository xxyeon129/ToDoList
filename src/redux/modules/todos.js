const getTodos = JSON.parse(localStorage.getItem("toDoData"));

// 초기 상태값
const storageTodos = getTodos === null ? [] : getTodos;

// Active Value
const ADD = "ADD";
const DELETE = "DELETE";

// Action Creator
export const addTodo = (payload) => {
    return {
        type: ADD,
        payload,
    };
};

export const deleteTodo = (payload) => {
    return {
        type: DELETE,
        payload,
    };
};

// Reducer
const todoReducer = (state = storageTodos, action) => {
    switch (action.type) {
        case ADD:
            localStorage.setItem(
                "toDoData",
                JSON.stringify([...state, action.payload])
            );
            return [...state, action.payload];
        case DELETE:
            localStorage.setItem("toDoData", JSON.stringify(action.payload));
            return action.payload;
        default:
            return state;
    }
};

export default todoReducer;
