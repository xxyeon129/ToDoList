import ToDoForm from "components/ToDoForm";
import { useState } from "react";

function App() {
    const getTodos = JSON.parse(localStorage.getItem("toDoData"));
    const storageTodos = getTodos === null ? [] : getTodos;
    const [todos, setTodos] = useState(storageTodos);

    return (
        <div>
            To Do List
            <ToDoForm todos={todos} setTodos={setTodos} />
        </div>
    );
}

export default App;
