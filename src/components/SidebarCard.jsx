const SidebarCard = ({ icon, title, onClickHandler }) => {
  return (
    <div className="w-full flex justify-start items-center text-[14px] font-[400] py-2 rounded-lg cursor-pointer text-slate-200 hover:bg-gray-300 hover:text-slate-700">
      <div className="w-[30px] flex justify-center">
        <i className={"text-[14px] fa fa-" + icon}></i>
      </div>
      <div>{title}</div>
    </div>
  );
};

export default SidebarCard;
