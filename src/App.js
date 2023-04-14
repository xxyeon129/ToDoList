import ToDoBlock from "components/ToDoBlock";
import ToDoForm from "components/ToDoForm";
import { useState } from "react";

function App() {
    const getTodos = JSON.parse(localStorage.getItem("toDoData"));
    const storageTodos = getTodos === null ? [] : getTodos;
    const [todos, setTodos] = useState(storageTodos);

    return (
        <div>
            <h3>To Do List</h3>
            <span>React</span>
            <div>
                <ToDoForm todos={todos} setTodos={setTodos} />
            </div>
            <div>
                <div>
                    <h2>🔥 Working</h2>
                    {todos
                        .filter((todo) => todo.done === false)
                        .map((todo, key) => (
                            <ToDoBlock todo={todo} key={key} />
                        ))}
                </div>
                <div>
                    <h2>🎉 Done</h2>
                    {todos
                        .filter((todo) => todo.done === true)
                        .map((todo, key) => (
                            <ToDoBlock todo={todo} key={key} />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default App;
