import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
	const [data, setData] = useState({});

	useEffect(() => {
		const acessToken = localStorage.getItem("@Notes:token");
		
        if (acessToken) {
			const fetchUserData = async () => {
				try {
					const response = await api.get("/users", {
						headers: {
							authorization: `Bearer ${JSON.parse(acessToken)}`,
						},
					});
                    const { avatar, email: emailUser, nome, userId }= response.data;

                    setData(prevstate => ({
                        ...prevstate, 
                        avatar,
                        emailUser,
                        nome,
                        userId, 
                    }))
				} catch (error) {
					throw error;
				}
			};
            fetchUserData();
        } ;

    },[data.avatar]);	

	async function signIn(data) {
		try {
			const response = await api.post("/users/login", data);

			const {
                avatar,
                nome,
				acessToken,
				refreshToken,
				userId,
				email: emailUser,
			} = response.data;

			localStorage.setItem("@Notes:token", JSON.stringify(acessToken));
			localStorage.setItem("@Notes:refreshToken", JSON.stringify(refreshToken));

			api.defaults.headers.common["authorization"] = `Bearer ${acessToken}`;

			setData({ avatar, acessToken, refreshToken, userId, emailUser, nome });

			return response.data;
		} catch (error) {
			throw error;
		}
	}

	async function signUp(data) {
		try {
			const response = await api.post("/users/", data);

			return response.data;
		} catch (error) {
			throw error;
		}
	}

	async function signOut() {
		localStorage.removeItem("@Notes:token");
		localStorage.removeItem("@Notes:refreshToken");
		setData({});
	}

	useEffect(() => {
		const acessToken = localStorage.getItem("@Notes:token");
		const refreshToken = localStorage.getItem("@Notes:refreshToken");

		if (acessToken && refreshToken) {
			api.defaults.headers.common["authorization"] = `Bearer ${JSON.parse(acessToken)}`;
			setData({
				acessToken: JSON.parse(acessToken),
				refreshToken: JSON.parse(refreshToken),
			});
		};

	}, []);

	const contexto = {
		signIn,
		signUp,
		signOut,
        data,
		setData,
        avatar: data.avatar,
        nome: data.nome, 
		emailUser: data.emailUser,
		acessToken: data.acessToken,
		refreshToken: data.refreshToken,
		userId: data.userId,
	};

	return (
		<AuthContext.Provider value={contexto}>
            {children}
        </AuthContext.Provider>
	);
}

function useAuth() {
	const context = useContext(AuthContext);
	return context;
}

export { AuthProvider, useAuth };
