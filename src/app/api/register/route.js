import ConnectDb from "@/DB/ConnectDb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/Schemas/UserSchema";

await ConnectDb();
export async function POST(req) {
	try {
		const rebody = await req.json();
		const { username, email, password } = rebody;

		if (!username || !email || !password) {
			return NextResponse.json({ err: "Invalid Credential" }, { status: 400 });
		}
		const newUser = await User.findOne({ email });

		if (newUser) {
			return NextResponse.json({ err: "user already exist" }, { status: 400 });
		}

		const hspasswrd = await bcrypt.hash(password, 10);

		const user = await User.create({
			email,
			username,
			password: hspasswrd,
		});

		return NextResponse.json(
			{ msg: "User Created Successfully" },
			{ status: 201 }
		);
	} catch (error) {
		return NextResponse.json({ esg: error.message }, { status: 400 });
	}
}
export async function GET() {
	try {
		const userProfile = await User.find({}, "-password -__v");

		return NextResponse.json(
			{ success: "ok", data: userProfile },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json({ esg: error.message }, { status: 400 });
	}
}
