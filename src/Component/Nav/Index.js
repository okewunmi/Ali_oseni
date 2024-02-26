import React, { useState, useContext } from "react";
import Link from "next/link";
import { NavBar } from "./styles";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { LuSunMoon } from "react-icons/lu";
import { ThemeContext, useTheme } from "@/app/ThemeContext";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Slider from "../Menu/page";
import Image from "next/image";

const Index = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleMenu = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  function customLinkOnClick(e) {
    e.preventDefault();
  }
  return (
    <aside>
      <NavBar
        style={{
          background: isDarkMode ? "#020A13" : "#EBF4F6",
          background: isDarkMode ? "#020A13" : "#EBF4F6",
          color: isDarkMode ? "#ffff" : "#171F38",
        }}
      >
        <div className="flex">
          <Link className="links" href="/" >
            <Image
              src="/logo-1.png"
              className="logo"
              alt="footer-logo"
              width={70}
              height={70}
            />
          </Link>
          <div className="NavBar__link">
            <Link className="links" href="/contact"  prefetch={false}  onClick={customLinkOnClick}>
              Contact Me
            </Link>
            <Link className="links" href="/project" prefetch={false} onClick={customLinkOnClick}>
              Projects
            </Link>
            <Link className="links" href="/process" prefetch={false} onClick={customLinkOnClick}>
              Process
            </Link>
            <Link className="links" href="/about" prefetch={false} onClick={customLinkOnClick}>
              About Me
            </Link>
          </div>
        </div>
        <div>
          <div className="NavBar__btn">
            <Link className="NavBar__btn--btn" href="#" onClick={customLinkOnClick}>
              Download Resume
            </Link>
            <button className="btn" onClick={toggleTheme}>
              <WiMoonAltFirstQuarter />
            </button>
            <button className="btn btn-menu" onClick={toggleMenu}>
              <HiOutlineMenuAlt4 className="menu" />
            </button>
          </div>
        </div>
      </NavBar>
      <Slider isOpen={isSidebarOpen} onClose={toggleMenu} />
    </aside>
  );
};

export default Index;
