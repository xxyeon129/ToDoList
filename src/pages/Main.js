import styled from "styled-components";
import ToDoForm from "components/ToDoForm";
import ToDoBlock from "components/ToDoBlock";

export default function Main({ todos, setTodos, deleteTodo, doneTodo }) {
    <ToDoWrapStyle>
        <ContainerStyle>
            <HeaderStyle>
                <h3>To Do List</h3>
                <h4>React</h4>
            </HeaderStyle>
            <ToDoForm todos={todos} setTodos={setTodos} />
            <ContentStyle>
                <WorkingStyle>
                    <h2>🔥 Working</h2>
                    <WorkingContentStyle>
                        {todos
                            .filter((todo) => todo.isDone === false)
                            .map((todo, key) => (
                                <ToDoBlock
                                    todo={todo}
                                    key={key}
                                    deleteTodo={deleteTodo}
                                    doneTodo={doneTodo}
                                />
                            ))}
                    </WorkingContentStyle>
                </WorkingStyle>
                <DoneStyle>
                    <h2>🎉 Done</h2>
                    <DoneContentStyle>
                        {todos
                            .filter((todo) => todo.isDone === true)
                            .map((todo, key) => (
                                <ToDoBlock
                                    todo={todo}
                                    key={key}
                                    deleteTodo={deleteTodo}
                                    doneTodo={doneTodo}
                                />
                            ))}
                    </DoneContentStyle>
                </DoneStyle>
            </ContentStyle>
        </ContainerStyle>
    </ToDoWrapStyle>;
}

const ToDoWrapStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContainerStyle = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
`;

const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
`;

const ContentStyle = styled.div``;

const WorkingStyle = styled.div`
    padding: 0 1rem;
`;

const WorkingContentStyle = styled.div`
    display: flex;
    gap: 1.5rem;
`;

const DoneStyle = styled.div`
    padding: 0 1rem;
`;

const DoneContentStyle = styled.div`
    display: flex;
    gap: 1.5rem;
`;
