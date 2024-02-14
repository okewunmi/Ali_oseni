"use client";
import React, { useState } from "react";
import { Wrapper } from "../../../Component/Header/styles";
import { Content } from "../Kita/styles";
import Nav from "../../../Component/Nav/Index";
import Link from "next/link";
import Image from "next/image";
import { Fade } from "react-swift-reveal";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { NavBar } from "@/Component/Nav/styles";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { MdArrowBackIos } from "react-icons/md";
import { useTheme } from "@/app/ThemeContext";

const Index = () => {
  const { darkMode, setDarkMode } = useTheme();

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  const toggleMenu = () => {};

  return (
    <Fade duration={500} distance="30px" delay={500}>
      <Link href="/project">
        <Wrapper
          style={{
            background: darkMode ? "#1C2540" : "#ffff",
            color: darkMode ? "#ffff" : "#171F38",
          }}
        >
          <Nav />
          <div
            className="header__ux my-16"
            style={{
              background: darkMode ? "#020D1A" : "#EBF4F6",
              color: darkMode ? "#ffff" : "#020A13",
            }}
          >
            <h1 className="header__ux__head ">Latest Project </h1>
            <p className="header__ux__txt">
              And if it’s not listed here, I learn incredibly quickly
            </p>
            <div className="container ">
              <div className="box !bg-white">
                <Image
                  src="/ux-prj-1.png"
                  className="img"
                  width={450}
                  height={250}
                  alt="img"
                />
                <p className="title">Nester Verify</p>
                <p className="txt">Website · UI/UX Design</p>
              </div>
              <div className="box !bg-white">
                <Image
                  src="/ux-prj-2.png"
                  className="img"
                  width={450}
                  height={250}
                  alt="img"
                />
                <p className="title">Kita Folk </p>
                <p className="txt">Web Application - UI/UX Design/ Branding</p>
              </div>
              <div className="box !bg-white">
                <Image
                  src="/ux-prj-3.png"
                  className="img"
                  width={450}
                  height={250}
                  alt="img"
                />
                <p className="title">Farmhub360</p>
                <p className="txt">
                  Website · UI/UX Design/ Pitchdeck/ Branding
                </p>
              </div>
            </div>
          </div>
          <Content>
            <div className="head">
              <div>
                <Link href="/project" className="Link-arrow">
                  <MdArrowBackIos />
                  <p className="link">Latest Project</p>
                </Link>
              </div>
              <div>
                <Link href="/project">
                  <p className="link">Back to Project</p>
                </Link>
              </div>
            </div>
            <div className="image">
              <Image src="/findworker.png" alt="img" width={740} height={992} />
            </div>
            <article className="cont">
              <h1>Findworka Pitch-deck</h1>
              <p>
                Findworka is an elite network of pre-vetted African software
                developers who are tested, graded and effectively matched with
                our partners in an integrated talent and project management
                ecosystem. On-demand platform for custom software products and
                pre-vetted programming talents.
              </p>
              <div className="line"></div>
            </article>
            <article className="cont">
              <h2>Design Tools</h2>
              <div className="icon">
                <Image src="/invasion.png" width={50} height={50} alt="icon" />
                <Image src="/ps.png" width={80} height={50} alt="icon" />
                <Image src="/ai.png" width={50} height={50} alt="icon" />
              </div>
            </article>
            {/* <article className='cont'>
                    <h2>Position </h2>
                    <div className='box'>
                        <p>Main designer</p>
                    </div>
                    <div className='line-1'></div>
                    
                </article> */}
            <article className="cont">
              <h2>Position </h2>
              <div className="box"></div>
            </article>
            {/* <section className='btn--box'>
                    <Link href='#' className='btn btn-color'>
                    <FaBehance className='icon' />
                    <span>Case Study</span> 
                    </Link>
                    <Link href='#' className='btn btn-white'>
                        <p>   Open Project</p>
                
                    </Link>

                </section> */}
          </Content>
        </Wrapper>
      </Link>
    </Fade>
  );
};

export default Index;
