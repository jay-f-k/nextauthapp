"use client";

import { useState } from "react";

const ContactForm = () => {
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email);
		setEmail("");
	};
	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col w-full gap-4 p-2 md:w-1/2 "
		>
			<h4 className="text-2xl font-bold capitalize">Subcribe </h4>
			<p className="">
				Subcribe to our newletter so you will be the first to get the latest as
				regards to our latest development and addition to the website..{" "}
			</p>
			<input
				type="text"
				className=" input bg-slate-300/30"
				value={email}
				name="email"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<button
				type="submit"
				className="text-xl font-bold uppercase btn btn-primary"
			>
				submit
			</button>
		</form>
	);
};

export default ContactForm;
