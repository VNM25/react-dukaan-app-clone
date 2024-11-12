import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RevenueCard } from "./components/RevenueCard";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { OverviewCard } from "./components/OverviewCard";
import { TransactionCard } from "./components/TransactionCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="flex justify-between bg-gray-50">
        <Sidebar />
        <div className="sm:ml-52 flex-1" >
          <Navbar />
          <OverviewCard />
          <TransactionCard />
        </div>
      </div>
    </div>
  );
}

export default App;
