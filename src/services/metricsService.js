import { api } from "./api";

function getMetrics(credentials) {
    return api.get("/notes/totals", {
        headers: {
            authorization: `Bearer ${ credentials }`
        }
    })
        .then((response) => {
            return { sucess: true, data: response.data };
        }).catch((error) => {
            if (error.response) {
                return { sucess: false, msg: error.response.data.msg }
            } else {
                return { sucess: false, msg: 'Erro ao tentar se conectar com o servidor' };
            }
        });
}

export { getMetrics };