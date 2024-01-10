"use client";

import Link from "next/link";
import { useState } from "react";
import { LoginForm, NextauthBtns } from "../components";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const LoginPage = () => {
	const router = useRouter();
	const [formDt, setFormDt] = useState({
		email: "",
		password: "",
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

	const LoginUser = async (e) => {
		e.preventDefault();
		try {
			await signIn("credentials", {
				redirect: false,
				email: formDt.email,
				password: formDt.password,
				callbackUrl: "/profile",
			});
		} catch (error) {
			throw new Error(error.message);
		}
	};
	return (
		<div className="flex items-center justify-center w-full h-full text-slate-400 ">
			<div className="w-full bg-slate-800 h-full rounded-3xl mx-auto max-w-[400px] py-8 px-4 ">
				<h2 className="mb-4 text-3xl font-bold tracking-wider text-center capitalize ">
					log in
				</h2>
				<NextauthBtns />
				<LoginForm
					formDt={formDt}
					LoginUser={LoginUser}
					HandleChange={HandleChange}
				/>
				<p className="mt-8 text-sm text-center capitalize text-slate-500 ">
					dont gave an account ?
					<Link
						className="ml-4 underline text-primary/40 badge"
						href={"/register"}
					>
						register here...
					</Link>
				</p>
			</div>
		</div>
	);
};

export default LoginPage;
