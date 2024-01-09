import Pagination from "../components/Pagination";
import TableEntryCard from "../components/TableEntryCard";
import DashboardCard from "../components/dashboardCard";
import { orderData } from "../components/data/orderData";
import PaymentNavbar from "../components/paymentNavbar";
const Dashboard = () => {
  return (
    <div className="w-full">
      <PaymentNavbar />

      <div className="p-6">
        <div className="flex justify-between">
          <div className="text-[20px] font-[500] text-black/12">Overview</div>
          <div className="">
            <select className="border-2 border-slate-200 flex justify-between px-2 focus:outline-none rounded text-sm">
              <option selected>Last Month</option>
              <option selected>Last Year</option>
              <option selected>Last 5 Years</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row flex-between md:space-x-4 my-3">
          <DashboardCard title={"Online orders"} value={"231"} />
          <DashboardCard
            title={"Amount received"}
            value={"Rs. 23,922,212.13"}
          />
        </div>
        <div className="text-[20px] font-[500] text-black/12 my-3">
          Transactions | This Month
        </div>
        <div className="mt-3 flex justify-between bg-white py-1">
          <div className="w-[250px] relative flex items-center text-[14px] ">
            <i className="fa fa-search absolute left-2 text-gray-300"></i>
            <input
              className="w-full focus:outline-none border border-1 py-2 pl-8 pr-2 rounded"
              placeholder="Search By OrderID..."
            />
          </div>
          <div className="flex gap-x-4">
            <button className="space-x-3 border rounded px-3 py-0 text-gray-500 hover:bg-gray-100">
              <span>Sort</span>
              <i className="fa fa-sort fa-xs p-1"></i>
            </button>
            <button className="space-x-3 border rounded px-3 py-0 text-gray-500 hover:bg-gray-100">
              <i className="fa fa-download fa-xs p-1"></i>
            </button>
          </div>
        </div>
        <div className="flex flex-col my-2">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-[#F2F2F2] text-gray-600">
                      <th
                        scope="col"
                        className="px-3 py-3 text-start text-[14px] font-[500]"
                      >
                        Order ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-[14px] font-[500]"
                      >
                        <span>Order date</span>
                        <i className="fa fa-angle-down fa-xs p-1"></i>
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-start text-[14px] font-[500]"
                      >
                        Order amount
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-[14px] font-[500]"
                      >
                        Transction fees
                        <i className="fa fa-info-circle fa-xs p-1"></i>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {orderData.map((val) => (
                      <TableEntryCard
                        key={val.orderId}
                        orderId={val.orderId}
                        orderDate={val.orderDate}
                        orderAmount={val.orderAmount}
                        transactionFees={val.transactionFees}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
