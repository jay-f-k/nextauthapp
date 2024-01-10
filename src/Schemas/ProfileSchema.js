import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
	{
		fullname: {
			type: String,
			required: [true, "provide fullname"],
		},
		telephone: {
			type: String,
		},
		ImageUrl: {
			type: String,
		},
		category: {
			type: String,
		},
		country: {
			type: String,
		},
		address: {
			type: String,
			required: [true, "provide address "],
		},
		yoe: {
			type: String,
		},
		ProfileID: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true }
);

const userProfileAcc =
	mongoose.models.userProfileAcc ||
	mongoose.model("userProfileAcc", profileSchema);

export default userProfileAcc;
