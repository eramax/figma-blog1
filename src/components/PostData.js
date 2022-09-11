import PostBody from "../components/PostBody";
import Comments from "../components/Comments";

const PostData = ({ text }) => {
  return (
    <div className="overflow-y-auto flex flex-col p-[0px_0px_30px] box-border items-start justify-start gap-[15px] text-left text-xl text-black font-inter px-4">
      <PostBody text={text} />
      <Comments />
    </div>
  );
};

export default PostData;
