import React from "react";
import { assets } from "../assets/assets";
import { FaGithub } from "react-icons/fa6";
import Title from "../components/Title";

function Projects() {
  return (
    <div className="xl:ml-[350px] flex-1 h-screen overflow-y-auto hide-scrollbar">
      <div className="page-animation min-h-[100vh] w-full px-[1rem] py-[2rem] sm:px-[3rem] sm:py-[4rem] xl:px-[9rem] xl:py-[7rem]">
        <div className="mb-[3rem]">
          <Title text={"Projects"} />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col items-center gap-[3rem] bg-white p-[2rem] border border-black/10">
            <img
              className="w-full h-[25rem] object-cover shadow-lg"
              src={assets.e_com}
              alt="thumbnail"
            />
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-bold">E-Commerce Web App</h2>
              <p className="text-x text-gray-500">
                A responsive shopping website with authentication and product
                filtering. Built using Firebase and React to provide a smooth
                user experience.
              </p>
              <ul className="flex flex-col gap-2 border-l border-black/50 pl-[1rem] font-bold">
                <li className="relative pl-[1rem]">
                  <span className="absolute top-1/2 -translate-y-1/2 left-[-23.5px] w-[15px] h-[15px] bg-white rounded-full border border-black/50 z-10"></span>
                  Login/Signup with Firebase Authentication
                </li>
                <li className="relative pl-[1rem]">
                  <span className="absolute top-1/2 -translate-y-1/2 left-[-23.5px] w-[15px] h-[15px] bg-white rounded-full border border-black/50 z-10"></span>
                  Autocomplete product search
                </li>
                <li className="relative pl-[1rem]">
                  <span className="absolute top-1/2 -translate-y-1/2 left-[-23.5px] w-[15px] h-[15px] bg-white rounded-full border border-black/50 z-10"></span>
                  Category and price filtering
                </li>
                <li className="relative pl-[1rem]">
                  <span className="absolute top-1/2 -translate-y-1/2 left-[-23.5px] w-[15px] h-[15px] bg-white rounded-full border border-black/50 z-10"></span>
                  Add to Cart with Firebase real-time sync
                </li>
                <li className="relative pl-[1rem]">
                  <span className="absolute top-1/2 -translate-y-1/2 left-[-23.5px] w-[15px] h-[15px] bg-white rounded-full border border-black/50 z-10"></span>
                  Order tracking with Firebase real-time updates
                </li>
                <li className="relative pl-[1rem]">
                  <span className="absolute top-1/2 -translate-y-1/2 left-[-23.5px] w-[15px] h-[15px] bg-white rounded-full border border-black/50 z-10"></span>
                  Protected routes using React Router
                </li>
              </ul>
              <p>
                <span className="text-x font-bold">Tech:</span> React, CSS,
                Firebase, React Router.
              </p>
              <div className="flex gap-[1rem]">
                <a
                  href="https://fabrica-2025.firebaseapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200  flex justify-center items-center mb-[2rem] font-bold px-[10px] py-[5px] cursor-pointer"
                  onMouseEnter={() =>
                    document.body.classList.add("cursor-hover")
                  }
                  onMouseLeave={() =>
                    document.body.classList.remove("cursor-hover")
                  }
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/1v4Shanks/fabrica-2025.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200  flex justify-center items-center mb-[2rem] font-bold px-[10px] py-[5px] cursor-pointer"
                  onMouseEnter={() =>
                    document.body.classList.add("cursor-hover")
                  }
                  onMouseLeave={() =>
                    document.body.classList.remove("cursor-hover")
                  }
                >
                  {" "}
                  <span className="mr-[10px]">GitHub</span>
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-[3rem] bg-white p-[2rem] border border-black/10">
            <img
              className="w-full h-[25rem] object-contain shadow-lg"
              src={assets.multi_steps}
              alt="thumbnail"
            />
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-bold">Multi-Step Form</h2>
              <p className="text-x text-gray-500">
                A user-friendly form broken into multiple steps with state
                management and validations.
              </p>
              <p>
                <span className="text-x font-bold">Tech:</span> React, CSS.
              </p>
              <div className="flex gap-[1rem]">
                <a
                  href="https://1v4shanks.github.io/multi-step-form/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200  flex justify-center items-center mb-[2rem] font-bold px-[10px] py-[5px] cursor-pointer"
                  onMouseEnter={() =>
                    document.body.classList.add("cursor-hover")
                  }
                  onMouseLeave={() =>
                    document.body.classList.remove("cursor-hover")
                  }
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/1v4Shanks/multi-step-form.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200  flex justify-center items-center mb-[2rem] font-bold px-[10px] py-[5px] cursor-pointer"
                  onMouseEnter={() =>
                    document.body.classList.add("cursor-hover")
                  }
                  onMouseLeave={() =>
                    document.body.classList.remove("cursor-hover")
                  }
                >
                  {" "}
                  <span className="mr-[10px]">GitHub</span>
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-[3rem] bg-white p-[2rem] border border-black/10">
            <img
              className="w-full h-[25rem] object-cover shadow-lg"
              src={assets.static_list}
              alt="thumbnail"
            />
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-bold">Static Job Listings</h2>
              <p className="text-x text-gray-500">
                A job board UI with filter functionality based on job roles,
                skills, and levels.
              </p>
              <p>
                <span className="text-x font-bold">Tech:</span> React, CSS.
              </p>
              <div className="flex gap-[1rem]">
                <a
                  href=" https://1v4shanks.github.io/static-job-listings/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200  flex justify-center items-center mb-[2rem] font-bold px-[10px] py-[5px] cursor-pointer"
                  onMouseEnter={() =>
                    document.body.classList.add("cursor-hover")
                  }
                  onMouseLeave={() =>
                    document.body.classList.remove("cursor-hover")
                  }
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/1v4Shanks/static-job-listings.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200  flex justify-center items-center mb-[2rem] font-bold px-[10px] py-[5px] cursor-pointer"
                  onMouseEnter={() =>
                    document.body.classList.add("cursor-hover")
                  }
                  onMouseLeave={() =>
                    document.body.classList.remove("cursor-hover")
                  }
                >
                  {" "}
                  <span className="mr-[10px]">GitHub</span>
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-[3rem] bg-white p-[2rem] border border-black/10">
            <img
              className="w-full h-[25rem] object-cover shadow-lg"
              src={assets.products_carts}
              alt="thumbnail"
            />
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-bold">Product List & Cart</h2>
              <p className="text-x text-gray-500">
                Displays a list of products with the ability to add and remove
                items from the cart.
              </p>
              <p>
                <span className="text-x font-bold">Tech:</span> React, CSS.
              </p>
              <div className="flex gap-[1rem]">
                <a
                  href="https://1v4shanks.github.io/product-list-and-cart/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200  flex justify-center items-center mb-[2rem] font-bold px-[10px] py-[5px] cursor-pointer"
                  onMouseEnter={() =>
                    document.body.classList.add("cursor-hover")
                  }
                  onMouseLeave={() =>
                    document.body.classList.remove("cursor-hover")
                  }
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/1v4Shanks/product-list-and-cart.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200  flex justify-center items-center mb-[2rem] font-bold px-[10px] py-[5px] cursor-pointer"
                  onMouseEnter={() =>
                    document.body.classList.add("cursor-hover")
                  }
                  onMouseLeave={() =>
                    document.body.classList.remove("cursor-hover")
                  }
                >
                  {" "}
                  <span className="mr-[10px]">GitHub</span>
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
