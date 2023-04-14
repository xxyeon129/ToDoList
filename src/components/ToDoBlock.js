export default function ToDoBlock({ todo, deleteTodo }) {
    return (
        <span>
            <h2>{todo.title}</h2>
            <p>{todo.content}</p>
            <button onClick={() => deleteTodo(todo.id)}>삭제하기</button>
            {todo.isDone ? <button>취소</button> : <button>완료</button>}
        </span>
    );
}
