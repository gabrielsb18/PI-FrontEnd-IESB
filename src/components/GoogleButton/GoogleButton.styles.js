import styled from "styled-components";

export const StyledGoogleButton = styled.button`
	width: 100%;
	height: 54px;
	border-radius: 5px;
	border: 2px solid #cccc;
	background-color: #fff;
	color: #333;
	font-size: 16px;
	font-weight: 600;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	cursor: pointer;
	transition: ease-in-out 0.3s;
	margin-top: 8%;

	&:hover {
		background-color: #f5f5f5;
		box-shadow: -10px 5px 44.1px 0px #cccc;
	}
`;
