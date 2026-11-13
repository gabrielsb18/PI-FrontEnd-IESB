import { FcGoogle } from "react-icons/fc";
import { StyledGoogleButton } from "./GoogleButton.styles";

function GoogleButton({ onClick, text = "Continuar com o Google" }) {
	return (
		<StyledGoogleButton type="button" onClick={onClick}>
			<FcGoogle size={24} />
			{text}
		</StyledGoogleButton>
	);
}

export { GoogleButton };
