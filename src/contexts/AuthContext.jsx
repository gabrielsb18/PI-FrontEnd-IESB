import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { loginUser, postUser } from "../services/userService";
import { supabase } from "../clients/SupabaseClient";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);
	const [session, setSession] = useState(null)

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
		const result = await loginUser(data);

		if (result.success) {
			const {
				avatar,
				nome,
				acessToken,
				refreshToken,
				userId,
				email: emailUser,
			} = result.data;
	
			localStorage.setItem("@Notes:token", JSON.stringify(acessToken));
			localStorage.setItem("@Notes:refreshToken", JSON.stringify(refreshToken));
	
			api.defaults.headers.common["authorization"] = `Bearer ${acessToken}`;
	
			setData({ avatar, acessToken, refreshToken, userId, emailUser, nome });
	
			return {success: true, msg: result.data.msg};
		}

		return {sucess: false, msg: result.msg}
	}

	async function signUp(data) {
		const result = await postUser(data);

		if (result.sucess) {
			return {sucess: true, msg: result.data.msg};
		}

		return {sucess: false, msg: result.errors}
	}

	async function signOut() {
		localStorage.removeItem("@Notes:token");
		localStorage.removeItem("@Notes:refreshToken");
		setData({});
	}

	useEffect(() => {
		setLoading(true);
		const acessToken = localStorage.getItem("@Notes:token");
		const refreshToken = localStorage.getItem("@Notes:refreshToken");

		if (acessToken && refreshToken) {
			api.defaults.headers.common["authorization"] = `Bearer ${JSON.parse(acessToken)}`;
			setData({
				acessToken: JSON.parse(acessToken),
				refreshToken: JSON.parse(refreshToken),
			});
		};
		setLoading(false);

	}, []);

	useEffect(() => {
		supabase.auth.getSession().then(({ data: session }) => {
			setSession(session);
		});

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});

		return () => subscription.unsubscribe();
	}, []);

	console.log(session)


	async function signInWithGoogle() {
		await supabase.auth.signInWithOAuth({
			provider: "google",
		});
	};

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
		loading,

		signInWithGoogle,
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
