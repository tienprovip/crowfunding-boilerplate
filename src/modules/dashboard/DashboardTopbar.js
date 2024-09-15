import React from "react";
import DashboardSearch from "./DashboardSearch";
import { Button } from "components/button";
import DashboardFund from "./DashboardFund";
import { Link } from "react-router-dom";

const DashboardTopbar = () => {
  return (
    <div className="pl-[14px] flex items-center justify-between mb-8">
      <div className="flex items-center flex-1 gap-x-10">
        <Link to="/" className="inline-block">
          <img src="/logo.png" alt="crowfuding-app" />
        </Link>
        <div className="max-w-[458px] w-full">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 gap-x-10">
        <DashboardFund></DashboardFund>
        <Button
          kind="secondary"
          className="px-7"
          type="button"
          href="/start-campaign"
        >
          Start a campaign
        </Button>
        <img src="/logo.png" className="rounded-full" alt="crowfuding-app" />
      </div>
    </div>
  );
};

export default DashboardTopbar;
