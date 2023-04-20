import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function ToDoDetail() {
    const todoData = useSelector((todosModule) => todosModule.todoReducer);
    const param = useParams();
    const navigate = useNavigate();

    const todoDetail = todoData.find((todo) => todo.id === parseInt(param.id));
    console.log(todoDetail);

    return (
        <DetailStyle>
            <DetailNav>
                <p>ID: {todoDetail.id}</p>
                <button onClick={() => navigate(-1)}>이전으로</button>
            </DetailNav>
            <h2>{todoDetail.title}</h2>
            <div>{todoDetail.content}</div>
        </DetailStyle>
    );
}

const DetailStyle = styled.div`
    /* 가운데 정렬 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border: 3px solid #070a52;
    border-radius: 20px;
    width: 20rem;
    height: 13rem;
    padding: 1.5rem 3rem;
`;

const DetailNav = styled.div`
    display: flex;
    justify-content: space-between;

    margin-bottom: 1rem;

    > p {
        font-size: small;
        color: gray;
    }

    > button {
        border: 1px solid #070a52;
        border-radius: 50px;
        padding: 0 1rem;
        background: inherit;
        margin-right: -1rem;
        color: #070a52;

        :hover {
            cursor: pointer;
            transition: 0.5s;
            background-color: #070a52;
            color: white;
        }
    }
`;
