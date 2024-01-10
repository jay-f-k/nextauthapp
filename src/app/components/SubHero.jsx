import { subheroimg } from "@/Datacenter/Datacentre";
import Image from "next/image";
import Link from "next/link";

const SubHero = () => {
	return (
		<section className="relative w-full py-8 bg-slate-800">
			<h2 className="py-2 mb-6 text-4xl tracking-wider text-center uppercase">
				about us
			</h2>
			<div className="relative z-10 grid grid-cols-1 gap-8 px-6 mx-auto max-w-7xl lg:px-0 md:grid-cols-2 lg:grid-cols-3 ">
				{subheroimg.map((item) => (
					<Link
						key={item.url}
						href={item.url}
					>
						<article className=" mx-auto relative rounded-3xl  bg-white/[0.02] hover:bg-white/[0.03] focus:bg-white/[0.03]  p-4 h-[400px]">
							<Image
								src={item.img}
								alt="tech image"
								fill
								sizes="100%"
								className="object-cover"
							/>
						</article>
					</Link>
				))}
			</div>
			<div className="absolute top-0 left-0  bg-lime-700/[0.3] blur-[12rem] w-[250px] h-[250px] rounded-full z-5"></div>
			<div className="absolute bottom-0-0 right-0  bg-purple-700/[0.3] blur-[15rem] w-[250px] h-[250px] rounded-full z-5"></div>
		</section>
	);
};

export default SubHero;
