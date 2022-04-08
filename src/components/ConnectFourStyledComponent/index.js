import styled from "styled-components";

export const CardSC = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 100%;
    padding: 25px 10px 25px 10px;
    background-color: white;
    border-radius: 10px;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
      }
`;

export const BoxSC = styled.div`
    width: ${props => props.width ? `${props.width}%` : "100%"};
    height: ${props => props.height ? `${props.height}px` : "50px"};
    background-color: ${props => props.color};
    margin-bottom: 5px;
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    &:hover{
        background-color:  ${props => props.color};
        opacity: 0.9, 0.8, 0.7;
    }
`;
 
export const TitleSC = styled.h3`
    color: black;
    text-align: center;
`;