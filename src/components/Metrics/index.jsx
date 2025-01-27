import { toast } from "sonner";
import { GrapicTasks } from "./GrapicTasks/GrapicTasks";
import { TotalCompletedTasks } from "./TotalCompletedTasks/TotalCompletedTasks";
import {
	TotalPendingTasks,
} from "./TotalPendingTasks/TotalPendingTasks";
import { ContainerGraphics } from "./Metrics.styles.js";
import { SkeletonMetrics } from "../Skeletons/SkeletonMetrics/SkeletonMetrics";
import { useMetrics } from "../../contexts/MetricsContext.jsx";

function Metrics() {
	const { loading, error } = useMetrics();

	if (error) {
		return toast.error(error);
	}

	return (
		<ContainerGraphics>
			{loading ? (
				<SkeletonMetrics />
			) : (
				<>
					<GrapicTasks />
					<TotalPendingTasks />
					<TotalCompletedTasks />
				</>
			)}
		</ContainerGraphics>
	);
}

export { Metrics };
