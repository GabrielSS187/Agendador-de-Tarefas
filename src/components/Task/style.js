import styled from "styled-components";

export const TaskDiv = styled.div`

    background-color: #444;
    margin: 8px 0;
    padding: 15px 20px;
    display: flex;
    border-radius: 5px;
    justify-content: space-between;
    color: #eee;
    align-items: center;
`;

export const TaskTitle = styled.div`
cursor: pointer;
`;

export const ButtonsContainer = styled.div`

    width: 30%;
    display: flex;
    justify-content: flex-end;

button {
    background-color: #444;
    border: none;
    font-size: 24px;
    color: chartreuse;
    padding-left: 10px;
}
`