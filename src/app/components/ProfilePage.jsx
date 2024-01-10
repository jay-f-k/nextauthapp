"use client";
import Image from "next/image";
import { ProfileModal, ProfileBtn } from "../components";
import { useState } from "react";
import axios from "axios";

const ProfilePage = ({ getProfile, userData }) => {
	const user = userData.resp[0];
	const id = user?._id;
	const [isModelOpen, setIsModelOpen] = useState(false);
	const [profileSlug, setProfileSlug] = useState();
	const { username, email } = getProfile;

	const [formDt, setFormDt] = useState({
		fullname: "unknown",
		telephone: "unknown",
		imageUrl: "unknown",
		category: "unknown",
		country: "unknown",
		address: "unknown",
		yoe: "unknown",
	});

	const UpdateProfile = async (e) => {
		e.preventDefault();
		const id = profileSlug;
		try {
			await axios.patch(`/api/profile/${id}`, formDt);
		} catch (error) {
			throw new Error(error.message);
		} finally {
			setIsModelOpen(false);
			location.reload();
		}
	};
	const InitProfileUpdata = async () => {
		try {
			await axios.post("/api/profile", formDt);
		} catch (error) {
			throw new Error(error.message);
		}
	};
	const checkproifleid = async () => {
		const userId = await userData.resp[0];
		const slugId = userId?._id;
		return slugId;
	};
	const getProfileId = async () => {
		InitProfileUpdata();
		const slugId = await checkproifleid();
		setProfileSlug(slugId);
		setIsModelOpen(true);
	};

	return (
		<div className="min-h-full p-6 bg-slate-800">
			{isModelOpen && (
				<ProfileModal
					setIsModelOpen={setIsModelOpen}
					isModelOpen={isModelOpen}
					UpdateProfile={UpdateProfile}
					formDt={formDt}
					setFormDt={setFormDt}
				/>
			)}
			<div className=" flex md:flex-row h-full flex-col items-center justify-center bg-slate-300 w-full max-w-4xl px-8 py-10 mx-auto rounded-[3rem] gap-0 md:gap-9 ">
				<div className="bg-secondary h-[575px] w-full  md:max-w-[300px] text-center sm:text-start   shadow-2xl rounded-2xl ">
					<div className="w-full h-full rounded-2xl bg-slate-300">
						<div className="relative w-full rounded-t-2xl  h-[200px] ">
							<Image
								src={"/potraits.jpeg"}
								priority
								fill
								sizes="100%"
								alt="profile"
								className="object-center rounded-t-2xl"
							/>
						</div>
						<div className="py-4 text-center text-gray-800 bg-[#ED7B59] border-[#ED7B59] border-b-2 ">
							<h3 className="text-2xl font-extrabold capitalize ">{username}</h3>
							<h3 className="text-sm font-extrabold capitalize ">{email}</h3>
							<h6 className="mt-2 text-xs text-zinc-500">+233 444 555 666</h6>
						</div>
						<div className="flex flex-col gap-2 px-4 py-2 tracking-wider sm:justify-between md:justify-normal sm:h-[250px] md:h-auto text-gray-300 bg-slate-800 md:gap-6">
							<div className="flex flex-col text-xs capitalize shadow-2xl ">
								<span className="pb-1 font-medium text-secondary">fullname</span>
								<p className="font-semibold uppercase ">
									{user?.fullname ? user.fullname : "unknown"}
								</p>
							</div>
							<div className="flex flex-col w-full gap-2 sm:flex-row ">
								<div className="flex flex-col w-full text-xs capitalize shadow-2xl md:w-1/2 ">
									<span className="font-bold text-secondary">category</span>
									<p className="uppercase ">
										{user?.category ? user.category : "unknown"}
									</p>
								</div>
								<div className="flex flex-col w-full text-xs capitalize shadow-2xl md:w-1/2 ">
									<span className="font-bold text-secondary">experiences</span>
									<p className="uppercase">{user?.yoe ? user.yoe : "unknown"}</p>
								</div>
							</div>
							<div className="flex flex-col w-full gap-2 sm:flex-row ">
								<div className="flex flex-col w-full text-xs capitalize shadow-2xl md:w-1/2 ">
									<span className="font-bold text-secondary">address</span>
									<p className="capitalize ">
										{user?.address ? user.address : "unknown"}
									</p>
								</div>
								<div className="flex flex-col w-full text-xs capitalize shadow-2xl md:w-1/2 ">
									<span className="font-bold text-secondary">country</span>
									<p className="uppercase">
										{user?.country ? user.country : "unknown"}{" "}
									</p>
								</div>
							</div>
							<ProfileBtn getProfileId={getProfileId} />
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-between w-full my-4 gap-y-4 md:gap-y-9 h-[575px] ">
					<div className="shadow-2xl h-1/2 bg-secondary rounded-3xl">
						<div className="flex flex-col h-full gap-2 p-4 text-xs rounded-3xl bg-slate-800">
							<p className="text-xl tracking-wider text-center capitalize text-secondary ">
								portfolio
							</p>
							<div className="flex flex-col h-full gap-3 text-slate-200">
								<div className="flex flex-col w-full ">
									<p className="font-bold uppercase ">html</p>
									<progress
										className="w-100 progress progress-primary"
										value={100}
										max="100"
									></progress>
								</div>
								<div className="flex flex-col ">
									<p className="font-bold uppercase ">css</p>
									<progress
										className="w-100 progress progress-primary"
										value={80}
										max="100"
									></progress>
								</div>
								<div className="flex flex-col ">
									<p className="font-bold uppercase ">javascript</p>
									<progress
										className="w-100 progress progress-primary"
										value={50}
										max="100"
									></progress>
								</div>
								<div className="flex flex-col ">
									<p className="font-bold uppercase ">reacte</p>
									<progress
										className="w-100 progress progress-primary"
										value={85}
										max="100"
									></progress>
								</div>
								<div className="flex flex-col ">
									<p className="font-bold uppercase ">next js</p>
									<progress
										className="w-100 progress progress-primary"
										value={85}
										max="100"
									></progress>
								</div>
							</div>
						</div>
					</div>
					<div className="shadow-2xl bg-accent rounded-3xl h-1/2">
						<div className="flex flex-col h-full gap-2 p-4 text-xs text-secondary rounded-3xl bg-slate-800">
							<p className="text-xl font-bold tracking-wider text-center capitalize text-accent ">
								projects
							</p>
							<div className="flex flex-wrap items-center justify-center h-full gap-4 capitalize">
								<div
									className="flex flex-col items-center justify-center radial-progress"
									style={{ "--value": "100", "--size": "5rem", "--thickness": "4px" }}
									role="progressbar"
								>
									<span className="text-2xl text-secondary ">10+</span>
									HTML
								</div>
								<div
									className="flex flex-col items-center justify-center radial-progress"
									style={{ "--value": "100", "--size": "5rem", "--thickness": "4px" }}
									role="progressbar"
								>
									<span className="text-2xl text-secondary ">5+</span>
									CSS
								</div>
								<div
									className="flex flex-col items-center justify-center radial-progress"
									style={{ "--value": "100", "--size": "5rem", "--thickness": "4px" }}
									role="progressbar"
								>
									<span className="text-2xl text-secondary ">10+</span>
									frondEnd
								</div>
								<div
									className="flex flex-col items-center justify-center radial-progress"
									style={{ "--value": "100", "--size": "5rem", "--thickness": "4px" }}
									role="progressbar"
								>
									<span className="text-2xl text-secondary ">15+</span>
									backEnd
								</div>
								<div
									className="flex flex-col items-center justify-center radial-progress"
									style={{ "--value": "100", "--size": "5rem", "--thickness": "4px" }}
									role="progressbar"
								>
									<span className="text-2xl text-secondary ">15+</span>
									fullStack
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
