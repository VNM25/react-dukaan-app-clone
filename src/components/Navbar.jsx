import { ChatBubbleBottomCenterTextIcon, ChatBubbleLeftIcon, ChevronDownIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

export function Navbar() {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-slate-100">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-2">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center whitespace-nowrap">
              Payouts
            </span>
            <QuestionMarkCircleIcon className="size-3"></QuestionMarkCircleIcon>
            <span className="font-light text-xs">How it works</span>

          </a>
          <div className="flex">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-2.5 me-1"
            >
              <MagnifyingGlassIcon className="size-7"></MagnifyingGlassIcon>

              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <MagnifyingGlassIcon className="size-4"></MagnifyingGlassIcon>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 rounded-lg bg-slate-200 "
                placeholder="Search features, tutorials, etc."
              ></input>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="rounded-full bg-slate-200 p-1 ">
              <ChatBubbleBottomCenterTextIcon className="size-6 m-2"></ChatBubbleBottomCenterTextIcon>
            </div>
            <div className="rounded-full bg-slate-200 p-1 ">
              <ChevronDownIcon className="size-6 m-2 stroke-[5px]"></ChevronDownIcon>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
