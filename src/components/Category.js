const Category = ({ icon, name }) => {
  return (
    <div className="self-stretch rounded-[6px] bg-white flex flex-row p-[6px] box-border items-center justify-start text-left text-xl text-gray-800 font-inter">
      <div className="flex flex-row items-center justify-start gap-[7px]">
        <img
          className="relative w-[14px] h-[14px] shrink-0 overflow-hidden"
          alt=""
          src={icon}
        />
        <div className="relative leading-[24px] inline-block">{name}</div>
      </div>
    </div>
  );
};

export default Category;
