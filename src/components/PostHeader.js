const PostHeader = ({ year, day, title }) => {
  return (
    <div className="self-stretch rounded-[8px] bg-white shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] h-[65px] shrink-0 overflow-hidden flex flex-col p-[12px] box-border items-start justify-start text-left text-base text-gray-1000 font-inter">
      <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
        <div className="bg-gray-300 w-[40px] h-[41px] shrink-0 flex flex-col items-center justify-center gap-[2px]">
          <div className="relative leading-[16px] font-medium inline-block">
            {year}
          </div>
          <div className="relative leading-[16px] font-medium inline-block">
            {day}
          </div>
        </div>
        <div className="flex-[1] flex flex-col items-start justify-start text-3xl">
          <b className="self-stretch relative leading-[28px] inline-block">
            {title}
          </b>
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
