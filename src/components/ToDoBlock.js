export default function ToDoBlock({ todo }) {
    return (
        <span>
            <h2>{todo.title}</h2>
            <p>{todo.content}</p>
            <button>삭제하기</button>
            {todo.done ? <button>취소</button> : <button>완료</button>}
        </span>
    );
}
