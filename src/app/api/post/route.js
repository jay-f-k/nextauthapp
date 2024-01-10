import ConnectDb from "@/DB/ConnectDb";
import UserPost from "@/Schemas/PostSchema";
import { NextResponse } from "next/server";

await ConnectDb();
export async function POST(req) {
	try {
		const reqBody = await req.json();
		const { title, post } = reqBody;

		if (!title || !post) {
			return NextResponse.json({ err: "Invalid Credential" }, { status: 200 });
		}
		await UserPost.create({
			title,
			post,
		});
		return NextResponse.json(
			{ msg: "Post created successfully" },
			{ status: 201 }
		);
	} catch (error) {
		return NextResponse.json({ msg: error.message }, { status: 400 });
	}
}
export async function GET(req) {
	try {
		const post = await UserPost.find({});
		return NextResponse.json({ success: "ok", data: post }, { status: 201 });
	} catch (error) {
		return NextResponse.json({ msg: error.message }, { status: 400 });
	}
}
