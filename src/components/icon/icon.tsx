import { Code } from "./svg/code";
import Scan from "./svg/scan";

const icons = {
  code: Code,
  scan: Scan,
} as const;
export type IconProps = {
  size: number;
  name: keyof typeof icons;
};

export function Icon({ size, name }: IconProps) {
  const IconComponent = icons[name];
  return (
    <div
      style={{
        width: size,
        height: size,
      }}
    >
      <IconComponent />
    </div>
  );
}
