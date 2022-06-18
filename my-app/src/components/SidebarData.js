import React from "react";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Household Items",
    path: "/householditems",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Bedding",
        path: "/householditems/bedding"
      },
      {
        title: "Curtains",
        path: "/householditems/curtains"
      },
      {
        title: "Chair",
        path: "/householditems/chair"
      },
      {
        title: "Bed Table",
        path: "/householditems/bedtable"
      },
      {
        title: "Cleaning Equipments",
        path: "/householditems/cleaningequipments"
      },
      {
        title: "Bucket",
        path: "/householditems/bucket"
      },
      {
        title: "Others",
        path: "/householditems/others"
      }
    ]
  },

  {
    title: "Electronics & Appliances:",
    path: "/electronicsandappliances",
    icon: <AiIcons.AiOutlineLaptop />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Gadgets",
        path: "/electronicsandappliances/gadgets"
      },
      {
        title: "Lamps",
        path: "/electronicsandappliances/ lamps"
      },
      {
        title: "Kettles",
        path: "/electronicsandappliances/kettles"
      },
      {
        title: "Hair Equipments",
        path: "/electronicsandappliances/hairequipments"
      },
      {
        title: "Camera",
        path: "/electronicsandappliances/ camera"
      },
      {
        title: "Small Fridge",
        path: "/electronicsandappliances/smallfridge"
      },
      {
        title: "Computer Hardware",
        path: "/electronicsandappliances/computerhardware"
      },
      {
        title: "Sound Devices",
        path: "/electronicsandappliances/sound"
      },
      {
        title: "Others",
        path: "/householditems/others"
      }
    ]
  },

  {
    title: "Sports & Outdoor:",
    path: "/sportsandoutdoor",
    icon: <AiIcons.AiOutlineLaptop />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Cycles",
        path: "/sportsandoutdoor/cycles"
      },
      {
        title: "Skateboard",
        path: "/sportsandoutdoor/skateboard"
      },
      {
        title: "Sports Equiments",
        path: "/sportsandoutdoor/sportsequipments"
      },
      {
        title: "Gym Equiments",
        path: "/sportsandoutdoor/gymequipments"
      }
    ]
  }
];
