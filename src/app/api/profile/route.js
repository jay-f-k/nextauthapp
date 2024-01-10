import ConnectDb from "@/DB/ConnectDb";
import userProfileAcc from "@/Schemas/ProfileSchema";
import { NextResponse } from "next/server";

await ConnectDb();
export async function POST(req) {
	try {
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
		await userProfileAcc.create(newProfile);
		return NextResponse.json({ msg: "profile Created.." }, { status: 201 });
	} catch (error) {
		return NextResponse.json({ error: "request failed.." }, { status: 404 });
	}
}

export async function GET() {
	try {
		const resp = await userProfileAcc.find();
		return NextResponse.json({ success: "ok", data: { resp } }, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ error: "unable to complete request" },
			{ status: 400 }
		);
	}
}
