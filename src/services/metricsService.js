import { api } from "./api";

function getTotalTasks(credentials) {
    return api.get("/notes/totals", {
        headers: {
            authorization: `Bearer ${credentials}`
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

function getTotalTasksCompletedOfWeek() {
    return api.get("/notes/notesofweek")
        .then((response) => {
            return { sucess: true, data: response.data, msg: "Notas da semana carregadas com sucesso" }
        }).catch((error) => {
            if (error.response) {
                return { sucess: false, msg: "Erro ao carregar o total de notas concluídas da semana" }
            }
        })
}

export { getTotalTasks,getTotalTasksCompletedOfWeek };