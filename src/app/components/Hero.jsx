import Image from "next/image";
import Link from "next/link";

const Hero = () => {
	return (
		<section className="relative py-12 ">
			<div className="flex flex-col justify-center max-w-5xl gap-3 p-4 mx-auto md:p-0 md:flex-row ">
				<div className="w-full min-h-[410px] p-4  md:w-1/2">
					<h1 className="py-2 ">eplore ai beyound all...</h1>
					<p className="mt-4 text-lg text-justify ">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
						molestiae, accusantium natus quis culpa expedita impedit nostrum maiores,
						rerum quos veniam? Facilis similique quo odit quisquam quos quibusdam nam
						provident.
					</p>
					<Link
						href={"/login"}
						className="mt-8 tracking-wider uppercase md:mt-4 btn btn-primary"
					>
						learn more..
					</Link>
				</div>
				<div className="relative min-h-[410px] w-full md:w-1/2">
					<Image
						src={"/robot.png"}
						alt="hero-image"
						fill
						sizes="100%"
						priority
						className="object-fill"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
