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
        path: "/householditems/bedding",
      },
      {
        title: "Curtains",
        path: "/householditems/curtains",
      },
      {
        title: "Chair",
        path: "/householditems/chair",
      },
      {
        title: "Bed Table",
        path: "/householditems/bedtable",
      },
      {
        title: "Cleaning Equipments",
        path: "/householditems/cleaningequipments",
      },
      {
        title: "Bucket",
        path: "/householditems/bucket",
      },
      {
        title: "Others",
        path: "/householditems/others",
      },
    ],
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
        path: "/electronicsandappliances/gadgets",
      },
      {
        title: "Lamps",
        path: "/electronicsandappliances/ lamps",
      },
      {
        title: "Kettles",
        path: "/electronicsandappliances/kettles",
      },
      {
        title: "Hair Equipments",
        path: "/electronicsandappliances/hairequipments",
      },
      {
        title: "Camera",
        path: "/electronicsandappliances/ camera",
      },
      {
        title: "Small Fridge",
        path: "/electronicsandappliances/smallfridge",
      },
      {
        title: "Computer Hardware",
        path: "/electronicsandappliances/computerhardware",
      },
      {
        title: "Sound Devices",
        path: "/electronicsandappliances/sound",
      },
      {
        title: "Others",
        path: "/householditems/others",
      },
    ],
  },

  {
    title: "Sports & Outdoor",
    path: "/sportsandoutdoor",
    icon: <AiIcons.AiOutlineLaptop />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Cycles",
        path: "/sportsandoutdoor/cycles",
      },
      {
        title: "Skateboard",
        path: "/sportsandoutdoor/skateboard",
      },
      {
        title: "Sports Equiments",
        path: "/sportsandoutdoor/sportsequipments",
      },
      {
        title: "Gym Equiments",
        path: "/sportsandoutdoor/gymequipments",
      },
    ],
  },

  {
    title: "Stationary and Academic Supplies",
    path: "/stationaryandacademicsupplies",
    icon: <AiIcons.AiOutlineLaptop />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Books",
        path: "/stationaryandacademicsupplies/books",
      },
      {
        title: "Bags",
        path: "/stationaryandacademicsupplies/bags",
      },
      {
        title: "Labcoat",
        path: "/stationaryandacademicsupplies/labcoat",
      },
      {
        title: "Calculator",
        path: "/stationaryandacademicsupplies/calculator",
      },
      {
        title: "Drawing and Civil",
        path: "/stationaryandacademicsupplies/drawingandcivil",
      },
      {
        title: "Umbrella",
        path: "/stationaryandacademicsupplies/umbrella",
      },
      {
        title: "Others",
        path: "/stationaryandacademicsupplies/others",
      },
    ],
  },
  {
    title: "Clothing and Footwear",
    path: "/clothingandfootwear",
    icon: <AiIcons.AiOutlineLaptop />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Dresses",
        path: "/products/women",
      },
      {
        title: "T-shirts and Shirts",
        path: "/clothingandfootwear/tshirtsandshirts",
      },
      {
        title: "Jeans and demins",
        path: "/clothingandfootwear/jeansanddenims",
      },
      {
        title: "Jackets",
        path: "/clothingandfootwear/jackets",
      },
      {
        title: "Shorts",
        path: "/clothingandfootwear/shorts",
      },
      {
        title: "Skirts",
        path: "/clothingandfootwear/skirts",
      },
      {
        title: "Sweater and Sweatshirts",
        path: "/clothingandfootwear/sweaterandsweatshirts",
      },
      {
        title: "Formals",
        path: "/clothingandfootwear/formals",
      },
      {
        title: "Ethnic Wear",
        path: "/clothingandfootwear/ethnicwear",
      },
      {
        title: "Sports Apparel",
        path: "/clothingandfootwear/sports apparel",
      },
      {
        title: " Flipflops and Flats",
        path: "/clothingandfootwear/flipflopsandflats",
      },
      {
        title: "Heels",
        path: "/clothingandfootwear/heels",
      },
      {
        title: "Shoes",
        path: "/clothingandfootwear/shoes",
      },
    ],
  },
  {
    title: "Fashion Accessories",
    path: "/fashionaccessories",
    icon: <AiIcons.AiOutlineLaptop />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Jewellery",
        path: "/fashionaccessories/jewellery",
      },
      {
        title: "Wallets and Clutches",
        path: "/fashionaccessories/walletsandclutches",
      },
      {
        title: "Watches",
        path: "/fashionaccessories/watches",
      },
      {
        title: "Belts and Tie",
        path: "/fashionaccessories/beltsandtie",
      },
      {
        title: "Hand bags",
        path: "/fashionaccessories/handbags",
      },
      {
        title: "Sunglasses",
        path: "/fashionaccessories/sunglasses",
      },
      {
        title: "Hair Accessories",
        path: "/fashionaccessories/hairaccessories",
      },
      {
        title: "Caps and Hats",
        path: "/fashionaccessories/capsandhats",
      },
      {
        title: "Scarves and Gloves",
        path: "/fashionaccessories/scarvesandgloves",
      },
      {
        title: "Phone Accessories",
        path: "/fashionaccessories/phoneaccessories",
      },
      {
        title: "Others",
        path: "/fashionaccessories/others",
      },
    ],
  },

  {
    title: "Recreational",
    path: "/recreational",
    icon: <AiIcons.AiOutlineLaptop />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Novels",
        path: "/recreational/novels",
      },
    ],
  },
];
