import SearchBar from "@/components/search-bar";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import React from "react";

function Dashboard() {
  return (
    <div className="w-screen min-h-screen bg-blue-100">
      <div className="flex justify-between bg-slate-50 text-sm px-4 py-2">
        <div className="flex gap-1">
          <span className="font-light">home &gt; </span>
          <span className="font-bold text-blue-800">Dashboard v2</span>
        </div>
        <div className="w-1/3 ">
          <SearchBar />
        </div>
        <div className=" flex gap-8 px-2">
          <IoIosNotifications size={20} />
          <CgProfile size={20} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
