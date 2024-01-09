const TableEntryCard = ({
  orderId,
  orderAmount,
  orderDate,
  transactionFees,
}) => {
  return (
    <tr className="bg-white">
      <td class="pl-2 pr-6 py-3 whitespace-nowrap text-[#146EB4] text-[14px] font-[500]">
        #{orderId}
      </td>
      <td class="px-6 py-3 whitespace-nowrap text-[14px] font-[400]">
        {orderDate}
      </td>
      <td class="px-6 py-3 whitespace-nowrap text-[14px] font-[400] ">
        ₹{orderAmount}
      </td>
      <td class="px-6 py-3 whitespace-nowrap text-end text-[14px] font-[400]">
        ₹{transactionFees}
      </td>
    </tr>
  );
};

export default TableEntryCard;
