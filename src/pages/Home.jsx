import React from "react";

function Home() {
  return (
    <div className="xl:ml-[350px] flex-1 h-screen overflow-y-auto">
      <div className="page-animation min-h-[100vh] w-full flex flex-col gap-[8rem]">
        <div className="h-screen flex items-center gap-[6rem] px-[9rem] py-[7rem] bg-white">
          <div className="relative w-[250px] h-[250px] rounded-full shrink-0">
            <div className="outer-profile absolute w-[250px] h-[250px] rounded-full shrink-0 bg-black opacity-60"></div>
            <div className="inner-profile absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[230px] h-[230px] rounded-full shrink-0 bg-black"></div>
          </div>

          <div className="flex justify-center flex-col">
            <h2 className="text-6xl font-bold mb-[1.5rem] ">ROHIT BHOYE</h2>
            <p className="text-lg text-black text-left opacity-60">
              I’m a curious web development enthusiast who loves turning ideas
              into interactive, responsive websites. With experience in HTML,
              CSS, JavaScript, React, and Tailwind, I’m always exploring new
              tools and techniques to grow as a developer.
            </p>
          </div>
        </div>

        {/* //---------------------skills-----------------// */}

        <div className="flex items-stretch justify-between gap-3 w-full px-[9rem]">
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

        <div className="w-full flex flex-col items-center gap-[4rem] px-[9rem] py-[7rem] bg-white">
          <h3 className="text-3xl font-bold">Education</h3>
          <div className="flex flex-col gap-[2rem] border-l border-black/10 px-[2rem] py-[1rem]">
            <div className="relative flex items-center gap-[3rem]">
              <span className="absolute top-1/2 -translate-y-1/2 left-[-43px] w-[20px] h-[20px] bg-white rounded-full border border-black/20 z-10"></span>
              <p className="bg-gray-200  h-[3rem] w-[9rem] flex justify-center items-center rounded-[50px]">
                2015 - 1019
              </p>
              <div className="flex flex-col gap-3">
                <p className="text-xl font-bold">Mumbai Univercity</p>
                <p>
                  Bachelor of Engineering – Electronics and Telecommunication
                </p>
                <p>Atharva College of Engineering</p>
              </div>
            </div>

            <div className="relative flex items-center gap-[3rem]">
              <span className="absolute top-1/2 -translate-y-1/2 left-[-43px] w-[20px] h-[20px] bg-white rounded-full border border-black/20 z-10"></span>
              <p className="bg-gray-200  h-[3rem] w-[9rem] flex justify-center items-center rounded-[50px]">
                2013 - 2015
              </p>
              <div className="flex flex-col gap-3">
                <p>Higher Secondary Certificate (HSC) – Computer Science</p>
                <p>VIVA College</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
