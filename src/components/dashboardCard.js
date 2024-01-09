const DashboardCard = ({ title, value }) => {
  return <div className="w-full h-[118px] rounded bg-white flex flex-col justify-between p-[20px]">
    <div className="text-[16px] font-[400]">{title}</div>
    <div className="text-[32px] font-[500]">{value}</div>
  </div>;
};

export default DashboardCard;
