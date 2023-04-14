export default function ToDoBlock({ todo, deleteTodo, doneTodo }) {
    return (
        <span>
            <h2>{todo.title}</h2>
            <p>{todo.content}</p>
            <button onClick={() => deleteTodo(todo.id)}>삭제하기</button>
            {todo.isDone ? (
                <button onClick={() => doneTodo(todo.id)}>취소</button>
            ) : (
                <button onClick={() => doneTodo(todo.id)}>완료</button>
            )}
        </span>
    );
}
