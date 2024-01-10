import { getPostData, getSinglePost } from "@/fetchData/FetchData";
import { PostPage } from "../components";

const CreatePost = async () => {
	const postsData = await getPostData();

	const postUser = async ({ id }) => {
		"use server";
		const postInfo = await getSinglePost({ id });
		return postInfo;
	};

	return (
		<>
			<PostPage
				postsData={postsData}
				postUser={postUser}
			/>
		</>
	);
};

export default CreatePost;
