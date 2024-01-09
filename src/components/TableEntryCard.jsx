const TableEntryCard = ({orderId, orderAmount, orderDate, transactionFees}) => {
  return (
    <tr>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {orderId}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm ">
        {orderDate}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm ">
        Rs. {orderAmount}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
       Rs. {transactionFees}
      </td>
    </tr>
  );
};

export default TableEntryCard;
