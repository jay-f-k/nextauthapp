const SignUpForm = ({ formDt, RegisterUser, HandleChange }) => {
	return (
		<form
			onSubmit={RegisterUser}
			className="flex flex-col w-full gap-4 "
		>
			<input
				type="text"
				name="username"
				id="username"
				value={formDt.username}
				placeholder="username"
				required
				className="w-full input input-bordered text-slate-300"
				onChange={HandleChange}
			/>
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
			<input
				type="password"
				name="renter_password"
				id="renter_password"
				value={formDt.renter_password}
				placeholder="renter_password"
				className="w-full input input-bordered text-slate-300"
				required
				onChange={HandleChange}
			/>

			<button
				className="mt-4 font-bold tracking-wider uppercase rounded-full shadow-2xl btn btn-secondary"
				type="submit"
			>
				submit
			</button>
		</form>
	);
};

export default SignUpForm;
