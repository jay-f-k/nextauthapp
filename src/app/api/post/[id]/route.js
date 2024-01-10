import ConnectDb from "@/DB/ConnectDb";
import UserPost from "@/Schemas/PostSchema";
import { NextResponse } from "next/server";

await ConnectDb();
export async function GET(req, { params }) {
	try {
		const id = params.id;

		const postId = await UserPost.findById({ _id: id });

		return NextResponse.json({ success: "ok", data: postId }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error: "failed request" }, { status: 400 });
	}
}
export async function PATCH(req, { params }) {
	try {
		const reqBody = await req.json();
		const { title, post } = reqBody;

		if (!title || !post) {
			return NextResponse.json({ err: "Invalid Credential" }, { status: 200 });
		}
		const newPost = {
			title,
			post,
		};
		await UserPost.findByIdAndUpdate({ _id: params.id }, newPost);

		return NextResponse.json(
			{ success: "ok", msg: "post updated" },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json({ error: "failed request" }, { status: 400 });
	}
}
export async function DELETE(req, { params }) {
	try {
		await UserPost.findByIdAndDelete({ _id: params.id });

		return NextResponse.json(
			{ success: "ok", msg: "Post deleted successfully" },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json({ error: "failed request" }, { status: 400 });
	}
}
