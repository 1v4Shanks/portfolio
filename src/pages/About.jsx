import React from "react";
import Title from "../components/Title";

function About() {
  return (
    <div className="xl:ml-[350px] flex-1 h-screen overflow-y-auto hide-scrollbar">
      <div className="page-animation min-h-[100vh] w-full px-[2rem] py-[2rem] sm:px-[4rem] sm:py-[5rem] xl:px-[9rem] xl:py-[7rem]">
        <div className="mb-[3rem]">
          <Title text={"About Me"} />
        </div>
        <div className="flex flex-col gap-3">
          <p className="leading-7 text-gray-600">
            Hi, my name is Rohit Bhoye. I’ve been coding for about a year now. I
            started with the basics and slowly got into building real projects —
            mostly with HTML, CSS, JavaScript, React, and Tailwind.
          </p>
          <p className="leading-7 text-gray-600">
            Right now, I’m focused on frontend stuff, and I’ve made things like
            a full e-commerce site with features like login, search, filters,
            and even cart functionality using Firebase. Every project I work on
            helps me grow and improve my skills as a developer. I’m still
            learning and improving, just trying to get better with every
            project. Not perfect, but I love what I do.
          </p>
          <p>
            <span className="text-md font-bold">
              Feel free to reach out to me via email at:{" "}
            </span>
            rohitbhoye1612@gmail.com
          </p>

          <p className="text-md font-bold">
            Feel free to check out my projects on GitHub:
            <a
              href="https://github.com/1v4Shanks"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 ml-[10px] font-bold px-[10px] py-[5px] cursor-pointer"
              onMouseEnter={() => document.body.classList.add("cursor-hover")}
              onMouseLeave={() =>
                document.body.classList.remove("cursor-hover")
              }
            >
              {" "}
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
