import ToDoBlock from "components/ToDoBlock";
import ToDoForm from "components/ToDoForm";
import { useCallback, useState } from "react";

function App() {
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
                        .filter((todo) => todo.isDone === false)
                        .map((todo, key) => (
                            <ToDoBlock
                                todo={todo}
                                key={key}
                                deleteTodo={deleteTodo}
                                doneTodo={doneTodo}
                            />
                        ))}
                </div>
                <div>
                    <h2>🎉 Done</h2>
                    {todos
                        .filter((todo) => todo.isDone === true)
                        .map((todo, key) => (
                            <ToDoBlock
                                todo={todo}
                                key={key}
                                deleteTodo={deleteTodo}
                                doneTodo={doneTodo}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default App;
