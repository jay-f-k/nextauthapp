"use client";
import { AiFillCloseSquare } from "react-icons/ai";

const ProfileModal = ({
	setIsModelOpen,
	isModelOpen,
	UpdateProfile,
	formDt,
	setFormDt,
}) => {
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

	return (
		<section
			className={`fixed  z-20  bg-slate-900/80 flex justify-center transition-all  items-center inset-0     ${
				isModelOpen ? `scale-100` : `scale-0`
			}`}
		>
			<div className="relative w-full  sm:w-[65%] max-w-[400px] bg-slate-800 rounded-2xl mx-auto px-4 py-12 ">
				<span className="absolute bg-slate-600 right-1 top-1">
					<AiFillCloseSquare
						role="button"
						onClick={() => setIsModelOpen(false)}
						className="text-[2rem] "
					/>
				</span>
				<h2 className="py-4 text-2xl text-center uppercase ">update profile</h2>

				<form
					onSubmit={UpdateProfile}
					className="flex flex-col w-full gap-4 "
				>
					<input
						type="text"
						name="fullname"
						id="fullname"
						value={formDt.fullname}
						placeholder="fullname"
						required
						className="w-full input input-bordered text-slate-300"
						onChange={HandleChange}
					/>
					<input
						type="text"
						name="telephone"
						id="telephone"
						value={formDt.telephone}
						placeholder="(+234) 555 555 666"
						required
						className="w-full input input-bordered text-slate-300"
						onChange={HandleChange}
					/>
					<input
						type="url"
						name="imageUrl"
						id="imageUrl"
						value={formDt.imageUrl}
						placeholder="image url.."
						className="w-full input input-bordered text-slate-300"
						required
						onChange={HandleChange}
					/>
					<input
						type="text"
						name="category"
						id="category"
						value={formDt.category}
						placeholder="category"
						className="w-full input input-bordered text-slate-300"
						required
						onChange={HandleChange}
					/>
					<input
						type="text"
						name="country"
						id="country"
						value={formDt.country}
						placeholder="country"
						className="w-full input input-bordered text-slate-300"
						required
						onChange={HandleChange}
					/>
					<input
						type="text"
						name="address"
						id="address"
						value={formDt.address}
						placeholder="address"
						className="w-full input input-bordered text-slate-300"
						required
						onChange={HandleChange}
					/>
					<input
						type="text"
						name="yoe"
						id="yoe"
						value={formDt.yoe}
						placeholder="years of yoe"
						className="w-full input input-bordered text-slate-300"
						required
						onChange={HandleChange}
					/>

					<button
						className="mt-4 font-bold tracking-wider uppercase rounded-full shadow-2xl btn btn-secondary"
						type="submit"
					>
						save
					</button>
				</form>
			</div>
		</section>
	);
};

export default ProfileModal;
