const PostBody = ({ text }) => {
  return (
    <div className="self-stretch flex flex-row p-[10px] box-border items-start justify-start text-left text-xl text-black font-inter">
      <div className="flex-[1] relative leading-[24px] inline-block">
        {text}
      </div>
    </div>
  );
};

export default PostBody;
