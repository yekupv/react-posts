import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "../context";
import About from "../pages/About";
import Error from "../pages/Error";
import Posts from "../pages/Posts";
import { privateRoutes, publicRoutes } from "../routes/routes";
import Loader from "./UI/loader/Loader";
const AppRouter = (props) => {
	const { isAuth, isLoading } = useContext(AuthContext);

	if (isLoading) return <Loader />;
	return isAuth ? (
		<Routes>
			{privateRoutes.map((route) => (
				<Route
					key={route.path}
					path={route.path}
					element={<route.element />}
				/>
			))}
			<Route path='/*' element={<Navigate to='/posts' replace />} />)
		</Routes>
	) : (
		<Routes>
			{publicRoutes.map((route) => (
				<Route
					key={route.path}
					path={route.path}
					element={<route.element />}
				/>
			))}
			<Route path='/*' element={<Navigate to='/login' replace />} />)
		</Routes>
	);
};

export default AppRouter;
