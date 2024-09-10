import React from "react";
import DashboardSearch from "./DashboardSearch";
import { Button } from "components/button";
import DashboardFund from "./DashboardFund";

const DashboardTopbar = () => {
  return (
    <div className="pl-[14px] flex items-center justify-between mb-8">
      <div className="flex items-center flex-1 gap-x-10">
        <img src="/logo.png" alt="crowfuding-app" />
        <div className="max-w-[458px] w-full">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 gap-x-10">
        <DashboardFund></DashboardFund>
        <Button className="bg-secondary px-7" type="">
          Start a campaign
        </Button>
        <img src="/logo.png" className="rounded-full" alt="crowfuding-app" />
      </div>
    </div>
  );
};

export default DashboardTopbar;
