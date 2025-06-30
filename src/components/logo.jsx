import { Link } from "react-router";

export const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-sm">
      <span className="text-white font-bold text-lg animate-pulse">☢️</span>
    </div>
    <Link to="/">
      <span className="font-bold text-xl bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
        SteamLand
      </span>
    </Link>
  </div>
);
