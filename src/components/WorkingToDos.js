import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";
import * as Style from "components/PageStyle";

export default function WorkingToDos() {
    // Redux To Do State
    const todoData = useSelector((todosModule) => todosModule.todoReducer);

    return (
        <Style.Working>
            <h2>🔥 Working</h2>
            <Style.WorkingContent>
                {todoData
                    .filter((todo) => todo.isDone === false)
                    .map((todo, key) => (
                        <ToDoItem todo={todo} key={key} />
                    ))}
            </Style.WorkingContent>
        </Style.Working>
    );
}
