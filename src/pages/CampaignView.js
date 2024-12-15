import Button from "components/button/Button";
import { defaultImage } from "constants/global";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignItem from "modules/campaign/CampaignItem";
import CampaignPerk from "modules/campaign/CampaignPerk";
import CampaignSupport from "modules/campaign/CampaignSupport";
import CampCategory from "modules/campaign/parts/CampCategory";
import CampDesc from "modules/campaign/parts/CampDesc";
import CampImage from "modules/campaign/parts/CampImage";
import CampMeta from "modules/campaign/parts/CampMeta";
import CampTitle from "modules/campaign/parts/CampTitle";
import CampViewAuthor from "modules/campaign/parts/CampViewAuthor";
import React, { Fragment } from "react";

const CampaignView = () => {
  return (
    <Fragment>
      <div
        className="h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center bg-opacity-40 flex items-center justify-center text-white text-[40px] font-bold mb-10 gradient-banner"
      >
        <h1>Education</h1>
      </div>
      <div className="flex items-start gap-x-10 w-full max-w-[1066px]">
        <div className="flex-1">
          <CampImage className="h-[398px] mb-8"></CampImage>
          <div className="flex justify-center gap-x-5">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  src={defaultImage}
                  alt=""
                  key={index}
                  className="w-[89px] h-[60px] rounded-lg object-cover"
                />
              ))}
          </div>
        </div>
        <div className="flex-1 max-w-[443px]">
          <CampCategory text="Architecture" className="text-sm"></CampCategory>
          <CampTitle className="mb-4 text-xl font-bold">
            Meet - AI Virtual Background 4K Webcam
          </CampTitle>
          <CampDesc className="mb-6 text-sm">
            Remake - We Make: an exhibition about architecture's social agency
            in the face of urbanisation
          </CampDesc>
          <CampViewAuthor></CampViewAuthor>
          <div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6">
            <div className="w-2/4 h-full rounded-full bg-primary"></div>
          </div>
          <div className="flex items-start justify-between mb-4 gap-x-5">
            <CampMeta
              amount="$2,000"
              text="Raised of $2,500"
              size=""
            ></CampMeta>
            <CampMeta amount="173" text="Total backers" size=""></CampMeta>
            <CampMeta amount="30" text="Days left" size=""></CampMeta>
          </div>
          <Button kind="primary" className="w-full">
            Back this project
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[100px] bg-white p-5 border border-b-slate-100 mb-6">
        <div className="flex items-center text-sm font-medium gap-x-14 text-text3">
          <span className="cursor-pointer text-secondary">Campaign</span>
          <span className="cursor-pointer">Risks</span>
          <span className="cursor-pointer">FAQ</span>
          <span className="cursor-pointer">Updates</span>
          <span className="cursor-pointer">Comments</span>
        </div>
        <Button kind="primary" className="">
          Back this project
        </Button>
      </div>
      <div className="grid gap-x-[124px] grid-cols-[1.3fr,1fr] mb-[70px]">
        <div>
          <h2 className="mb-5 text-lg font-semibold uppercase">Story</h2>
          <div className="w-full bg-white">
        </div>
        </div>
        <div>
          <CampaignSupport></CampaignSupport>
          <div className="mb-[60px]"></div>
          <div className="flex flex-col gap-y-[30px]">
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
          </div>
        </div>
      </div>
      <h2 className="mb-10 text-xl font-semibold">
        You also may be interested in
      </h2>
      <CampaignGrid>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
      </CampaignGrid>
    </Fragment>
  );
};

export default CampaignView;
