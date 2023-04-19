import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo } from "redux/modules/todos";

export default function ToDoBlock({ todo, doneTodo }) {
    const todoData = useSelector((todosModule) => todosModule.todoReducer);
    const dispatch = useDispatch();

    const deleteHandler = (deleteId) => {
        const newTodos = todoData.filter((todo) => todo.id !== deleteId);
        dispatch(deleteTodo(newTodos));
    };

    return (
        <BlockStyle>
            <h2>{todo.title}</h2>
            <p>{todo.content}</p>
            <ButtonStyle>
                <button id="delete" onClick={() => deleteHandler(todo.id)}>
                    삭제
                </button>
                {todo.isDone ? (
                    <button onClick={() => doneTodo(todo.id)}>취소</button>
                ) : (
                    <button onClick={() => doneTodo(todo.id)}>완료</button>
                )}
            </ButtonStyle>
        </BlockStyle>
    );
}

const BlockStyle = styled.div`
    padding: 1rem 1.5rem;
    width: 13rem;
    border: 3px solid #070a52;
    border-radius: 10px;
`;

const ButtonStyle = styled.div`
    display: flex;
    gap: 0.4rem;

    button {
        flex-grow: 1;

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
        border: 2px solid #d21312;
        border-radius: 10px;

        :hover {
            transition: 0.5s;
            background: #d21312;
        }
    }
`;
