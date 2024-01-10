import React from "react";

const LoginForm = ({ formDt, LoginUser, HandleChange }) => {
	return (
		<form
			onSubmit={LoginUser}
			className="flex flex-col w-full gap-4 mt-[2rem] "
		>
			<input
				type="email"
				name="email"
				id="email"
				value={formDt.email}
				placeholder="email"
				className="w-full input input-bordered text-slate-300"
				required
				onChange={HandleChange}
			/>
			<input
				type="password"
				name="password"
				id="password"
				value={formDt.password}
				placeholder="password"
				className="w-full input input-bordered text-slate-300"
				required
				onChange={HandleChange}
			/>

			<button
				className="mt-6 font-bold tracking-wider uppercase rounded-full shadow-2xl btn btn-secondary"
				type="submit"
			>
				submit
			</button>
		</form>
	);
};

export default LoginForm;
