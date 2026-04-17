import styled from "styled-components";
import {device} from "../../constants/index";

export const ContainerBody = styled.div`
    background-color: #2a2a2a;
    min-height: 100vh;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 32px;
    height: auto;
    margin: 0 auto;
    width:70%;
    min-height: 100vh;
`;

export const HeaderTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    margin-top:52px;

    > h1 {
        color:white;
        font-size:32px;
        font-weight:600;
        
        > strong{
        font-weight:800;
        }
    }

    > p {
        color:white;
        font-size:16px
    }
`;

export const HeaderTasks = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    width: 100%;
`;

export const ContainerTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 25px;
    
    > h1{
        color: #666;
        font-size: 32px;
        font-weight:400;
    }
    
    @media ${device.xs} {
        align-items: flex-start;
        flex-direction: column;
    }
`;

export const ActionsButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    width: 80%;
    gap: 25px;

    @media ${device.xs} {
        width: 100%;
    }
`;

export const ContainerTasks = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`;

export const ContainerCardsTasks = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(272px, 1fr));
	grid-template-rows: minmax(168px, auto);
	grid-template-areas: "Task Task Task Task";
	gap: 1.25rem;
	width: 100%;
    margin-bottom: 6%;

	@media ${device.lg} {
		grid-template-areas:
			"Task"
			"Task"
			"Task"
			"Task";
	}

	@media ${device.md} {
		grid-template-areas:
			"Task Task"
			"Task Task";
	}

	@media ${device.sm} {
		grid-template-areas:
			"Task"
			"Task"
			"Task"
			"Task";
	}

	@media ${device.xs} {
		grid-template-areas:
			"Task"
			"Task"
			"Task"
			"Task";
	}
`;

export const BackgroundModal = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.4);
`;

export const NoContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 32px;
    gap: 2rem;

    > img {
        max-width: 320px;
        filter: contrast(0.8);
        transition: ease-in-out 0.1s;

        &:hover {
            filter: contrast(0.7);
        }
    }

    > h2 {
        color: black;
        font-size: 2em;
    }
`;