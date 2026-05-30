"use client";

import { useState, useEffect, useRef } from "react";
import DecryptedText from "@/components/DecryptedText";
import { Icon } from "@/components/icon/icon";

export default function About() {
  const [NameHovers, setNameHover] = useState(false);
  const [skillsHover, setSkillsHover] = useState(false);
  const [skillModal, setSkillModal] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSkillModal(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [skillModal]);

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
      <div className="w-120 h-120 p-4">
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
          <DecryptedText
            text="KADOKAWAドワンゴ情報工科学院"
            animateOn="view"
            clickMode="once"
            speed={70}
          />
          <DecryptedText
            text="2年高等部 システムエンジニア"
            animateOn="view"
            clickMode="once"
            speed={70}
          />
          <div
            onMouseEnter={() => setSkillsHover(true)}
            onMouseLeave={() => setSkillsHover(false)}
          >
            <DecryptedText
              text={skillsHover ? "CLICKME" : "SKILLS"}
              animateOn="view"
              clickMode="once"
              speed={100}
              className="cursor-pointer"
              onClick={() => setSkillModal(true)}
            />
          </div>
          {skillModal && (
            <div className="fixed bg-white w-120 h-120">
              <div></div>
            </div>
          )}
          <div
            ref={cursorRef}
            className="fixed pointer-events-none"
            style={{
              left: position.x - 10,
              top: position.y - 10,
              transition: "left 0.1s ease, top 0.1s ease",
            }}
            onMouseEnter={() => setSkillModal(true)}
            onMouseLeave={() => setSkillModal(false)}
          >
            <div
              className={`transform duration-200 delay-100 ${skillsHover ? "scale-300" : "scale-100"}`}
            >
              <Icon name="scan" size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
