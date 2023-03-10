import React from "react";

// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "About Us",
    path: "/products",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text"
  },
  
  {
    title: "LOGIN",
    path: "/login",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text"
  },
  {
    title: "Reports",
    path: "/reviews",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text"
  },
  
  {
    title: "Help",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text"
  }
];
