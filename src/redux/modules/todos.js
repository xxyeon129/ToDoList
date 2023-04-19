const getTodos = JSON.parse(localStorage.getItem("toDoData"));

// 초기 상태값
const storageTodos = getTodos === null ? [] : getTodos;

// Active Value
const ADD = "ADD";

// Action Creator
export const addTodo = (payload) => {
    return {
        type: ADD,
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
        default:
            return state;
    }
};

export default todoReducer;
