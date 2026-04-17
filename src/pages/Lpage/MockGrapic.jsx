import Chart from "../../components/Metrics/Chart";
import { ContentGraphicsOne } from "../../components/Metrics/GrapicTasks/GrapicTasks.styles";
import { ToastPopUp } from "../../components/Toast/Toast";

export function MockGrapicMetrics() {
    const options = {
        title: {
            text: "",
            useHTML: false,
        },

        chart: {
            type: "areaspline",
            backgroundColor: null,
            spacingTop: 0,
            spacingRight: 0,
            spacingBottom: 0,
            spacingLeft: 0,
            margin: [0, 0, 0, 0],
        },

        xAxis: {
            gridLineWidth: 0,
        },

        yAxis: {
            gridLineWidth: 0,
        },

        tooltip: {
            useHTML: true,
            formatter: function () {
                const titles = [
                    "Dom",
                    "Seg",
                    "Ter",
                    "Qua",
                    "Qui",
                    "Sex",
                    "Sab"
                ];

                return `
                <b>${titles[this.point.index]}</b><br>
                Tarefas Concluídas: ${this.y}
              `;
            },
        },

        series: [
            {
                name: "Tarefas Concluídas",
                data: [10, 9, 3, 5, 11, 3, 9],
                fillColor: {
                    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                    stops: [
                        [0, "#35FF89"],
                        [1, "#32CD3200"],
                    ],
                },
                color: "#35FF89",
            },
        ],

        legend: {
            enabled: false,
            itemStyle: {
                color: "#fff",
                fontSize: "12px",
            },
        },
    };

    return (
        <>
        <ToastPopUp/>
            <ContentGraphicsOne>
                <Chart options={options} />
            </ContentGraphicsOne>
        </>
    );
}
