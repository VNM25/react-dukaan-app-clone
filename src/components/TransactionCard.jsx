import {
  ArrowDownTrayIcon,
  ArrowsUpDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { TableCard } from "./TableCard";

export function TransactionCard() {
  return (
    <div className="mx-6 my-6">
      <div className="font-medium text-lg">Transaction | This Month</div>
      <div className="flex flex-start gap-2 my-6">
        <div className="rounded-full bg-gray-200 p-2 px-4 text-xs text-gray-600">
          Payouts (22)
        </div>
        <div className="rounded-full bg-sky-700 p-2 px-4 text-xs text-white">
          Refunds (6)
        </div>
      </div>
      <div className="bg-white rounded">
        <div className="flex justify-between p-1">
          <div className="flex border-2 border-gray-200 rounded p-1">
            <MagnifyingGlassIcon className="size-4 mx-3 stroke-1"></MagnifyingGlassIcon>
            <input
              type="text"
              name="search-box"
              placeholder="Order ID or transaction ID"
              className="text-sm"
            />
          </div>
          <div className="flex gap-3">
            <div className="flex border-2 border-gray-200 rounded p-1 gap-2 px-2">
              <div className="text-sm">Sort</div>
              <ArrowsUpDownIcon className="size-3 mt-1"></ArrowsUpDownIcon>
            </div>
            <div className="flex border-2 border-gray-200 rounded p-1 px-3">
              <ArrowDownTrayIcon className="size-5"></ArrowDownTrayIcon>
            </div>
          </div>
        </div>
        <TableCard></TableCard>
      </div>
    </div>
  );
}
