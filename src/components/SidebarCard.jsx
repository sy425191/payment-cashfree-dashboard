const SidebarCard = ({ icon, title, onClickHandler }) => {
  return (
    <div className="w-full flex justify-start items-center text-[14px] font-[400] py-2 my-1 rounded-lg cursor-pointer text-white/70 hover:bg-gray-400">
      <div className="w-[30px] flex justify-center">
        <i className={"text-[14px] fa fa-" + icon}></i>
      </div>
      <div>{title}</div>
    </div>
  );
};

export default SidebarCard;
