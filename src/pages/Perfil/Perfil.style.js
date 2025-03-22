import styled from "styled-components";
import { device } from "../../constants";

export const ContainerBody = styled.div`
	background-color: #2a2a2a;
`;

export const Main = styled.main`
	width: 100%;
    max-width: 25rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	gap: 1.75rem;
	margin: 0 auto;
    margin-top: 4%;
    height: 100vh;

    @media ${device.xs}{
        padding: 2rem;
        margin-top: 0;
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: 0 auto 32px;
    width: 186px;
    height: 186px;

    > img {
        width: 12rem;
        height: 12rem;
        border-radius: 50%;
        object-fit: cover; 
    }

    > label {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 3rem;

        background-color: ${({ theme }) => theme.COLORS.YELLOW_DEFAULT};

        border-radius: 50%;
        position: absolute;
        bottom: 7px;
        right: 7px;

        cursor: pointer;
        transition: ease-in-out 0.2s;
        
        &:hover{
            filter: brightness(0.8);
        }

        > input {
            display: none;
        }

        > svg {
            width: 1.26rem;
            height: 1.26rem;
            color: ${({ theme }) => theme.COLORS.YELLOW_900}
        }
    }
`;

export const FormContainer = styled.form`
	display: flex;
    flex-direction: column;
	justify-content: center;
	align-items: center;
    gap: 1.25rem;
    width: 100%;
    max-width: 25rem;
`;

export const InputsWrapper = styled.div`
    width: 100%;
   display: flex;
   flex-direction: column;
   gap: 12px;
`;

export const ButtonSave = styled.button`
	display: flex;
	width: 100%;
    max-width: 25rem;
	height: 45px;
	align-items: center;
	justify-content: center;
	margin-top: 40px;
    margin-bottom: 10%;
	
	background-color: #414141;
	color: #ffffff;
	border-radius: 10px;
	border: none;

    font-size: 16px;

    &:hover {
        filter: brightness(0.8);
    }    
`;