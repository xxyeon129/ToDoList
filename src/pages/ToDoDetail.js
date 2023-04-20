import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ToDoDetail() {
    const todoData = useSelector((todosModule) => todosModule.todoReducer);
    const param = useParams();

    const todoDetail = todoData.find((todo) => todo.id === parseInt(param.id));
    console.log(todoDetail);

    return (
        <>
            <p>ID: {todoDetail.id}</p>
            <h2>{todoDetail.title}</h2>
            <div>{todoDetail.content}</div>
            <button>이전으로</button>
        </>
    );
}
