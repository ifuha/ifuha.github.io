import { Icon } from "@/components/icon/icon";

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <div className="flex items-center justify-center">
        <div className="text-2xl font-bold flex items-center justify-center gap-4 py-4">
          <Icon name="code" size={36} />
          PORTFOLIO
        </div>
      </div>
    </div>
  );
}
