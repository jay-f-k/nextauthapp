import ConnectDb from "@/DB/ConnectDb";
import userProfileAcc from "@/Schemas/ProfileSchema";
import { NextResponse } from "next/server";

await ConnectDb();
export async function PATCH(req, { params }) {
	try {
		const id = await params?.id;
		const reqBody = await req.json();
		const { fullname, telephone, imageUrl, category, country, address, yoe } =
			reqBody;
		const newProfile = {
			fullname,
			telephone,
			imageUrl,
			category,
			country,
			address,
			yoe,
		};

		await userProfileAcc.findByIdAndUpdate({ _id: id }, newProfile);
		return NextResponse.json({ msg: "profile UPDATED.." }, { status: 201 });
	} catch (error) {
		return NextResponse.json({ error: "request failed.." }, { status: 404 });
	}
}

export async function GET(req, { params }) {
	try {
		const id = await params?.id;

		const resp = await userProfileAcc.findById({ _id: id });
		return NextResponse.json({ success: "ok", data: resp }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error: "request failed.." }, { status: 400 });
	}
}
