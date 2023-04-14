import { useState, useRef } from "react";

export default function ToDoTemplate({ todos, setTodos }) {
    const [inputTitle, setInputTitle] = useState("");
    const [inputContent, setInputContent] = useState("");

    let nextId = useRef(0);

    const addTodo = (title, content) => {
        nextId.current += 1;
        const todo = { id: nextId.current, title, content, done: false };
        setTodos([...todos, todo]);
        localStorage.setItem("toDoData", JSON.stringify([...todos, todo]));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputTitle === "") {
            return alert("제목을 입력해주세요.");
        }
        if (inputContent === "") {
            return alert("할 일을 입력해주세요.");
        }
        addTodo(inputTitle, inputContent);
        setInputTitle("");
        setInputContent("");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>제목</label>
                <input
                    placeholder="할 일을 요약해서 입력해주세요."
                    onChange={(e) => setInputTitle(e.target.value)}
                    value={inputTitle}
                />
                <label>내용</label>
                <input
                    placeholder="할 일을 입력해주세요."
                    onChange={(e) => setInputContent(e.target.value)}
                    value={inputContent}
                />
                <button type="submit">추가하기</button>
            </form>
        </>
    );
}
