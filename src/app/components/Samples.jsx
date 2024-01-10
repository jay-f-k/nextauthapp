import { sampleDatas } from "@/Datacenter/Datacentre";
import Image from "next/image";

const Samples = () => {
	return (
		<section className="w-full py-8 ">
			<h2 className="py-2 mb-6 text-4xl tracking-wider text-center uppercase">
				services
			</h2>
			<div className="flex flex-col h-auto max-w-5xl gap-8 mx-auto ">
				{sampleDatas.map((item) => (
					<article
						key={item.id}
						className="flex flex-col w-full gap-4 p-4 md:flex-row"
					>
						<div
							className={`p-4 min-h-[300px] md:w-1/2  ${
								item.id % 2 === 0 ? `md:order-1` : `md:order-2`
							} `}
						>
							<h4 className="mb-6 text-2xl text-center capitalize ">{item.title}</h4>
							<p className="tracking-wider text-justify ">{item.des}</p>
						</div>
						<div className={`relative w-full min-h-[350px] md:w-1/2 md:order-1`}>
							<Image
								src={item.img}
								alt={item.title}
								fill
								sizes="100%"
								className="object-fill rounded-3xl"
							/>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default Samples;
