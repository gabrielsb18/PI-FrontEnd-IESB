import { MdOutlineEmail, MdOutlineLock } from "react-icons/md";
import { toast } from "sonner";
import { Button } from "../../components/Button/Button";
import { GoogleButton } from "../../components/GoogleButton/GoogleButton";
import { Input } from "../../components/Input/Input";
import { PanelLogo } from "../../components/PaneLogo/panelLogo";
import { ToastPopUp } from "../../components/Toast/Toast";
import { ContainerBody, FormContainer, Title } from "../Login/Login.style";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { loginUserSchema } from "../../utils/loginUserSchema";

export default function Login() {
	const { signIn, signInWithGoogle } = useAuth();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(loginUserSchema),
	});

	async function onSubmit(data) {
		const response = await signIn(data);

		if (response.success) {
			setTimeout(() => {
				toast.success(response.msg, {
					style: {
						borderColor: "green",
					},
				});
			}, 1000);

			navigate("/Home");
		}

		if (!response.success) {
			toast.error(response.msg);
		}
	}

	return (
		<ContainerBody>
			<FormContainer>
				<Title>
					<h1>Login</h1>
					<p>Faça login para continuar</p>
				</Title>

				<form onSubmit={handleSubmit(onSubmit)}>
					<div>
						<Input
							ref
							error={errors.email?.message}
							{...register("email")}
							icon={MdOutlineEmail}
							nome="Email"
							placeholder="Digite seu email"
						/>
						<Input
							ref
							type="password"
							error={errors.senha?.message}
							{...register("senha")}
							icon={MdOutlineLock}
							nome="Senha"
							placeholder="Digite sua senha"
						/>
					</div>
					<div>
						<Button estilo="flat" name="Entrar" type="submit" />
						<Button
							estilo="outlined"
							name="Cadastre-se"
							onClick={() => navigate("/cadastro")}
						/>
						<GoogleButton onClick={signInWithGoogle} />
					</div>
				</form>
			</FormContainer>

			<PanelLogo />
			<ToastPopUp />
		</ContainerBody>
	);
}
