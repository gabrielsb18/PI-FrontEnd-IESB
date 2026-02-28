import { HeaderNav } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input.jsx";
import { MdOutlineEmail, MdOutlineLock } from "react-icons/md";
import { FiCamera, FiUser } from "react-icons/fi";
import { ToastPopUp } from "../../components/Toast/Toast.jsx"

import {
	ContainerBody,
	Main,
	FormContainer,
	ButtonSave,
    Avatar,
    InputsWrapper,
} from "./Perfil.style.js";

import { toast } from "sonner";
import { api } from "../../services/api.js";
import { updateUserSchema } from "../../utils/updateUserSchema.js"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../contexts/AuthContext.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Perfil() {
    const { nome, emailUser, avatarUrl, setData} = useAuth();
    const { id } = useParams();

    const [avatarFile, setAvatarFile] = useState(null);
    const [avatarPreview, setAvatarPreview] = useState(avatarUrl);

    useEffect(() => {
        setAvatarPreview(avatarUrl);
    }, [avatarUrl]);

    const {register, handleSubmit, formState: {errors}} = useForm({
        values: {
            nome: nome,
            email: emailUser,
        },
        resolver: zodResolver(updateUserSchema)
    });

    const onUpdate = async (data) => {
        try {

            if(avatarFile){
                const fileUpload = new FormData();
                fileUpload.append("avatar", avatarFile);
            
                const response = await api.patch("/users/avatar", fileUpload, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                })

                toast.success(response.data.msg, {
                    style: {
                        borderColor: "green",
                        position: "top-right",
                    },
                });

                setData((prevstate) => ({...prevstate, avatar: response.data.user.avatar}));
            }
            
            if(data.nome !== nome || data.email !== emailUser || data.senha || data.senha_antiga){
                const response = await api.put(`/users/${id}`, data);

                setData((prevstate) => ({...prevstate, nome: response.data.nome, emailUser: response.data.email}));

                toast.success(response.data.msg, {
                    style: {
                        borderColor: "green",
                        position: "top-right",
                    },
                });
            }
            
        } catch (error) {
            if(error.response){
                toast.error(error.response.data.msg)
            } else {
                toast.error("Erro ao atualizar usuário")
            }
        };
    };

    const handleChangeAvatar = (event) => {
        const file = event.target.files[0];

        if (file) {
            setAvatarFile(file);
    
            const imagePreview = URL.createObjectURL(file);
            setAvatarPreview(imagePreview);
        };
    };

	return (
		<ContainerBody>
			<HeaderNav
                showSearchBar={false}
            />
			<Main>
                <Avatar>
                    <img src={avatarPreview} alt="Profile Image" />


                    <label htmlFor="avatar">
                        <FiCamera />

                        <input
                            id="avatar"
                            type="file"
                            onChange={handleChangeAvatar}
                        />
                    </label>
                </Avatar>

                <FormContainer onSubmit={handleSubmit(onUpdate)}>

                    <InputsWrapper>
                        <Input
                            variant="black"
                            placeholder="nome"
                            icon={FiUser}
                            {...register("nome")}
                            error={errors.nome?.message}
                        />

                        <Input
                            variant="black"
                            placeholder="email"
                            icon={MdOutlineEmail}
                            {...register("email")}
                            error={errors.email?.message}
                        />
                    </InputsWrapper>
                    <InputsWrapper>
                        <Input
                            variant="black"
                            type="password"
                            placeholder="Digite sua senha atual"
                            icon={MdOutlineLock}
                            {...register("senha_antiga")}
                            error={errors.senha_antiga?.message}
                        />
                        <Input
                            variant="black"
                            type="password"
                            placeholder="Digite sua senha nova"
                            icon={MdOutlineLock}
                            {...register("senha")}
                            error={errors.senha?.message}
                        />
                    </InputsWrapper>

                    <ButtonSave type="submit">Salvar</ButtonSave>
                </FormContainer>

			</Main>
            <ToastPopUp />
		</ContainerBody>
	);
}
