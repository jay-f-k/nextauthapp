import mongoose from "mongoose";

const ConnectDb = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URL);
	} catch (error) {
		throw new Error(error.message, "failed to connect");
	}
};

export default ConnectDb;
