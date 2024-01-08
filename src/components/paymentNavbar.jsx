const PaymentNavbar = () => {
  return (
    <div className="flex justify-between items-center border-b-2 px-5 w-full h-[64px]">
      <div className="flex flex-row">
        <span className="px-2 text-[15px] font-[400] text-gray-700">Payments</span>
        <span className="px-1 text-[12px] font-[400] flex items-center text-gray-700">
          <i className="fa fa-clock px-1"></i> How it works
        </span>
      </div>
      <div className="flex items-center min-w-[33%] relative">
        <i className="fa fa-search absolute left-2 text-gray-600"></i>
        <input
          type="text"
          placeholder="Search Features, Tutorials, etc. "
          className="pl-8 pr-2 py-2 text-[15px] font-[400] bg-slate-200 rounded w-full focus:outline-none"
        />
      </div>
      <div className="flex flex-row space-x-4 ">
        <div className="w-[35px] h-[35px] flex justify-center items-center bg-gray-300 rounded-3xl">
          <i className="fa fa-bullhorn"></i>
        </div>
        <div className="w-[35px] h-[35px] flex justify-center items-center bg-gray-300 rounded-3xl">
          <i className="fa fa-angle-down"></i>
        </div>
      </div>
    </div>
  );
};

export default PaymentNavbar;
