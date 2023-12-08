import { Icon } from "@chakra-ui/react";
import { IRoute } from "./types/navigation";

import { FaRegChartBar, FaRocket, FaUsers, FaUser } from "react-icons/fa";
import { BsFillMotherboardFill } from "react-icons/bs";
import { GrArticle } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";

const MainRoute: IRoute[] = [
  {
    name: "Statistik",
    layout: "/admin",
    path: "/statistic",
    icon: (
      <Icon as={FaRegChartBar} width="20px" height="20px" color="inherit" />
    ),
  },
  {
    name: "Devices",
    layout: "/admin",
    path: "#",
    icon: <Icon as={FaRocket} width="20px" height="20px" color="inherit" />,
  },
  {
    name: "Article",
    layout: "/admin",
    path: "#",
    icon: <Icon as={GrArticle} width="20px" height="20px" color="inherit" />,
  },
  {
    name: "User Account",
    layout: "/admin",
    path: "#",
    icon: <Icon as={FaUsers} width="20px" height="20px" color="inherit" />,
  },
];

const AccountRoute: IRoute[] = [
  {
    name: "Profile",
    layout: "/admin",
    path: "#",
    icon: <Icon as={FaUser} width="20px" height="20px" color="inherit" />,
  },
  {
    name: "Setting",
    layout: "/admin",
    path: "#",
    icon: <Icon as={IoMdSettings} width="20px" height="20px" color="inherit" />,
  },
  {
    name: "Logout",
    layout: "/admin",
    path: "#",
    icon: <Icon as={FiLogOut} width="20px" height="20px" color="inherit" />,
  },
];

export { MainRoute, AccountRoute };
