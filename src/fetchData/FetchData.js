import axios from "axios";

export const getRegisteredUserData = async () => {
	const res = await axios.get("http://localhost:3000/api/register", {
		cache: "no-store",
	});
	return res.data.data[0];
};

export const updateRegisteredUserProfile = async () => {
	const res = await axios.get("http://localhost:3000/api/profile", {
		cache: "no-store",
	});
	return res.data.data;
};

export const getPostData = async () => {
	const res = await axios.get("http://localhost:3000/api/post", {
		cache: "no-store",
	});
	return res.data.data;
};

export const getSinglePost = async ({ id }) => {
	const res = await axios.get(`http://localhost:3000/api/post/${id}`, {
		cache: "no-store",
	});
	return res.data.data;
};
