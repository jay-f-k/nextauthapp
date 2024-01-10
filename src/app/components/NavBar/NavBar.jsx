import Link from "next/link";
import { DataLinks } from "@/Datacenter/Datacentre";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/option";
import { LogoutBtn, SignoutBtn } from "..";

const NavBar = async () => {
	const session = await getServerSession(authOptions);

	return (
		<div className=" bg-slate-800">
			<nav className="max-w-5xl  h-[6rem] px-4 mx-auto navbar  lg::px-0">
				<div className="flex-1">
					<Link
						href={"/"}
						className="text-xl btn btn-ghost"
					>
						ExploreAl
					</Link>
				</div>
				<div className="flex-none gap-2">
					<ul className="flex gap-2">
						{DataLinks.map((item) => (
							<li
								key={item.label}
								className="hidden font-bold capitalize md:flex"
							>
								<Link
									className=" hover:bg-slate-400/[0.1] py-2 px-2 rounded-lg active:bg-slate-400/[0.1] focus:bg-slate-400/[0.1]"
									href={item.link}
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>

					{session?.user ? (
						<SignoutBtn />
					) : (
						<Link
							href={"/login"}
							className="hidden ml-4 mr-8 capitalize btn btn-primary md:flex"
						>
							login
						</Link>
					)}

					<div className="dropdown dropdown-end">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle avatar"
						>
							<figure className="relative h-[40px] w-[40px] rounded-full bg-slate-400 ">
								<Image
									alt="Tailwind CSS Navbar component"
									src={session?.user ? session?.user?.image : "/contact1.png"}
									fill
									sizes="100%"
									className="object-contain rounded-full "
								/>
							</figure>
						</div>
						<ul
							tabIndex={0}
							className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-slate-800 rounded-box w-52 gap-2 capitalize tracking-wider md:hidden"
						>
							<li>
								<Link
									href={"/"}
									className="justify-between"
								>
									Home
									<span className="badge">New</span>
								</Link>
							</li>
							<li>
								<Link
									href={"/profile"}
									className="justify-between"
								>
									profile
								</Link>
							</li>
							<li>
								<Link
									href={"/blog"}
									className="justify-between"
								>
									blog
								</Link>
							</li>
							<li>
								<Link
									href={"/post"}
									className="justify-between"
								>
									post
								</Link>
							</li>
							{session?.user ? (
								<SignoutBtn />
							) : (
								<Link
									href={"/login"}
									className="mt-3 font-bold tracking-wider capitalize btn"
								>
									login
								</Link>
							)}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
