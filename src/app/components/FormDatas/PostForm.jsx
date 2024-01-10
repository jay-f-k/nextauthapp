"use client";

import axios from "axios";
import { useState } from "react";

const PostForm = () => {
	const [postDt, setPostDt] = useState({
		title: "",
		post: "",
	});

	const HandleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		setPostDt((prevdata) => {
			return {
				...prevdata,
				[name]: value,
			};
		});
	};

	const UpdatePost = async (e) => {
		e.preventDefault();
		try {
			console.log(postDt);
			await axios.post("/api/post", postDt);
		} catch (error) {
			throw new Error(error.message);
		} finally {
			location.reload();
		}
	};
	return (
		<form
			onSubmit={UpdatePost}
			className="flex flex-col w-full gap-4 mt-[2rem] "
		>
			<input
				type="text"
				name="title"
				id="title"
				value={postDt.title}
				placeholder="title"
				className="w-full input input-bordered text-slate-300"
				required
				onChange={HandleChange}
			/>
			<input
				type="text"
				name="post"
				id="post"
				value={postDt.post}
				placeholder="post"
				className="w-full input input-bordered text-slate-300"
				required
				onChange={HandleChange}
			/>

			<button
				className="mt-6 font-bold tracking-wider uppercase rounded-full shadow-2xl btn btn-secondary"
				type="submit"
			>
				post
			</button>
		</form>
	);
};

export default PostForm;
