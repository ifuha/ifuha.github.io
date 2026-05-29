import { Icon } from "@/components/icon/icon";
import TextType from "@/components/textType";

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <div className="flex items-center justify-center">
        <div className="text-2xl font-bold flex items-center justify-center gap-4 py-4 text-white">
          <Icon name="code" size={36} />
          <TextType
            text={["PORTFOLIO"]}
            typingSpeed={75}
            pauseDuration={2000}
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            cursorBlinkDuration={0.5}
          />
        </div>
      </div>
    </div>
  );
}
