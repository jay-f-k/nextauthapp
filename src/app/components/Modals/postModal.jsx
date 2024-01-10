"use client";
import axios from "axios";
import { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";

const PostModal = ({ setIsPostModal, isPostModal, userInfo }) => {
	const { post, title, _id } = userInfo;

	const [postDt, setPostDt] = useState({
		title: title,
		post: post,
	});

	const HandlePost = (e) => {
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
		const id = _id;
		try {
			await axios.patch(`/api/post/${id}`, postDt);
		} catch (error) {
			throw new Error(error.message);
		} finally {
			location.reload();
			setIsPostModal(false);
		}
	};

	return (
		<section
			className={`fixed  z-20  bg-slate-900/80 flex justify-center transition-all  items-center inset-0     ${
				isPostModal ? `scale-[100%]` : `scale-[0%]`
			}`}
		>
			<div className="relative bg-slate-800 w-full  sm:w-[65%] max-w-[400px] rounded-2xl mx-auto px-4 py-12 ">
				<span className="absolute bg-slate-600 right-1 top-1">
					<AiFillCloseSquare
						role="button"
						onClick={() => setIsPostModal(false)}
						className="text-[2rem] "
					/>
				</span>
				<h2 className="py-4 text-2xl text-center uppercase text-slate-700 ">
					update Post
				</h2>

				<form
					onSubmit={UpdatePost}
					className="flex flex-col w-full gap-4 "
				>
					<input
						type="text"
						name="title"
						id="title"
						value={postDt.title}
						placeholder="title"
						required
						className="w-full input input-bordered text-slate-300"
						onChange={HandlePost}
					/>
					<input
						type="text"
						name="post"
						id="post"
						value={postDt.post}
						placeholder="description..."
						required
						className="w-full input input-bordered text-slate-300"
						onChange={HandlePost}
					/>

					<button
						className="mt-4 text-lg font-bold tracking-wider capitalize rounded-full shadow-2xl btn btn-secondary"
						type="submit"
					>
						Update
					</button>
				</form>
			</div>
		</section>
	);
};

export default PostModal;
