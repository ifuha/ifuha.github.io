"use client";

import { useState, useEffect, useRef } from "react";
import { Icon } from "@/components/icon/icon";
import Link from "next/link";
import DecryptedText from "@/components/DecryptedText";

export default function Create() {
  const [hovers, setHovers] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);
  const [backHover, setBackHover] = useState(false);

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
    <div className="min-h-svh bg-black overflow-auto">
      <div className="fixed w-full z-50 h-13 bg-black top-0 text-white text-xl font-black flex items-center">
        <Link href={"/"}>
          <div
            className="w-36 p-4"
            onMouseEnter={() => setBackHover(true)}
            onMouseLeave={() => setBackHover(false)}
          >
            <DecryptedText
              text={backHover ? "←" : "BACK"}
              animateOn="view"
              clickMode="once"
              speed={140}
            />
          </div>
        </Link>
      </div>
      <div className="fixed w-full h-13 z-50 bg-black bottom-0" />
      <div className="flex flex-col gap-4 md:items-center items-start justify-center py-32 w-full px-4">
        <div>
          <div className="text-white text-2xl font-bold">CREATE</div>
          <div className="text-white font-black">個人制作</div>
          <Link
            href={"https://meme-cells.vercel.app/"}
            className="text-white duration-300 delay-100 hover:-rotate-x-10 hover:rotate-y-5"
            onMouseEnter={() => setHovers(true)}
            onMouseLeave={() => setHovers(false)}
          >
            <div className="text-2xl font-bold">MEMECELLS</div>
            <img src="/memecells.png" alt="memeCells" width={460} />
          </Link>
          <Link
            href={"https://github.com/ifuha/project-maars"}
            className="text-white duration-300 delay-100 hover:-rotate-x-10 hover:rotate-y-5 w-115"
            onMouseEnter={() => setHovers(true)}
            onMouseLeave={() => setHovers(false)}
          >
            <div className="md:w-full">
              <div className="text-2xl font-bold ">MAARS</div>
              <div>自分の趣味を投稿するアプリ</div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-start">
          <div className="text-white font-black">チーム制作</div>
          <Link
            href={"https://tsugite26.vercel.app/"}
            className="text-white duration-300 delay-100 hover:-rotate-x-10 hover:rotate-y-5 w-115"
            onMouseEnter={() => setHovers(true)}
            onMouseLeave={() => setHovers(false)}
          >
            <div className="text-2xl font-bold">Tsugite</div>
            <div className="text-2xl font-black md:w-full w-60 wrap-break-word">
              伝統工芸の後継者を応援するアプリ
            </div>
          </Link>
          <Link
            href={"https://github.com/vantan-project/flare"}
            className="text-white duration-300 delay-100 hover:-rotate-x-10 hover:rotate-y-5 w-115"
            onMouseEnter={() => setHovers(true)}
            onMouseLeave={() => setHovers(false)}
          >
            <div className="text-2xl font-bold">flare</div>
            <div className="text-2xl font-black">生活をblogにするアプリ</div>
          </Link>
        </div>
        <div
          className="fixed pointer-events-none transition-all z-50"
          ref={cursorRef}
          style={{
            left: position.x - 10,
            top: position.y - 10,
            transition: "left 0.1s ease, top 0.1s ease",
          }}
        >
          <div
            className={`duration-200 delay-100  ${hovers ? "scale-400 text-black" : "scale-100 text-white"} ${backHover ? "scale-200" : "scale-100"}`}
          >
            <Icon name="scan" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
