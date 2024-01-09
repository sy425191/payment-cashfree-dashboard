const DashboardCard = ({ title, value }) => {
  return <div className="bg-slate-100 w-full h-[118px] rounded flex flex-col justify-between p-[20px]">
    <div className="text-[16px] font-[400]">{title}</div>
    <div className="text-[32px] font-[500]">{value}</div>
  </div>;
};

export default DashboardCard;
