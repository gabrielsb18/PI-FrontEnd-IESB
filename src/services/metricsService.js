import { api } from "./api";

function getTotalTasks(credentials) {
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
                return { sucess: false, msg: "Erro ao carregar metricas" };
            }
        });
}

export { getMetrics };