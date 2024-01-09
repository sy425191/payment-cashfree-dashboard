const Pagination = () => {
  return (
    <nav className="flex items-center gap-x-[8px]">
      <button
        type="button"
        className="h-[32px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-[14px] font-[500] rounded-lg border border-gray-200 hover:bg-gray-100"
      >
        <i className="fa fa-angle-left fa-xs pt-1"></i>
        <span className="hidden sm:block">Previous</span>
      </button>

      <PaginationBtn pageNumber={1} status={false} />

      <div className="hs-tooltip inline-block">
        <button
          type="button"
          className="hs-tooltip-toggle group min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-400 hover:text-blue-600 p-2 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-500 dark:hover:text-blue-500 dark:focus:bg-white/10"
        >
          <span className="group-hover:hidden text-xs">•••</span>
          <svg
            className="group-hover:block hidden flex-shrink-0 w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m6 17 5-5-5-5" />
            <path d="m13 17 5-5-5-5" />
          </svg>
        </button>
      </div>

      <PaginationBtn pageNumber={10} status={true} />
      <PaginationBtn pageNumber={11} status={false} />
      <PaginationBtn pageNumber={12} status={false} />

      <button
        type="button"
        className="py-1 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-[14px] font-[500] rounded-lg border border-gray-200 hover:bg-gray-100"
      >
        <span className="hidden sm:block">Next</span>
        <i className="fa fa-angle-right fa-xs pt-1"></i>
      </button>
    </nav>
  );
};

const PaginationBtn = ({ pageNumber, status }) => {
  return (
    <button
      type="button"
      className={"h-[28px] w-[28px] text-[14px] font-[400] flex justify-center items-center rounded " + (status ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100")}
    >
      {pageNumber}
    </button>
  );
};

export default Pagination;
