import styled from "styled-components";
import ToDoForm from "components/ToDoForm";
import ToDoBlock from "components/ToDoBlock";
import { useSelector } from "react-redux";

export default function MainPage() {
    const todoData = useSelector((todosModule) => todosModule.todoReducer);
    return (
        <ToDoWrapStyle>
            <ContainerStyle>
                <HeaderStyle>
                    <h3>To Do List</h3>
                    <h4>React</h4>
                </HeaderStyle>
                <ToDoForm />
                <WorkingStyle>
                    <h2>🔥 Working</h2>
                    <WorkingContentStyle>
                        {todoData
                            .filter((todo) => todo.isDone === false)
                            .map((todo, key) => (
                                <ToDoBlock todo={todo} key={key} />
                            ))}
                    </WorkingContentStyle>
                </WorkingStyle>
                <DoneStyle>
                    <h2>🎉 Done</h2>
                    <DoneContentStyle>
                        {todoData
                            .filter((todo) => todo.isDone === true)
                            .map((todo, key) => (
                                <ToDoBlock todo={todo} key={key} />
                            ))}
                    </DoneContentStyle>
                </DoneStyle>
            </ContainerStyle>
        </ToDoWrapStyle>
    );
}

const ToDoWrapStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContainerStyle = styled.div`
    max-width: 1200px;
    min-width: 800px;
    display: flex;
    flex-direction: column;
`;

const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
`;

const WorkingStyle = styled.div`
    padding: 0 1rem;
`;

const WorkingContentStyle = styled.div`
    gap: 1.5rem;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
`;

const DoneStyle = styled.div`
    padding: 0 1rem;
`;

const DoneContentStyle = styled.div`
    gap: 1.5rem;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
`;
