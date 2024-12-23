import styled from "styled-components"

export const ContainerBody = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background-color: #2B2B2B;
    color: #F0F0F0;
`;

export const MainContent = styled.form`
    display: flex;
    flex-direction: column;
    gap:44px;
    width: 44%;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 50px;
    padding-top: 50px;
    box-sizing: border-box;
    height: 100vh;
    max-height: 100%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const HeaderTitle = styled.div`
    display: flex;
    width: 100%;
    justify-content:space-between;
    height:42px;
`;

export const InputWrapper = styled.div`
    display:flex;
    justify-content:center;
    gap:15px;
    flex-direction:column;

    > label {
        font-size:18px;
    }

    > input {
        width:100%;
        height:46px;
        border:none;
        border-radius:10px;
        background-color:#414141;
        padding:12px;
        color:#ffffff;
        font-size:16px;
    }
`;

export const ContainerActionButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const ButtonSaveNote = styled.button`
    width:100%;
    height:48px;
    display:flex;
    align-items:center;
    justify-content:center;

    background-color: #414141;
    color:#ffffff;
    border-radius: 10px;
    border:none;

    font-size: 1em;
    transition: ease-in-out 0.2s;

    &:hover {
        filter: brightness(0.9);
    }
`;

export const ButtonCancel = styled.button`
    width:100%;
    height:48px;
    display:flex;
    align-items:center;
    justify-content:center;

    background-color: #414141;
    color:#ffffff;
    border-radius: 10px;
    border:none;
    
    font-size: 1em;
    
    &:hover {
        filter: brightness(0.9);
    }
`;