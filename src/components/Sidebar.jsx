import SidebarCard from "./SidebarCard";
import { SidebarColumns } from "./data/sidebar";

const Sidebar = () => {
  return (
    <div className="max-w-[220px] min-w-[220px] h-full flex flex-col justify-between bg-[#1E2640] text-white/90 p-3">
      <div className="">
        <div className="flex justify-between w-full h-[42px]">
          <div className="flex">
            <img src="/image.png" className="w-[40px] h-[40px] bg-white rounded">

            </img>
            <div className="flex flex-col justify-content-between ml-3">
              <span className="text-[15px] font-[500] text-gray-100">
                Saurabh
              </span>
              <span className="text-[13px] cursor-pointer font-[400] text-gray-300 underline underline-offset-2">
                Visit Store
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center px-3 ">
            <i className="fa fa-angle-down text-white"></i>
          </div>
        </div>
        <div className="mt-2">
          {SidebarColumns.map((val) => {
            return <SidebarCard key={val.key} icon={val.icon} title={val.title} />;
          })}
        </div>
      </div>
      <div className="w-full">
        <div className="w-full flex h-[54px] py-1 px-2 bg-[#353C53] rounded">
          <div className="flex justify-center items-center mr-2">
            <i className="fa fa-shopping-bag fa-md text-white bg-gray-600 px-2 py-2 rounded" />
          </div>
          <div className="flex flex-col justify-between">
            <span className="text-[13px] font-[400] text-white/80">
              Available credits
            </span>
            <span className="text-[16px] font-[500] text-white">222.40</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
