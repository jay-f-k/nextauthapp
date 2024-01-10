import { ContactForm } from ".";

const Newsletter = () => {
	return (
		<section className=" w-full py-[2rem] px-6 md:2 bg-[#ED7B59]">
			<h2 className="py-2 mb-4 text-4xl tracking-wider text-center uppercase ">
				contact us
			</h2>
			<div className="flex flex-col max-w-3xl mx-auto md:flex-row ">
				<div className="flex flex-col w-full gap-4 p-2 md:w-1/2">
					<h4 className="text-2xl font-bold capitalize">Newsletter</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis obcaecati
						nam eos illo modi a, doloremque dignissimos recusandae tempore vel sunt,
						enim dicta molestias itaque ipsam quam voluptatum mollitia minus?
						Consequatur accusamus eum voluptatibus libero quibusdam provident
						molestiae amet unde!
					</p>
					<button className="py-4 capitalize bg-transparent badge badge-ghost">
						more details...
					</button>
				</div>
				<ContactForm />
			</div>
		</section>
	);
};

export default Newsletter;
