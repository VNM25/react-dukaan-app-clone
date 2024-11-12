import { ChevronRightIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

export function RevenueCard({ props }) {
  return (
    <div className="rounded-lg shadow-md p-2">
      <div className="flex p-1">
        <div className="font-normal text-sm">{props.title}</div>
        <QuestionMarkCircleIcon className="size-4 mt-1 ml-1"></QuestionMarkCircleIcon>
      </div>
      <div className="flex justify-between p-3">
        <div className="text-3xl font-bold">₹{props.amount}</div>
        {props.link ? <Orders props={props}></Orders> : <></>}
      </div>
    </div>
  );
}

export function Orders({props}) {
  return (
    <div className="flex cursor-pointer group-has-[h3]:text-white text-blue-500 underline">
      <div className="text-nowrap text-sm">{props.orders} Orders</div>
      <ChevronRightIcon className="size-6"></ChevronRightIcon>
    </div>
  );
}
