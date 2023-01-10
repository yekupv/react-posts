import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
const PostIdPage = (props) => {
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);
	const params = useParams();
	const [fetchPostById, isPostLoading, postError] = useFetching(
		async (id) => {
			const response = await PostService.getById(id);
			setPost(response.data);
		}
	);
	const [fetchComments, isCommentsLoading, commentError] = useFetching(
		async (id) => {
			const response = await PostService.getByCommentsbyPostId(id);
			setComments(response.data);
		}
	);

	useEffect(() => {
		fetchPostById(params.id);
		fetchComments(params.id);
	}, []);
	return (
		<div>
			<h1>You opened post with id = {params.id}</h1>
			{isPostLoading ? (
				<Loader />
			) : (
				<div>
					{post.id}, {post.title}
				</div>
			)}
			<h1 style={{ marginTop: 15 }}>Comments</h1>

			{isCommentsLoading ? (
				<Loader />
			) : (
				<div>
					{comments.map((comment) => (
						<div key={comment.id} style={{ marginTop: 20 }}>
							<h5> {comment.email}</h5>
							<div> {comment.body}</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default PostIdPage;
