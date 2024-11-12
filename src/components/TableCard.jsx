export function TableCard() {
  return (
    <div class="relative overflow-x-auto mt-4 px-2">
      <table class="w-full text-sm text-left rtl:text-right text-gray-700">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-2">
              Order ID
            </th>
            <th scope="col" className="px-6 py-2">
              Status
            </th>
            <th scope="col" className="px-6 py-2">
              Transaction ID
            </th>
            <th scope="col" className="px-6 py-2">
              Refund Date
            </th>
            <th scope="col" className=" py-2 text-right">
              Order Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {TableData.map((data) => {
            let bgColor = STATUS[data["Status"]];
            console.log("🚀 ~ {TableData.map ~ bgColor:", bgColor)
            return (
              <tr className="bg-white border-b titlecase capitalize text-xs font-medium">
                <td className="px-6 py-3 text-sky-700">{data["Order ID"]}</td>
                <td className="px-6 py-3 flex gap-2">
                  <div className={`${bgColor}`}></div>
                  <div>{data["Status"]}</div>
                </td>
                <td className="px-6 py-3">{data["Transaction ID"]}</td>
                <td className="px-6 py-3">{data["Refund Date"]}</td>
                <td className="py-3 text-right">{data["Order Amount"]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const STATUS = {
  'successful' : "rounded-full p-1 place-self-center bg-green-500",
  'processing' : "rounded-full p-1 place-self-center bg-gray-500",
  'failed' : "rounded-full p-1 place-self-center bg-red-500",
}

const TableData = [
  {
    "Order ID": "#100001",
    "Status": "successful",
    "Transaction ID": "123456789012",
    "Refund Date": "01 Oct 2023, 14:30",
    "Order Amount": 1234.56,
  },
  {
    "Order ID": "#100002",
    "Status": "processing",
    "Transaction ID": "987654321098",
    "Refund Date": "02 Oct 2023, 10:15",
    "Order Amount": 2345.67,
  },
  {
    "Order ID": "#100003",
    "Status": "failed",
    "Transaction ID": "456789123456",
    "Refund Date": "03 Oct 2023, 09:45",
    "Order Amount": 3456.78,
  },
  {
    "Order ID": "#100004",
    "Status": "successful",
    "Transaction ID": "321654987321",
    "Refund Date": "04 Oct 2023, 16:00",
    "Order Amount": 4567.89,
  },
  {
    "Order ID": "#100005",
    "Status": "processing",
    "Transaction ID": "654321789654",
    "Refund Date": "05 Oct 2023, 12:30",
    "Order Amount": 5678.9,
  },
  {
    "Order ID": "#100006",
    "Status": "failed",
    "Transaction ID": "789012345678",
    "Refund Date": "06 Oct 2023, 08:00",
    "Order Amount": 6789.01,
  },
  {
    "Order ID": "#100007",
    "Status": "successful",
    "Transaction ID": "234567890123",
    "Refund Date": "07 Oct 2023, 11:20",
    "Order Amount": 7890.12,
  },
  {
    "Order ID": "#100008",
    "Status": "processing",
    "Transaction ID": "345678901234",
    "Refund Date": "08 Oct 2023, 15:45",
    "Order Amount": 8901.23,
  },
  {
    "Order ID": "#100009",
    "Status": "failed",
    "Transaction ID": "456789012345",
    "Refund Date": "09 Oct 2023, 13:10",
    "Order Amount": 9012.34,
  },
  {
    "Order ID": "#100010",
    "Status": "successful",
    "Transaction ID": "567890123456",
    "Refund Date": "10 Oct 2023, 17:05",
    "Order Amount": 1234.56,
  },
  {
    "Order ID": "#100011",
    "Status": "processing",
    "Transaction ID": "678901234567",
    "Refund Date": "11 Oct 2023, 09:00",
    "Order Amount": 2345.67,
  },
  {
    "Order ID": "#100012",
    "Status": "failed",
    "Transaction ID": "789012345678",
    "Refund Date": "12 Oct 2023, 14:45",
    "Order Amount": 3456.78,
  },
  {
    "Order ID": "#100013",
    "Status": "successful",
    "Transaction ID": "890123456789",
    "Refund Date": "13 Oct 2023, 11:30",
    "Order Amount": 4567.89,
  },
  {
    "Order ID": "#100014",
    "Status": "processing",
    "Transaction ID": "901234567890",
    "Refund Date": "14 Oct 2023, 16:20",
    "Order Amount": 5678.9,
  },
  {
    "Order ID": "#100015",
    "Status": "failed",
    "Transaction ID": "012345678901",
    "Refund Date": "15 Oct 2023, 08:15",
    "Order Amount": 6789.01,
  },
  {
    "Order ID": "#100016",
    "Status": "successful",
    "Transaction ID": "123456789012",
    "Refund Date": "16 Oct 2023, 10:00",
    "Order Amount": 7890.12,
  },
];
