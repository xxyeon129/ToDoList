import styled from "styled-components";

export default function ToDoBlock({ todo, deleteTodo, doneTodo }) {
    return (
        <BlockStyle>
            <h2>{todo.title}</h2>
            <p>{todo.content}</p>
            <button id="delete" onClick={() => deleteTodo(todo.id)}>
                삭제하기
            </button>
            {todo.isDone ? (
                <button onClick={() => doneTodo(todo.id)}>취소</button>
            ) : (
                <button onClick={() => doneTodo(todo.id)}>완료</button>
            )}
        </BlockStyle>
    );
}

const BlockStyle = styled.div`
    padding: 1rem 1.5rem;
    width: 13rem;
    border: 3px solid #070a52;
    border-radius: 10px;

    button {
        width: 6rem;
        padding: 0.5rem;
        margin-bottom: 0.8rem;
        background: inherit;
        border: 2px solid #3c486b;
        border-radius: 10px;
        cursor: pointer;

        :hover {
            transition: 0.5s;
            color: white;
            background: #3c486b;
        }
    }

    #delete {
        margin-right: 0.5rem;
        border: 2px solid #d21312;
        border-radius: 10px;

        :hover {
            transition: 0.5s;
            background: #d21312;
        }
    }
`;
