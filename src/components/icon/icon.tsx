import { Code } from "./svg/code";
import { Scan } from "./svg/scan";
import { X } from "./svg/x";
import { Dotnet } from "./svg/dotnet";
import { Csharp } from "./svg/cSharp";
import { Next } from "./svg/next";
import { TailWind } from "./svg/tailwind";
import { TypeScript } from "./svg/ts";
import { Nuget } from "./svg/nuGet";
import { Npm } from "./svg/npm";
import { Git } from "./svg/git";
import { GitHub } from "./svg/gitHub";
import { VsCode } from "./svg/vsCode";
import { Claude } from "./svg/claude";
import { Pyton } from "./svg/python";
import { Js } from "./svg/js";

const icons = {
  code: Code,
  scan: Scan,
  x: X,
  dotnet: Dotnet,
  cSharp: Csharp,
  next: Next,
  tailWind: TailWind,
  ts: TypeScript,
  nuGet: Nuget,
  npm: Npm,
  git: Git,
  gitHub: GitHub,
  vsCode: VsCode,
  claude: Claude,
  python: Pyton,
  js: Js,
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
