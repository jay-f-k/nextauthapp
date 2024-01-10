import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "please provide a title"],
			minLength: [2, "tite must not be less than 2 characters"],
		},
		post: {
			type: String,
			required: [true, "enter post"],
			minLength: [5, "post must not be less than 2 characters"],
			maxLength: [50, "post must be lesser than 15  characters"],
		},
		postID: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true }
);

const UserPost =
	mongoose.models.UserPost || mongoose.model("UserPost", postSchema);

export default UserPost;
