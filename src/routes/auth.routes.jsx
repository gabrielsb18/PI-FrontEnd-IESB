import {Route, Routes} from 'react-router-dom';
import Login from '../pages/Login/Login';
import Cadastro from '../pages/Cadastro/Cadastro';
import Error404 from '../pages/Error404/Error404';

export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="*" element = {<Error404 redirect="/login"/>} />
        </Routes >
    )
}