import styled from "styled-components";

export const ToDoWrap = styled.div`
    /* 중앙 정렬 */
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ToDoContainer = styled.div`
    max-width: 1200px;
    min-width: 800px;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
`;

export const Working = styled.div`
    padding: 0 1rem;
`;

export const WorkingContent = styled.div`
    gap: 1.5rem;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
`;

export const Done = styled.div`
    padding: 0 1rem;
`;

export const DoneContent = styled.div`
    gap: 1.5rem;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
`;

export const DetailContainer = styled.div`
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

export const DetailNav = styled.div`
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
