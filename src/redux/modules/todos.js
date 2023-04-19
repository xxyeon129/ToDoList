const getTodos = JSON.parse(localStorage.getItem("toDoData"));

// 초기 상태값
const storageTodos = getTodos === null ? [] : getTodos;

// Reducer
const todoReducer = (state = storageTodos, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default todoReducer;
