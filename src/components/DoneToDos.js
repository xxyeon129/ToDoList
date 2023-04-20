import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";
import * as Style from "components/PageStyle";

export default function DoneToDos() {
    // Redux To Do State
    const todoData = useSelector((todosModule) => todosModule.todoReducer);

    return (
        <Style.Done>
            <h2>🎉 Done</h2>
            <Style.DoneContent>
                {todoData
                    .filter((todo) => todo.isDone === true)
                    .map((todo, key) => (
                        <ToDoItem todo={todo} key={key} />
                    ))}
            </Style.DoneContent>
        </Style.Done>
    );
}
