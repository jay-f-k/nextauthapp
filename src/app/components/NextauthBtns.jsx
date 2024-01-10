"use client";

import { signIn } from "next-auth/react";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";

const NextauthBtns = () => {
	return (
		<section className="flex flex-col gap-4 ">
			<button
				className="flex items-center justify-center w-full text-xl tracking-wider capitalize btn"
				onClick={() => signIn("google", { callbackUrl: "/profile" })}
			>
				<AiFillGoogleCircle /> signin with google
			</button>
			<button
				className="flex items-center justify-center w-full text-xl tracking-wider capitalize btn"
				onClick={() => signIn("github", { callbackUrl: "/profile" })}
			>
				<AiFillGithub /> signin with Github
			</button>
		</section>
	);
};

export default NextauthBtns;
