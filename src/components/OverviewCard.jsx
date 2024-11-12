import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { RevenueCard } from "./RevenueCard";

export function OverviewCard() {
  return (
    <div className="mx-6 my-3">
      <div className="flex justify-between">
        <div className="font-medium text-lg">Overview</div>
        <div className="flex border-[1px] border-solid border-gray-300 p-1 bg-white rounded">
          <div className="text-sm">This Month</div>
          <ChevronDownIcon className="size-4 m-1"></ChevronDownIcon>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2 my-3">
        <div className="group bg-sky-700 text-white rounded">
          <RevenueCard
            props={{
              amount: 2312.23,
              title: "Next Payout",
              orders: 20,
              link: true,
            }}
          ></RevenueCard>
          <div className="flex justify-between text-xs bg-sky-900 p-2 rounded">
            <h3>Next payout date:</h3>
            <h3>Today, 04:00 PM</h3>
          </div>
        </div>

        <div className="self-start bg-white rounded">
          <RevenueCard
            props={{
              amount: 92312.2,
              title: "Amount Pending",
              orders: 13,
              link: true,
            }}
          ></RevenueCard>
        </div>

        <div className="self-start bg-white rounded">
          <RevenueCard
            props={{
              amount: 2392312.19,
              title: "Amount Processed",
              orders: 0,
              link: false,
            }}
          ></RevenueCard>
        </div>
      </div>
    </div>
  );
}
