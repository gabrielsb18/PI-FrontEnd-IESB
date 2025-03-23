import { ContentGraphicsOne } from "./GrapicTasks.styles.js";
import Chart from "../Chart/index.jsx";
import { useEffect, useState } from "react";
import { getTotalTasksCompletedOfWeek } from "../../../services/metricsService.js";
import { toast } from "sonner"
import { ToastPopUp } from "../../Toast/Toast.jsx";

export function GrapicTasks() {
	const [data, setData] = useState([0,0,0,0,0,0,0])

	useEffect(()=>{
		const fetchData = async()=> {
			const response = await getTotalTasksCompletedOfWeek()
			
			if(response.sucess){
				setData(response.data)
			}

			if(!response.sucess){
				toast.error(response.msg)
			}
		} 

		fetchData();
	}, [])

	const categories = data.map(item => item.dia).reverse();
    const values = data.map(item => item.total).reverse();

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
				const titles = categories;

				return `
				<b>${titles[this.point.index]}</b><br>
				Tarefas Concluídas: ${this.y}
			  `;
			},
		},

		series: [
			{
				name: "Tarefas Concluídas",
				data: values,
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
