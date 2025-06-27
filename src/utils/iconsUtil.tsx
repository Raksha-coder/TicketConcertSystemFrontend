// src/components/common/Icon.tsx
import {
  FaBars,
  FaUser,
  FaTimes,
} from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

const icons = {
  Bars: FaBars,
  Home: AiFillHome,
  User: FaUser,
  Settings: FiSettings,
  Close: FaTimes,
};

export type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  size?: number | string;
  color?: string;
  className?: string;
}

const Icon = ({ name, size = 20, color = "inherit", className = "" }: IconProps) => {
  const Component = icons[name];
  if (!Component) return null;
  return <Component size={size} color={color} className={className} />;
};

export default Icon;
