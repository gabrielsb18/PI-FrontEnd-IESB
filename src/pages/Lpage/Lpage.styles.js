import styled from "styled-components";
import { device } from "../../constants/index";

export const ContainerBody = styled.div`
    background-color: #2a2a2a;
    min-height: 100vh;
    overflow-x: hidden;
`;

export const Main = styled.main`
    height: 100%;
    width:70%;
    margin: 0 auto;
`;

export const ApresentationSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    flex-wrap: wrap;
    padding-top: 120px;
    padding-bottom: 120px;

    @media ${device.xs} {
        > img {
            display: none;
        }
    }

    @media ${device.sm} {
        > img {
            display: none;
        }
    }

    @media ${device.md} {
        > img {
            max-width: 25%;
        }
    }
`;

export const ButtonSignUp = styled.button`
    width: 168px;
    height: 54px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;

    border: 1px solid #979797;
    border-radius: 8px;
    background-color: transparent ;
    
    font-size: 16px;
    font-weight:540;
    color:white;
    transition: ease-in-out 2s;

    &:hover{
        transition: ease-in-out 0.2s;
        border: 2px solid white;
        background-color: #3B3B3B;
        box-shadow: 0px 0px 4px 0px #979797;
    }

    &:active{
        transition: ease-in-out 0.2s;
        opacity: 0.4;
    }

    @media ${device.xs}{
        max-width: 150px;
        font-size: 1em;
    } 
`;

export const WrapperTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1.8rem;
    
    > h1 {
        color: #ffff;
        font-size: 48px;
    }

    @media ${device.xs} {
        > h1 {
            font-size: 24px;
        }
    }

    @media ${device.md} {
        > h1 {
            font-size: 28px;
        }
    }
`;

export const CardsSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
`;

export const BGimage = styled.img`
    width: 100vw;
    position: relative;
    max-height: 640px;
`;

export const WrapperContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    padding-right: 160px;
    padding-left: 160px;

    > h1 {
        color: #ffff;
        font-size: 48px;

        > strong {
            color: #1CAF5D;
        }
    }

    @media ${device.xs} {
        > img {
            display: none;
        }
    }

    @media ${device.sm} {
        padding: 60px;

        > h1 {
            font-size: 24px;
        }

        > img {
            width: 25%;
        }   
    }

    @media ${device.md} {
        > img {
            width: 50%;
        }
    }
`;

export const MetricsSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 120px;
    padding-bottom: 120px;
`;

export const WrapperGrid = styled.div`
    display: grid;
    grid-template-columns: minmax(200px, 2fr) minmax(200px, 2fr) minmax(190px, 2fr);  
	grid-template-rows: minmax(200px, 200px) minmax(200px, 200px);
	grid-template-areas: 
        "MonthsCompletedTasks ContentText ContentText"
        "ContentGraphicTwo ContentGraphicTree none";
            
	gap: 18px;
	justify-content: flex-start;
	max-width: 100%;

    @media ${device.xs} {
        grid-template-columns: minmax(190px, 2fr);
        grid-template-areas:
        "ContentText"
        "MonthsCompletedTasks"
        "ContentGraphicTwo"
        "ContentGraphicTree";
    }

    @media ${device.sm} {
        grid-template-columns: minmax(190px, 2fr) minmax(190px, 2fr);
        grid-template-areas: 
        "MonthsCompletedTasks MonthsCompletedTasks"
        "ContentText"
        "ContentGraphicTwo" "ContentGraphicTree";
    }
`;

export const GrapicCompletedTasks = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    grid-area: MonthsCompletedTasks;
    border: 1px solid #979797;
    border-radius:10px;
    min-width: 100%;

    > p {
        padding: 20px;
        font-size:16px;
        color: #afafaf;
        font-weight:300;
    }
`;

export const TotalCompletedTasks =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    grid-area: ContentGraphicTree;
    border: 1px solid #979797;
    padding:20px;
    border-radius:10px;

    > p {
        font-size:16px;
        color: #35FF89;
        font-weight:300;

        > strong {
        margin-top: 20px;
        color: #35FF89;
        }
    }

    > h1 {
        margin-top: 20px;
        color: #35FF89;
        font-size:64px;
        
    }
`;

export const TotalPendingTasks = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    grid-area: ContentGraphicTwo;
    border: 1px solid #979797;
    padding:20px;
    border-radius:10px;

    > p {
        font-size:16px;
        color: #ffd735;
        font-weight:300;

    }

    > h1 {
        margin-top: 20px;
        color: #ffd735;
        font-size:64px
    }
`;

export const ContentText = styled.div`
    display: inline-block;
    flex-direction:column;
    justify-content: space-around;
    grid-area: ContentText;
    padding:20px;

    border-radius:10px;
    border: 2px solid white;
    box-shadow: 0px 0px 4px 0px #979797;

    > h1 {
        margin-top: 20px;
        color: #ffff;
        font-size: 52px;

        @media ${device.xs} {
            padding: 0;
            font-size: 1.4em;
        }

        @media ${device.sm} {
            font-size: 1.8em;
        }

    }
`;

export const SearchSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 122px;
    height: 700px;

    > h1 {
        text-align: center;
        color: #ffff;
        font-size: 64px;

        > strong {
            color: #ffd735;
        }

        @media ${device.xs} {
            font-size: 38px;
        }
    }
`;

export const WrapperComponents = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 38px;
`;