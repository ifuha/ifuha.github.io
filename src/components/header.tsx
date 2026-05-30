import { Icon } from "@/components/icon/icon";
import TextType from "@/components/textType";

export default function Header() {
  return (
    <div className="text-2xl font-bold flex items-center justify-center gap-4 py-4 text-white">
      <Icon name="code" size={36} />
      <TextType
        text={["PORTFOLIO"]}
        typingSpeed={100}
        pauseDuration={2000}
        showCursor
        cursorCharacter="_"
        deletingSpeed={100}
        cursorBlinkDuration={0.5}
      />
    </div>
  );
}
