import MainPage from "pages/MainPage";
import { useCallback, useState } from "react";

export default function App() {
    const getTodos = JSON.parse(localStorage.getItem("toDoData"));
    const storageTodos = getTodos === null ? [] : getTodos;
    const [todos, setTodos] = useState(storageTodos);

    const deleteTodo = useCallback(
        (deleteId) => {
            const newTodos = todos.filter((todo) => todo.id !== deleteId);
            setTodos(newTodos);
            localStorage.setItem("toDoData", JSON.stringify(newTodos));
        },
        [todos]
    );

    const doneTodo = useCallback(
        (doneId) => {
            const doneIdx = todos.findIndex((todo) => todo.id === doneId);
            const newTodos = [...todos];
            newTodos[doneIdx].isDone = todos[doneIdx].isDone ? false : true;
            setTodos(newTodos);
            localStorage.setItem("toDoData", JSON.stringify(newTodos));
        },
        [todos]
    );

    return (
        <MainPage
            todos={todos}
            setTodos={setTodos}
            deleteTodo={deleteTodo}
            doneTodo={doneTodo}
        />
    );
}
