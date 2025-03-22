import {
	ContainerBody,
	Title,
	FormContainer,
} from "../Cadastro/Cadastro.style";
import { PanelLogo } from "../../components/PaneLogo/panelLogo";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { MdOutlineEmail, MdOutlineLock } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUserFormSchema } from "../../utils/registerUserFormSchema";
import { useAuth } from "../../contexts/AuthContext";
import { toast } from "sonner";
import { ToastPopUp } from "../../components/Toast/Toast";
import { FiUser } from "react-icons/fi";

export default function Cadastro() {
	const { signUp } = useAuth();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(registerUserFormSchema),
	});

	async function onSignup(data) {
			const response = await signUp(data);

			if(response.sucess){
				toast.success(response.msg, {
					style: {
						borderColor: "green",
					},
				});
	
				setTimeout(() => {
					navigate("/login");
				}, 1000);
			}
            
			if (!response.sucess) {
				toast.error(response.msg);
			}
	}

	return (
		<ContainerBody>
			<FormContainer>
				<Title>
					<h1>
						Bem vindo ao <strong> Notes</strong>
					</h1>
					<p>Cadastre - se para aproveitar ao máximo o Notes</p>
				</Title>

				<form onSubmit={handleSubmit(onSignup)}>
					<div>
						<Input
							type="text"
							icon={FiUser}
							nome="Nome"
							placeholder="Digite seu nome"
							{...register("nome")}
							error={errors.nome?.message}
						/>

						<Input
							type="email"
							icon={MdOutlineEmail}
							nome="Email"
							placeholder="Digite seu email"
							{...register("email")}
							error={errors.email?.message}
						/>
						<Input
							type="password"
							icon={MdOutlineLock}
							nome="Senha"
							placeholder="Digite sua senha"
							{...register("senha")}
							error={errors.senha?.message}
						/>

						<Link to="/login">
							Já tem uma conta? <strong>Entrar</strong>
						</Link>
					</div>
					<div>
						<Button
							type="submit"
							estilo="flat"
							name="Cadastre-se"
						/>
					</div>
				</form>
			</FormContainer>

			<PanelLogo />
			<ToastPopUp />
		</ContainerBody>
	);
}
