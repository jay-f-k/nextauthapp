"use client";
import axios from "axios";
import { PostControl, PostForm } from "../components";
import PostModal from "../components/Modals/postModal";
import { useState } from "react";

const PostPage = ({ postsData, postUser }) => {
	const [isPostModal, setIsPostModal] = useState(false);
	const [userInfo, setUserInfo] = useState();

	const deletePost = async ({ id }) => {
		try {
			await axios.delete(`/api/post/${id}`);
		} catch (error) {
			throw new Error(error.message);
		} finally {
			location.reload();
		}
	};

	const editPost = async ({ id }) => {
		const resp = await postUser({ id });
		setUserInfo({ ...resp });
		setIsPostModal(true);
	};

	return (
		<section className="relative w-full h-full bg-slate-800 ">
			{isPostModal && (
				<PostModal
					setIsPostModal={setIsPostModal}
					isPostModal={isPostModal}
					userInfo={userInfo}
				/>
			)}
			<div className="w-full ">
				<div className=" w-[75%]  mx-auto sm:max-w-[400px] p-6">
					<h1 className="py-3 text-3xl font-bold tracking-wider text-center capitalize ">
						post page
					</h1>
					<PostForm />
				</div>
				<div className="max-w-4xl  mx-auto mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 bg-base-200 rounded-[4rem] py-[4rem] px-[3rem] sm:px-[6rem]">
					{postsData.length > 0 ? (
						postsData.map((post) => (
							<PostControl
								key={post.id}
								setIsPostModal={setIsPostModal}
								post={post}
								editPost={editPost}
								deletePost={deletePost}
							/>
						))
					) : (
						<div className="text-center ">
							<p className="text-3xl tracking-wider capitalize ">
								{postsData.length} post avaliable
							</p>
							<button className="mt-4 capitalize badge badge-primary">
								add post...
							</button>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default PostPage;
