import { IconFolder } from "components/icons";
import React from "react";
import { Link } from "react-router-dom";

const CampaignItem = () => {
  return (
    <div>
      <div className="h-[158px]">
        <img
          src="https://plus.unsplash.com/premium_photo-1664362416374-4f734db57037?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image1"
          className="object-cover w-full h-full rounded-2xl"
        />
      </div>
      <div className="px-5 py-4">
        <Link
          to="/"
          className="flex items-baseline mb-4 text-xs font-medium gap-x-3 text-text3"
        >
          <IconFolder></IconFolder>
          <span>Education</span>
        </Link>
        <h3 className="mb-1 font-semibold text-text1">
          Powered Kits Learning Boxes
        </h3>
        <p className="mb-4 text-xs text-text3">
          Fun, durable and reusable boxes with eco-friendly options.
        </p>
        <div className="flex items-start justify-between mb-5 gap-x-5">
          <div className="flex flex-col gap-y-1">
            <h4 className="text-sm font-semibold text-text2">$2,000</h4>
            <span className="text-xs text-text4">Raised of $1,900</span>
          </div>
          <div className="flex flex-col gap-y-1">
            <h4 className="text-sm font-semibold text-text2">173</h4>
            <span className="text-xs text-text4">Total backers</span>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <img
            src="https://plus.unsplash.com/premium_photo-1664362416374-4f734db57037?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="avatar"
            className="object-cover w-8 h-8 rounded-full"
          />
          <p className="text-xs text-text3">
            By <span className="font-semibold text-text2">Mahfuzul Nabil</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampaignItem;
