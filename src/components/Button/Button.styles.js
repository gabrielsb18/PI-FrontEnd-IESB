import styled from "styled-components";

export const ConteinerButton = styled.button`
    width: 100%;
    height: 54px;
    border-radius: 5px;
    border: 0;
    color: #000;
    font-size: 20px;
    font-weight: 600;
    transition: ease-in-out 0.3s;
    
    &:hover {
        box-shadow: -10px 5px 44.1px 0px rgba(229, 176, 78, 0.62);
    }

    &.flat {
        background-color: #ffd735;
    }

    &.outlined {
        background-color: transparent;
        border: 3px solid #ffd735;

        &:hover {
            background-color: #ffd735;
        }
    }
`;