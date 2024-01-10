"use client";

import Link from "next/link";
import { useState } from "react";
import { SignUpForm } from "../components";
import axios from "axios";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
	const router = useRouter();
	const [formDt, setFormDt] = useState({
		username: "",
		email: "",
		password: "",
		renter_password: "",
	});
	const HandleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		setFormDt((prevdata) => {
			return {
				...prevdata,
				[name]: value,
			};
		});
	};

	const RegisterUser = async (e) => {
		e.preventDefault();

		const password = formDt.password === formDt.renter_password;
		if (!password) {
			throw new Error("unmatched password");
		}

		const formData = {
			username: formDt.username,
			email: formDt.email,
			password: formDt.password,
		};
		try {
			await axios.post("/api/register", formData);
			console.log("sent successfully");
		} catch (error) {
			throw new Error(error.message);
		} finally {
			setFormDt({});
			router.push("/login");
		}
	};

	return (
		<div className="flex items-center justify-center w-full h-full text-slate-400 ">
			<div className="w-full bg-slate-800 h-full rounded-3xl  mx-auto max-w-[400px] p-4 ">
				<h2 className="mb-4 text-3xl font-bold tracking-wider text-center capitalize ">
					sign Up
				</h2>
				<SignUpForm
					formDt={formDt}
					RegisterUser={RegisterUser}
					HandleChange={HandleChange}
				/>
				<p className="mt-3 text-sm text-center capitalize text-slate-500 ">
					have an account ?
					<Link
						className="ml-4 underline badge text-primary/40"
						href={"/login"}
					>
						login here...
					</Link>
				</p>
			</div>
		</div>
	);
};

export default SignUpPage;
