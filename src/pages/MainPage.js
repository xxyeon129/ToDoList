import Form from "components/Form";
import * as Style from "components/PageStyle";
import Header from "components/Header";
import WorkingToDos from "components/WorkingToDos";
import DoneToDos from "components/DoneToDos";

export default function MainPage() {
    return (
        <Style.ToDoWrap>
            <Style.ToDoContainer>
                <Header />
                <Form />
                <WorkingToDos />
                <DoneToDos />
            </Style.ToDoContainer>
        </Style.ToDoWrap>
    );
}
