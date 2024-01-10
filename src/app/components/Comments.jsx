import { commentsDt } from "@/Datacenter/Datacentre";
import Image from "next/image";

const Comments = () => {
	return (
		<section className="w-full px-6 pt-12 pb-6 bg-slate-800">
			<div className="grid max-w-6xl grid-cols-2 mx-auto gap-x-6 gap-y-12 place-items-center md:grid-cols-3 lg:grid-cols-4">
				{commentsDt.map((comment) => (
					<article
						className="relative  pt-[4rem] pb-[1rem] px-4 bg-slate-400/10 rounded-3xl "
						key={comment.id}
					>
						<div className="absolute left-[50%] -top-8 translate-x-[-50%]  ">
							<figure className=" relative  w-[80px] h-[80px] rounded-full border-4 border-[#ED7B59]">
								<Image
									src={comment.img}
									fill
									sizes="100%"
									alt="avatar"
									className="object-fill rounded-full "
								/>
							</figure>
						</div>
						<div>
							<q className=" text-slate-400">{comment.des}</q>
						</div>
						<button className="grid py-4 mx-auto mt-6 badge badge-secondary place-content-center w-[80%] badge-lg">
							{comment.user}
						</button>
					</article>
				))}
			</div>
		</section>
	);
};

export default Comments;
