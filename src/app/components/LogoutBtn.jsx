"use client";

import { signOut } from "next-auth/react";

const LogoutBtn = () => {
	return (
		<button
			className="hidden ml-4 mr-8 capitalize btn btn-primary md:flex"
			onClick={() => signOut({ callbackUrl: "/login" })}
		>
			LogOut
		</button>
	);
};

export default LogoutBtn;
