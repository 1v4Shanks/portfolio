import React from "react";

function Title({text}) {
  return (
    <>
      <h2 className="bg-gray-200  inline-block px-[1rem] py-[.7rem] flex justify-center items-center font-bold text-2xl tracking-widest ">
        {text}
      </h2>
    </>
  );
}

export default Title;
