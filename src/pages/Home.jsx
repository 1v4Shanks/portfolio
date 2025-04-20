import React from "react";
import { assets } from "../assets/assets";
function Home() {
  return (
    <div className="xl:ml-[350px] flex-1 h-screen overflow-y-auto hide-scrollbar">
      <div className="page-animation min-h-[100vh] w-full flex flex-col gap-[8rem]">
        <div className="h-screen flex flex-col xl:flex-row items-center justify-center gap-[2.5rem] xl:flex xl:items-center xl:gap-[6rem] px-[2rem] py-[5rem] sm:px-[3rem] sm:py-[4rem]  xl:px-[9rem] xl:py-[7rem] bg-white">
          <div className="relative w-[300px] h-[330px] rounded-full shrink-0">
            <div className="outer-profile absolute w-full h-full rounded-full shrink-0 bg-black opacity-90"></div>
            <div className="outer-profile absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[310px] h-[340px] rounded-full shrink-0 bg-black opacity-50"></div>
            <img src={assets.profile} className="inner-profile object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[310px] rounded-full shrink-0 bg-black"/>
          </div>

          <div className="flex justify-center flex-col">
            <h2 className=" text-4xl text-center xl:text-start font-bold mb-[1.5rem] sm:text-6xl">
              ROHIT BHOYE
            </h2>
            <p className="text-center text-m text-black md:text-lg xl:text-left opacity-60">
              I’m a curious web development enthusiast who loves turning ideas
              into interactive, responsive websites. With experience in HTML,
              CSS, JavaScript, React, and Tailwind, I’m always exploring new
              tools and techniques to grow as a developer.
            </p>
          </div>
        </div>

        {/* //---------------------skills-----------------// */}

        <div className="flex flex-col gap-[1rem]  sm:flex sm:flex-row sm:items-stretch sm:justify-between sm:gap-3 w-full px-[2rem] xl:px-[9rem]">
          <div className="skill-tools bg-white w-full px-[2rem] py-[3rem] flex flex-col gap-[2rem] shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out">
            <h3 className="text-3xl font-bold ">Core Skills</h3>
            <ul className="border-l border-black/10 p-[1rem] flex flex-col gap-3 text-lg">
              <li className="relative pl-[1rem]">
                {" "}
                <span className="absolute top-1/2 -translate-y-1/2 left-[-23.5px] w-[15px] h-[15px] bg-white rounded-full border border-black/20 z-10"></span>
                HTML
              </li>
              <li className="relative pl-[1rem]">
                <span className="absolute top-1/2 -translate-y-1/2 left-[-23.5px] w-[15px] h-[15px] bg-white rounded-full border border-black/20 z-10"></span>
                CSS
              </li>
              <li className="relative pl-[1rem]">
                <span className="absolute top-1/2 -translate-y-1/2 left-[-23.5px] w-[15px] h-[15px] bg-white rounded-full border border-black/20 z-10"></span>
                JavaScript
              </li>
              <li className="relative pl-[1rem]">
                <span className="absolute top-1/2 -translate-y-1/2 left-[-23.5px] w-[15px] h-[15px] bg-white rounded-full border border-black/20 z-10"></span>
                React
              </li>
              <li className="relative pl-[1rem]">
                <span className="absolute top-1/2 -translate-y-1/2 left-[-23.5px] w-[15px] h-[15px] bg-white rounded-full border border-black/20 z-10"></span>
                Tailwind CSS
              </li>
            </ul>
          </div>
          <div className="skill-tools bg-white w-full px-[2rem] py-[3rem] flex flex-col gap-[2rem] shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out">
            <h3 className="text-3xl font-bold">Tools & Technologies</h3>

            <ul className="border-l border-black/10 p-[1rem] flex flex-col gap-3 text-lg">
              <li className="relative pl-[1rem]">
                <span className="absolute top-1/2 -translate-y-1/2 left-[-23.5px] w-[15px] h-[15px] bg-white rounded-full border border-black/20 z-10"></span>
                Git/GitHub
              </li>
              <li className="relative pl-[1rem]">
                <span className="absolute top-1/2 -translate-y-1/2 left-[-23.5px] w-[15px] h-[15px] bg-white rounded-full border border-black/20 z-10"></span>
                Firebase
              </li>
              <li className="relative pl-[1rem]">
                <span className="absolute top-1/2 -translate-y-1/2 left-[-23.5px] w-[15px] h-[15px] bg-white rounded-full border border-black/20 z-10"></span>
                Responsive Design
              </li>
              <li className="relative pl-[1rem]">
                <span className="absolute top-1/2 -translate-y-1/2 left-[-23.5px] w-[15px] h-[15px] bg-white rounded-full border border-black/20 z-10"></span>
                REST APIs / Fetch
              </li>
            </ul>
          </div>
        </div>

        {/* //---------------------Education-----------------// */}

        <div className="w-full flex flex-col items-center gap-[4rem] py-[3rem] pl-[1rem] sm:px-[4rem] sm:py-[5rem] xl:px-[9rem] xl:py-[7rem] bg-white">
          <h3 className="text-3xl font-bold">Education</h3>
          <div className="flex flex-col p-[1rem] gap-y-[3.5rem] sm:gap-[3rem] border-l border-black/10 pl-[1rem] sm:px-[2rem] sm:py-[1rem]">
            <div className="relative flex items-center gap-[1rem] sm:gap-[3rem]">
              <span className="absolute top-1/2 -translate-y-1/2 left-[-26.5px] sm:left-[-43px] w-[20px] h-[20px] bg-white rounded-full border border-black/20 z-10"></span>
              <p className="bg-gray-200 h-[2rem] sm:h-[3rem] text-sm w-[8rem] sm:w-[9rem] sm:text-[1rem] flex justify-center items-center rounded-[50px]">
                2015 - 1019
              </p>
              <div className="flex flex-col w-[70%] gap-2 sm:gap-3 sm:px-[2rem]">
                <p className="text-sm sm:text-xl font-bold">
                  Mumbai Univercity
                </p>
                <p className="text-sm sm:text-xl">
                  Bachelor of Engineering – Electronics and Telecommunication
                </p>
                <p className="text-sm sm:text-xl">
                  Atharva College of Engineering
                </p>
              </div>
            </div>

            <div className="relative flex items-center gap-[1rem] sm:gap-[3rem]">
              <span className="absolute top-1/2 -translate-y-1/2 left-[-26.5px] sm:left-[-43px] w-[20px] h-[20px] bg-white rounded-full border border-black/20 z-10"></span>
              <p className="bg-gray-200 h-[2rem] sm:h-[3rem] text-sm w-[8rem] sm:w-[9rem] sm:text-[1rem] flex justify-center items-center rounded-[50px]">
                2013 - 2015
              </p>
              <div className="flex flex-col w-[70%] gap-2 sm:gap-3 sm:px-[2rem]">
                <p className="text-sm sm:text-xl">
                  Higher Secondary Certificate (HSC) – Computer Science
                </p>
                <p className="text-sm sm:text-xl">VIVA College</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
