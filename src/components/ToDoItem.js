import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo } from "redux/modules/todos";
import { doneTodo } from "redux/modules/todos";
import { Link } from "react-router-dom";

export default function ToDoItem({ todo }) {
    // Redux To Do State
    const todoData = useSelector((todosModule) => todosModule.todoReducer);
    const dispatch = useDispatch();

    // To Do 삭제
    const deleteHandler = (deleteId) => {
        const newTodos = todoData.filter((todo) => todo.id !== deleteId);
        dispatch(deleteTodo(newTodos));
    };

    // To Do 완료/취소
    const doneHandler = (doneId) => {
        const clickIdx = todoData.findIndex((todo) => todo.id === doneId);
        const newTodos = [...todoData];
        newTodos[clickIdx].isDone = !todoData[clickIdx].isDone;

        dispatch(doneTodo(newTodos));
    };

    return (
        <ItemContainerStyle>
            <h2>
                <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
            </h2>
            <p>{todo.content}</p>
            <ButtonStyle>
                <button id="delete" onClick={() => deleteHandler(todo.id)}>
                    삭제
                </button>
                {todo.isDone ? (
                    <button onClick={() => doneHandler(todo.id)}>취소</button>
                ) : (
                    <button onClick={() => doneHandler(todo.id)}>완료</button>
                )}
            </ButtonStyle>
        </ItemContainerStyle>
    );
}

const ItemContainerStyle = styled.div`
    padding: 1rem 1.5rem;
    width: 13rem;
    border: 3px solid #070a52;
    border-radius: 10px;

    /* title Link */
    a {
        color: #070a52;
        text-decoration: none;

        :hover {
            transition: 0.5s;
            color: #576cbc;
        }
    }
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

    /* 삭제 버튼 색상 변경 */
    #delete {
        border-color: #d21312;

        :hover {
            background: #d21312;
        }
    }
`;
