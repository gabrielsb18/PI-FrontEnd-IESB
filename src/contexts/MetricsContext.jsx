import { useContext, createContext, useEffect, useState } from "react";
import { getMetrics } from "../services/metricsService";
import { useAuth } from "./AuthContext";

export const MetricsContext = createContext({});

function MetricsProvider({ children }) {
	const { acessToken } = useAuth();

	const [totalTasks, setTotalTasks] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (acessToken) {
			const getTotalPendingTasks = async () => {
				setLoading(true);
				try {
					const response = await getMetrics(acessToken);
					const { pendente, concluida } = response.data;
					setTotalTasks((prevstate) => ({
						...prevstate,
						pendente,
						concluida,
					}));
				} catch (error) {
					return error.message;
				} finally {
					setLoading(false);
				}
			};
			getTotalPendingTasks();
		}
	}, [acessToken]);

	const context = {
		totalTasksPending: totalTasks.pendente,
		totalTasksCompleted: totalTasks.concluida,
		loading,
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
