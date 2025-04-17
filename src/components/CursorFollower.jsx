import React, { useEffect, useRef } from "react";

function CursorFollower() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const root = document.body;

    const pos = { x: 0, y: 0 };
    const followerPos = { x: 0, y: 0 };

    const position = (element, x, y) => {
      element.style.transform = `translate3d(${x}px, ${y}px,0)`;
    };

    const handleMouseMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      position(cursor, pos.x, pos.y);
    };

    const animate = () => {
      followerPos.x += (pos.x - followerPos.x) * 0.11;
      followerPos.y += (pos.y - followerPos.y) * 0.11;

      position(follower, followerPos.x, followerPos.y);
      requestAnimationFrame(animate);
    };

    root.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      root.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Cursor */}
      <div
        ref={cursorRef}
        className="inner-circle fixed top-0 left-0 w-[6px] h-[6px] -ml-[3px] -mt-[3px] bg-black rounded-full pointer-events-none z-50 transition-[width,height,background-color,margin] duration-400 ease-in-out"
      ></div>

      {/* Follower */}
      <div
        ref={followerRef}
        className="outer-circle fixed top-0 left-0 w-[30px] h-[30px] -ml-[15px] -mt-[15px] border-2 border-black rounded-full pointer-events-none z-40 opacity-50 transition-opacity duration-300 ease-in-out"
      ></div>
    </>
  );
}

export default CursorFollower;
