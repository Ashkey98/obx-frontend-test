import React from "react";
import NavLink from "../../../components/NavLink";

const links: Array<{ link: string; text: React.ReactNode }> = [
  {
    link: "/",
    text: "Home",
  },
  {
    link: "/marketplace",
    text: "Marketplace",
  },
  {
    link: "/directorychoose",
    text: "Directory",
  },
  {
    link: "/announcements",
    text: "Announcements",
  },
  {
    link: "/faq",
    text: "FAQ",
  },
  {
    link: "/contactus",
    text: "Contact Us",
  },
];

const NavMenuLinks = () => {
  return (
    <>
      {links.map((link, index) => {
        return (
          <NavLink
            key={index}
            linkPath={link.link}
            styles={{ padding: "0 10px", fontWeight: "600" }}
          >
            {link.text}
          </NavLink>
        );
      })}
    </>
  );
};

export default NavMenuLinks;
