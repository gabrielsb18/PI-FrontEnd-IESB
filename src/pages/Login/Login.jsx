import {ContainerBody, Title, FormContainer } from '../Login/Login.style'
import { PanelLogo } from '../../components/PaneLogo/panelLogo'
import Input from "../../components/Input/Input"
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom';

export default function Login (){
    const navigate = useNavigate();

    return (
        <ContainerBody>
            <FormContainer>
                <Title>
                    <h1>Login</h1>
                    <p>Faça login para continuar</p>
                </Title>

                <form>
                    <div>
                        <Input nome="Email" />
                        <Input nome="Senha" />
                    </div>
                    <div>
                        <Button estilo="flat" name="Entrar"/>
                        <Button estilo="outlined" name="Cadastre-se" onClick={() => navigate('/cadastro')}/>
                    </div>
                </form>
            </FormContainer>

            <PanelLogo />
        </ContainerBody>
    );
}