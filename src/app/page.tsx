"use client";

import Header from "@/components/header";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Icon } from "@/components/icon/icon";

export default function Page() {
  const [hovers, setHover] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX - 10}px`;
        cursorRef.current.style.top = `${e.clientY - 10}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <div className="fixed flex w-full px-4">
        <Header></Header>
      </div>
      <div className="flex flex-col gap-16 justify-center items-center min-h-screen">
        <Link
          href={"/about"}
          className="text-white text-2xl font-black flex items-center justify-center cursor-pointer"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div
            className={`absolute transition-all duration-300 delay-100 ${hovers ? "opacity-0" : "scale-150"}`}
          >
            ABOUT
          </div>
          <div
            className={`absolute transition-all duration-300 delay-100 ${hovers ? "scale-150" : "opacity-0"}`}
          >
            ABOUT?
          </div>
        </Link>
        <Link href={"/create"}>
          <div className="text-white flex items-center justify-center text-2xl font-black cursor-pointer">
            CREATE
          </div>
        </Link>
        <div
          className="fixed pointer-events-none transition-all"
          ref={cursorRef}
          style={{
            left: position.x - 10,
            top: position.y - 10,
            transition: "left 0.1s ease, top 0.1s ease",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div
            className={`duration-200 delay-100 text-white ${hovers ? "scale-300" : "scale-100"}`}
          >
            <Icon name="scan" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
