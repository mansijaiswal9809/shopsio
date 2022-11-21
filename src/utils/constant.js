import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";

export const links = [
  {
    id: 1,
    text: "All",
    // fn: getAll
  },
  {
    id: 2,
    text: "Men",
    // fn:getMen
  },
  {
    id: 3,
    text: "Women",
    // fn: getWomen
  },
  { 
    id: 4, 
    text: "Home",
    // fn: getHome
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];
