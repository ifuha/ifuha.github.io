"use client";

import { useState, useEffect, useRef } from "react";
import DecryptedText from "@/components/DecryptedText";
import { Icon } from "@/components/icon/icon";
import Link from "next/link";

export default function About() {
  const [NameHovers, setNameHover] = useState(false);
  const [stackHover, setStackHover] = useState(false);
  const [stackModal, setStackModal] = useState(false);
  const [backHover, setBackHover] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setStackModal(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [stackModal]);

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
    <div className="min-h-screen bg-black text-white text-2xl font-black">
      <div className="w-full p-4">
        <div className="flex flex-col justify-center">
          <div
            className="text-2xl font-black flex gap-4"
            onMouseEnter={() => setNameHover(true)}
            onMouseLeave={() => setNameHover(false)}
          >
            <div>Name:</div>
            <div
              className={`absolute left-24 transition-all duration-300 delay-100 ${NameHovers ? "opacity-0" : "scale-100"}`}
            >
              井藤 珀
            </div>
            <div
              className={`absolute left-24 transition-all duration-300 delay-100 ${NameHovers ? "scale-100" : "opacity-0"}`}
            >
              IFUJI HAKU
            </div>
          </div>
          <div className="md:w-full w-50">
            <DecryptedText
              text="KADOKAWAドワンゴ情報工科学院"
              animateOn="view"
              clickMode="once"
              className="wrap-break-word"
              speed={60}
            />
          </div>
          <div className="md:w-full w-50">
            <DecryptedText
              text="2年高等部 システムエンジニア"
              animateOn="view"
              clickMode="once"
              className="wrap-break-word"
              speed={90}
            />
          </div>
          <Link href={"/"}>
            <div
              className="w-36"
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
          <div className="flex flex-wrap gap-4">
            <div className="bg-blue-950 p-2 border-2 border-gray-700 rounded-md">
              Lang
              <div className="flex gap-4">
                <Icon name="cSharp" size={64} />
                <Icon name="ts" size={64} />
                <Icon name="python" size={64} />
                <Icon name="js" size={64} />
              </div>
            </div>
            <div className="bg-blue-950 p-2 border-2 border-gray-700 rounded-md">
              Frame Work
              <div className="flex gap-4">
                <Icon name="dotnet" size={64} />
                <Icon name="next" size={64} />
                <Icon name="laravel" size={64} />
              </div>
            </div>
            <div className="bg-blue-950 p-2 border-2 border-gray-700 rounded-md">
              Style Sheet
              <div className="flex gap-4">
                <Icon name="tailWind" size={64} />
              </div>
            </div>
            <div className="bg-blue-950 p-2 border-2 border-gray-700 rounded-md">
              Package
              <div className="flex gap-4">
                <Icon name="nuGet" size={64} />
                <Icon name="npm" size={64} />
              </div>
            </div>
            <div className="bg-blue-950 p-2 border-2 border-gray-700 rounded-md">
              version control
              <div className="flex gap-4">
                <Icon name="git" size={64} />
                <Icon name="gitHub" size={64} />
              </div>
            </div>
            <div className="bg-blue-950 p-2 border-2 border-gray-700 rounded-md">
              Editer
              <div className="flex gap-4">
                <Icon name="vsCode" size={64} />
              </div>
            </div>
            <div className="bg-blue-950 p-2 border-2 border-gray-700 rounded-md">
              AI
              <div className="flex gap-4">
                <Icon name="claude" size={64} />
              </div>
            </div>
          </div>
          <div
            ref={cursorRef}
            className="fixed pointer-events-none"
            onMouseEnter={() => {
              (setStackHover(true), setBackHover(true));
            }}
            onMouseLeave={() => {
              (setStackHover(false), setBackHover(false));
            }}
          >
            <div
              className={`transform duration-200 delay-100 ${stackHover ? "scale-300" : "scale-100"} ${backHover ? "scale-300" : "scale-100"}`}
            >
              <Icon name="scan" size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
