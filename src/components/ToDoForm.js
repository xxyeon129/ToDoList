import { useState, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "redux/modules/todos";

export default function ToDoTemplate({ todos, setTodos }) {
    const [inputTitle, setInputTitle] = useState("");
    const [inputContent, setInputContent] = useState("");

    const dispatch = useDispatch();

    let nextId = useRef(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputTitle === "") {
            return alert("제목을 입력해주세요.");
        }
        if (inputContent === "") {
            return alert("할 일을 입력해주세요.");
        }

        nextId.current += 1;

        const newTodo = {
            id: nextId.current,
            title: inputTitle,
            content: inputContent,
            isDone: false,
        };

        dispatch(addTodo(newTodo));

        setInputTitle("");
        setInputContent("");
    };

    return (
        <ContainerStyle>
            <form onSubmit={handleSubmit}>
                <FormContainer>
                    <InputStyle>
                        <label>제목</label>
                        <input
                            placeholder="할 일을 요약해서 입력해주세요."
                            onChange={(e) => setInputTitle(e.target.value)}
                            value={inputTitle}
                        />
                        <label id="content">내용</label>
                        <input
                            placeholder="할 일을 입력해주세요."
                            onChange={(e) => setInputContent(e.target.value)}
                            value={inputContent}
                        />
                    </InputStyle>
                    <button type="submit">추가하기</button>
                </FormContainer>
            </form>
        </ContainerStyle>
    );
}

const ContainerStyle = styled.div`
    background-color: #f0f0f0;
    padding: 1.5rem;
    border-radius: 0.5rem;
    font-weight: bold;
    input {
        margin-left: 0.3rem;
    }
`;

const InputStyle = styled.div`
    display: flex;
    align-items: center;

    input {
        width: 15rem;
        padding: 0.7rem;
        border: none;
        border-radius: 10px;
        margin-left: 1rem;
    }

    #content {
        margin-left: 2rem;
    }
`;

const FormContainer = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        background-color: #070a52;
        color: white;
        font-weight: bold;
        padding: 0.6rem 1rem;
        border-radius: 10px;
        border: none;
    }
`;
