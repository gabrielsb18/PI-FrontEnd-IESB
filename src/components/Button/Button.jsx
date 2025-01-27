import { ConteinerButton } from "./Button.styles";

/* eslint-disable react/prop-types */
function Button({ estilo = "flat", name, onClick }) {
	return (
		<ConteinerButton className={estilo} onClick={onClick}>
			{name}
		</ConteinerButton>
	);
}

export { Button };