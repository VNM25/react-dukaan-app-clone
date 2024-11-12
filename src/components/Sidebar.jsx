import {
  HomeIcon,
  Squares2X2Icon,
  DocumentTextIcon,
  SpeakerWaveIcon,
  TruckIcon,
  BanknotesIcon,
  PercentBadgeIcon,
  ChartBarIcon,
  BoltIcon,
  WalletIcon,
  ChevronDownIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
export function Sidebar() {
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed flex flex-col top-0 left-0 z-40 w-52 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="flex justify-around items-last p-2 text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-gray-300  group">
          <UserIcon className="size-7 mt-1"></UserIcon>
          <div className="">
            <div className="font-bold">Vansh</div>
            <div className="underline text-xs">Visit Store</div>
          </div>
          <ChevronDownIcon className="size-6 mt-2"></ChevronDownIcon>
        </div>
        <div className="h-full flex justify-between flex-col px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-light">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <HomeIcon className="size-6"></HomeIcon>
                <span className="ms-3">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <DocumentTextIcon className="size-6"></DocumentTextIcon>
                <span className="flex-1 ms-3 whitespace-nowrap">Orders</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Squares2X2Icon className="size-6"></Squares2X2Icon>
                <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <TruckIcon className="size-6"></TruckIcon>
                <span className="flex-1 ms-3 whitespace-nowrap">Delevery</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <SpeakerWaveIcon className="size-6"></SpeakerWaveIcon>
                <span className="flex-1 ms-3 whitespace-nowrap">Marketing</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <ChartBarIcon className="size-6"></ChartBarIcon>
                <span className="flex-1 ms-3 whitespace-nowrap">Analytics</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <BanknotesIcon className="size-6"></BanknotesIcon>
                <span className="flex-1 ms-3 whitespace-nowrap">Payouts</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <PercentBadgeIcon className="size-6"></PercentBadgeIcon>
                <span className="flex-1 ms-3 whitespace-nowrap">Discounts</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <TruckIcon className="size-6"></TruckIcon>
                <span className="flex-1 ms-3 whitespace-nowrap">Audience</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <PaintSvgIcon></PaintSvgIcon>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Appearence
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <BoltIcon className="size-6"></BoltIcon>
                <span className="flex-1 ms-3 whitespace-nowrap">Plugins</span>
              </a>
            </li>
          </ul>
          <div className="space-y-2 font-light">
            <a
              href="#"
              className="flex items-last p-2 text-gray-700 rounded-lg dark:text-gray-300 bg-gray-700 dark:hover:text-white group"
            >
              <WalletIcon className="size-6 mt-2"></WalletIcon>
              <div>
                <div className="flex ms-3 whitespace-nowrap text-xs">
                  Available Credits
                </div>
                <div className="flex ms-3 whitespace-nowrap text-sm">220.0</div>
              </div>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

function PaintSvgIcon() {
  return (
    <svg
      fill="#ffffff"
      height="20px"
      width="20px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 496 496"
      xml:space="preserve"
      stroke="#ffffff"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <g>
            {" "}
            <path d="M248,0C112,0,0,112,0,248s112,248,248,248c4.8,0,9.6-1.6,14.4-3.2c20.8-8,35.2-25.6,35.2-48c0-27.2-22.4-49.6-49.6-49.6 c-1.6,0-4.8,0-6.4,0c-1.6,0-1.6,0-3.2,0c-19.2-4.8-32-22.4-32-41.6c0-22.4,19.2-41.6,41.6-41.6h177.6c41.6,0,70.4-25.6,70.4-64 C496,112,384,0,248,0z M425.6,281.6H248c-40,0-73.6,33.6-73.6,73.6c0,35.2,24,64,57.6,72h1.6c4.8,1.6,9.6,1.6,14.4,1.6 c9.6,0,17.6,8,17.6,17.6c0,8-4.8,14.4-12.8,17.6c-1.6,0-3.2,0-4.8,0c-118.4,0-216-97.6-216-216S129.6,32,248,32 s216,97.6,216,217.6C464,276.8,440,281.6,425.6,281.6z"></path>{" "}
          </g>{" "}
        </g>{" "}
        <g>
          {" "}
          <g>
            {" "}
            <path d="M118.4,232C88,232,64,256,64,286.4c0,30.4,24,54.4,54.4,54.4c28.8,0,54.4-24,54.4-54.4C172.8,256,148.8,232,118.4,232z M118.4,308.8c-12.8,0-22.4-9.6-22.4-22.4s9.6-22.4,22.4-22.4c11.2,0,22.4,9.6,22.4,22.4S131.2,308.8,118.4,308.8z"></path>{" "}
          </g>{" "}
        </g>{" "}
        <g>
          {" "}
          <g>
            {" "}
            <path d="M148.8,108.8c-30.4,0-54.4,24-54.4,54.4c0,30.4,24,54.4,54.4,54.4c28.8,0,54.4-24,54.4-54.4 C203.2,132.8,179.2,108.8,148.8,108.8z M148.8,185.6c-12.8,0-22.4-9.6-22.4-22.4s9.6-22.4,22.4-22.4c11.2,0,22.4,9.6,22.4,22.4 S161.6,185.6,148.8,185.6z"></path>{" "}
          </g>{" "}
        </g>{" "}
        <g>
          {" "}
          <g>
            {" "}
            <path d="M273.6,60.8c-30.4,0-54.4,24-54.4,54.4c0,30.4,24,54.4,54.4,54.4c28.8,0,54.4-24,54.4-54.4C328,84.8,304,60.8,273.6,60.8z M273.6,139.2c-12.8,0-22.4-9.6-22.4-22.4s9.6-22.4,22.4-22.4c11.2,0,22.4,9.6,22.4,22.4S286.4,139.2,273.6,139.2z"></path>{" "}
          </g>{" "}
        </g>{" "}
        <g>
          {" "}
          <g>
            {" "}
            <path d="M380.8,139.2c-30.4,0-54.4,24-54.4,54.4c0,30.4,24,54.4,54.4,54.4c28.8,0,54.4-24,54.4-54.4 C435.2,163.2,411.2,139.2,380.8,139.2z M380.8,216c-12.8,0-22.4-9.6-22.4-22.4s9.6-22.4,22.4-22.4c11.2,0,22.4,9.6,22.4,22.4 S393.6,216,380.8,216z"></path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}
