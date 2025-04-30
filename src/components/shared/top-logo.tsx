import holosEuLogoWhiteBg from "../../assets/images/branding/holos-eu-logo-white-bg.png";

export default function TopLogo() {
  return (
    <div className="flex items-center gap-1 h-full">
      <img
        src={holosEuLogoWhiteBg}
        className="h-[55%] aspect-square rounded-xs"
      ></img>
      <h1 className="text-xs text-white font-bold">HOLOS-EU</h1>
    </div>
  );
}
