import { useContext, createContext, useEffect, useState } from "react";
import { getTotalTasks } from "../services/metricsService";
import { useAuth } from "./AuthContext";

export const MetricsContext = createContext({});

function MetricsProvider({ children }) {
	const { acessToken } = useAuth();

	const [totalTasks, setTotalTasks] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		if (acessToken) {
			
			const fecthTotaltasks = async () => {
					setLoading(true);
					const response = await getTotalTasks(acessToken);
					
					if (response.sucess) {
						const { pendente, concluida } = response.data;
					
						setTotalTasks((prevstate) => ({
							...prevstate,
							pendente,
							concluida,
						}));
					}

					if (!response.sucess) {
						setError(response.msg);
					}
				
					setLoading(false);
				}

				fecthTotaltasks();
			};
			
		}, [acessToken]);

	const context = {
		totalTasksPending: totalTasks.pendente,
		totalTasksCompleted: totalTasks.concluida,
		loading,
		error
	};

	return (
		<MetricsContext.Provider value={context}>
			{children}
		</MetricsContext.Provider>
	);
}

function useMetrics() {
	const contextMetrics = useContext(MetricsContext);
	return contextMetrics;
}

export { useMetrics, MetricsProvider };
