import { InputWrap, ErrorMessage } from "./Input.styles";
import React from "react";

const Input = React.forwardRef(
	({ error, nome, icon: Icon, variant = "flat", ...rest }, ref) => {
		return (
			<>
				<label>{nome}</label>
				<InputWrap variant={variant}>
					{Icon && <Icon size={20} />}
					<input {...rest} ref={ref} />
				</InputWrap>
				{error && <ErrorMessage>{error}</ErrorMessage>}
			</>
		);
	},
);

export { Input };
