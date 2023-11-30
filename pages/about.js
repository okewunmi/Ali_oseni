import React from 'react';
import {Wrapper} from '../styles/about'
import '../src/app/globals.css'
// import { Wrapper } from './styles';
import Image from 'next/image';
import { FaTwitter, FaSlack, FaGithub, FaDribbble  } from "react-icons/fa";
import Link from 'next/link';
import { IoPersonCircle } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import Nav from '../src/Component/Nav/Index';

const Index = () => {
    return (
        <Wrapper>
        <Nav/>
        <section class="timeline">
            <div class="title-wrapper">
              <div class="icon-box">
                <ion-icon name="book-outline"></ion-icon>
              </div>

              <h3 class="h3">Education</h3>
            </div>

            <ol class="timeline-list">
              <li class="timeline-item">
                <h4 class="h4 timeline-item-title">
                  Nyati Talent Acedemy & Unicorn Hub
                </h4>

                <span>June, 2022</span>

                <p class="timeline-text">(Web Development & Data Analytics)</p>
              </li>
              <li class="timeline-item">
                <h4 class="h4 timeline-item-title">giz and LoftyInc</h4>

                <span>Feb, 2022</span>

                <p class="timeline-text">
                  Certificate of participation in (Web Development Training)
                </p>
              </li>

              <li class="timeline-item">
                <h4 class="h4 timeline-item-title">
                  Yaba College of Technology
                </h4>

                <span>2019 — 2021</span>

                <p class="timeline-text">Higher Diploma in Computer Science.</p>
              </li>

               <li class="timeline-item">

              <h4 class="h4 timeline-item-title">High school of art and design</h4>

              <span>2002 — 2004</span>

              <p class="timeline-text">
                Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur
                magni dolores
                eos.
              </p>

            </li> 
            </ol>
          </section>

            
        </Wrapper>
    );
}

export default Index;

