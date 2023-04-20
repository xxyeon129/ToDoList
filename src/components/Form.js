import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "redux/modules/todos";

export default function Form() {
    // 제목, 내용 입력 상태
    const [inputTitle, setInputTitle] = useState("");
    const [inputContent, setInputContent] = useState("");

    // Redux
    const dispatch = useDispatch();

    // To Do 추가
    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputTitle === "") {
            return alert("제목을 입력해주세요.");
        }
        if (inputContent === "") {
            return alert("할 일을 입력해주세요.");
        }

        const newTodo = {
            id: Date.now(),
            title: inputTitle,
            content: inputContent,
            isDone: false,
        };

        dispatch(addTodo(newTodo));

        setInputTitle("");
        setInputContent("");
    };

    return (
        <FormContainerStyle>
            <form onSubmit={handleSubmit}>
                <FormStyle>
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
                </FormStyle>
            </form>
        </FormContainerStyle>
    );
}

const FormContainerStyle = styled.div`
    background-color: #f0f0f0;
    padding: 1.5rem;
    border-radius: 0.5rem;
    font-weight: bold;
`;

const InputStyle = styled.div`
    /* 제목, 내용 lable, input */
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

const FormStyle = styled.div`
    /* 제목, 내용 input과 button 구획 */
    display: flex;
    justify-content: space-between;

    button {
        background-color: #070a52;
        color: white;
        font-weight: bold;
        padding: 0.6rem 1rem;
        border-radius: 10px;
        border: none;

        :hover {
            cursor: pointer;
        }
    }
`;
