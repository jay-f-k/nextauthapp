import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import Image from "next/image";

const PostControl = ({ post, editPost, deletePost }) => {
	return (
		<article className="flex items-center justify-between gap-4 px-4 py-2 shadow-sm rounded-3xl shadow-slate-200 bg-slate-800">
			<figure className=" relative h-[80px] min-w-[80px] ">
				<Image
					src={"/people03.png"}
					fill
					priority
					sizes="100%"
					alt=" avatar"
					className="object-cover"
				/>
			</figure>
			<div className="flex-1 py-2 pl-3 ">
				<h4 className="text-lg font-semibold tracking-wider capitalize ">
					{post.title}
				</h4>
				<p className="  text-[0.7rem]">{post.post}</p>
			</div>
			<div className="flex flex-col items-center justify-center gap-3 ">
				<AiFillEdit
					onClick={() => editPost({ id: post._id })}
					role="button"
					className="text-[1.4rem] text-primary"
				/>
				<AiOutlineDelete
					onClick={() => deletePost({ id: post._id })}
					role="button"
					className="text-[1.4rem] text-red-400"
				/>
			</div>
		</article>
	);
};

export default PostControl;
