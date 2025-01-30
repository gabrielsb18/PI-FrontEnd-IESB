import { styled } from "styled-components";

export const SkeletonLoading = styled.div`
    opacity: 0.7;
    animation: skeleton-loading 1s linear infinite alternate;

    @keyframes skeleton-loading {
        0% {
            background-color: #979797;
        }

        100% {
            background-color: #2a2a2a;
        }
    }
`;

export const CardTasks = styled(SkeletonLoading)`
    height: 168px;
    min-width: 272px;

    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 12px;

    border: 1.2px solid transparent;
    border-radius: 10px;
    padding: 20px;

    transition: ease-out 0.2s;
`;

export const CardMetrics = styled(SkeletonLoading)`
    display:flex;
    width: 100%;
    justify-content: space-around;
    grid-area: ${(props) => props.area};
    padding:20px;
    border-radius:10px;
`;