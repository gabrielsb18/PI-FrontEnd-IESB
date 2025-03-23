import { useAuth } from "../contexts/AuthContext";
import { BrowserRouter, Route, Routes as RoutesApp } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import Lpage from "../pages/Lpage/Lpage";

export function Routes() {
	const { acessToken, loading } = useAuth();

	if(loading){
		return null
	}

	return (
		<BrowserRouter>
			<RoutesApp>
				<Route path="/" element={<Lpage />} />
				{acessToken ? (
					<Route path="/*" element={<AppRoutes />} />
				) : (
					<Route path="/*" element={<AuthRoutes />} />
				)}
			</RoutesApp>
		</BrowserRouter>
	);
}
