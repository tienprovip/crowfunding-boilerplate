import {
  IconCampaign,
  IconDashboard,
  IconLight,
  IconLogout,
  IconPayment,
  IconProfile,
  IconWidthDraw,
} from "components/icons";
import { NavLink } from "react-router-dom";

const sideBarLinks = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: "Dashboard",
    url: "/",
  },
  {
    icon: <IconCampaign></IconCampaign>,
    title: "Campaign",
    url: "/campaign",
  },
  {
    icon: <IconPayment></IconPayment>,
    title: "Payment",
    url: "/payment",
  },
  {
    icon: <IconWidthDraw></IconWidthDraw>,
    title: "Withdraw",
    url: "/withdraw",
  },
  {
    icon: <IconProfile></IconProfile>,
    title: "Profile",
    url: "/profile",
  },
  {
    icon: <IconLogout></IconLogout>,
    title: "Logout",
    url: "/logout",
    onClick: () => {},
  },
  {
    icon: <IconLight></IconLight>,
    title: "Light/Dark",
    url: "/bcd",
    onClick: () => {},
  },
];

const DashboardSidebar = () => {
  const navLinkClass =
    "flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8 text-icon-color last:mt-auto last:bg-white last:shadow-sdprimary";
  return (
    <div className="w-full md:w-[76px] rounded-3xl bg-white shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] px-[14px] py-10 flex flex-col sidebar flex-shrink-0">
      {sideBarLinks.map((link) => (
        <NavLink
          to={link.url}
          key={link.title}
          className={({ isActive }) =>
            isActive
              ? `${navLinkClass} text-primary bg-primary bg-opacity-20`
              : navLinkClass
          }
        >
          <span>{link.icon}</span>
          <span className="md:hidden">{link.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSidebar;
