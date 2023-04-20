import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as Style from "components/PageStyle";

export default function ToDoDetail() {
    // Redux To Do State
    const todoData = useSelector((todosModule) => todosModule.todoReducer);

    // id 조회
    const param = useParams();

    // 선택한 id에 해당하는 item data
    const todoDetail = todoData.find((todo) => todo.id === parseInt(param.id));

    // 뒤로가기 버튼에 적용
    const navigate = useNavigate();

    return (
        <Style.DetailContainer>
            <Style.DetailNav>
                <p>ID: {todoDetail.id}</p>
                <button onClick={() => navigate(-1)}>이전으로</button>
            </Style.DetailNav>
            <h2>{todoDetail.title}</h2>
            <div>{todoDetail.content}</div>
        </Style.DetailContainer>
    );
}
