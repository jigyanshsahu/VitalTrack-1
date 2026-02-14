import { NavLink } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface NavItemProps {
  to: string;
  icon: LucideIcon;
  label: string;
  isEmergency?: boolean;
}

const NavItem = ({ to, icon: Icon, label, isEmergency }: NavItemProps) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
        isActive
          ? isEmergency
            ? "bg-red-600 text-white"
            : "bg-emerald-600 text-white"
          : `text-slate-300 hover:bg-slate-700 ${
              isEmergency ? "hover:text-red-400" : "hover:text-white"
            }`
      }`
    }
  >
    <Icon className="w-5 h-5" />
    <span className="font-medium">{label}</span>
  </NavLink>
);

export default NavItem;
