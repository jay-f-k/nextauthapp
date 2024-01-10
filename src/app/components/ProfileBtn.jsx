"use client";

const ProfileBtn = ({ getProfileId }) => {
	return (
		<button
			onClick={getProfileId}
			className=" mt-2 md:mt-6 text-lg capitalize rounded-full shadow-[4rem] btn btn-secondary"
		>
			edit profile
		</button>
	);
};

export default ProfileBtn;
