import React, { useContext } from "react";
import { AuthContext } from "../context";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const Login = (props) => {
	const { isAuth, setIsAuth } = useContext(AuthContext);
	const login = (e) => {
		e.preventDefault();
		setIsAuth(true);
		localStorage.setItem("auth", "true");
	};
	return (
		<div>
			<h1>Login page</h1>
			<form onSubmit={(e) => login(e)}>
				<MyInput type='text' placeholder='enter username' />
				<MyInput type='password' placeholder='enter password' />
				<MyButton>Sign in</MyButton>
			</form>
		</div>
	);
};

export default Login;
