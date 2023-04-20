import ToDoForm from "components/ToDoForm";
import ToDoItem from "components/ToDoItem";
import { useSelector } from "react-redux";
import * as Style from "components/PageStyle";

export default function MainPage() {
    // Redux To Do State
    const todoData = useSelector((todosModule) => todosModule.todoReducer);

    return (
        <Style.ToDoWrap>
            <Style.ToDoContainer>
                <Style.Header>
                    <h3>To Do List</h3>
                    <h4>React</h4>
                </Style.Header>
                <ToDoForm />
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
            </Style.ToDoContainer>
        </Style.ToDoWrap>
    );
}
