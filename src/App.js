import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import PostForm from "./components/PostForm";

import PostList from "./components/PostList";
import PostListFilter from "./components/PostListFilter";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import MyModal from "./components/UI/MyModal/MyModal";
import { usePosts } from "./hooks/usePosts";
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";
import { useFetching } from "./hooks/useFetching";
import { getPageCount } from "./utils/pages";
import { usePagination } from "./hooks/usePagination";
import Pagination from "./components/UI/pagination/Pagination";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";
import { HashRouter } from "react-router-dom";

function App() {
	const [isAuth, setIsAuth] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		if (localStorage.getItem("auth")) {
			setIsAuth(true);
		}
		setIsLoading(false);
	}, [isAuth]);
	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
			<HashRouter>
				<Navbar />
				<AppRouter />
			</HashRouter>
		</AuthContext.Provider>
	);
}

export default App;
