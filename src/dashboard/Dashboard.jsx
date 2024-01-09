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
          <div className="text-lg font-semibold">Overview</div>
          <div className="">
            <select className="border-2 border-slate-200 flex justify-between px-2 focus:outline-none rounded text-sm">
              <option selected>Last Month</option>
              <option selected>Last Year</option>
              <option selected>Last 5 Years</option>
            </select>
          </div>
        </div>

        <div className="flex flex-between space-x-4 my-3">
          <DashboardCard title={"Online orders"} value={"231"} />
          <DashboardCard
            title={"Amount received"}
            value={"Rs. 23,922,212.13"}
          />
        </div>
        <div className="text-lg font-semibold my-3">
          Transactions | This Month{" "}
        </div>
        <div className="mt-3 flex justify-between">
          <div className="">
            <input className="" placeholder="Search By OrderID..." />
          </div>
          <div className="flex">
            <button className="">
              Sort
              <i className="fa fa-sort"></i>
            </button>
            <button className="">
              <i className="fa fa-download"></i>
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Order ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Order date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Order amount
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                      >
                        Transction fees <i className="fa fa-info"></i>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
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
