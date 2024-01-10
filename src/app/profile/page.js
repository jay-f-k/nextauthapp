import { getServerSession } from "next-auth";
import { ProfilePage } from "../components";
import {
	getRegisteredUserData,
	updateRegisteredUserProfile,
} from "@/fetchData/FetchData";

const Profile = async () => {
	const getProfile = await getRegisteredUserData();
	const userData = await updateRegisteredUserProfile();

	return (
		<>
			<ProfilePage
				getProfile={getProfile}
				userData={userData}
			/>
		</>
	);
};

export default Profile;
