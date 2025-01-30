import { api } from "./api";

function postUser(data) {
    return api.post("/users/", data)
        .then((response) => {
            return { sucess: true, data: response.data }
        })
        .catch((error) => {
            if (error.response) {
                return { sucess: false, errors: error.response.data.errors }
            } else {
                return { sucess: false, msg: "Erro ao criar usuario" }
            }
        })
}

function loginUser(data) {
    return api.post("/users/login", data)
        .then((response) => {
            return { success: true, data: response.data };
        })
        .catch((error) => {
            if (error.response) {
                return { success: false, msg: error.response.data.msg };
            } else {
                return { success: false, msg: "Erro ao realizar login" };
            }
        });
}

function getUser() {
    return api.get("/users")
        .then((response) => {
            return { success: true, data: response.data };
        })
        .catch((error) => {
            if (error.response) {
                return { success: false, msg: error.response.data.msg };
            } else {
                return { success: false, msg: "Erro ao buscar dados do usuário" };
            }
        });
}

export {postUser, loginUser, getUser};