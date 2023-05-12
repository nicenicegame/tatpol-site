"use client";

import { ReactNode, useState } from "react";
import { VscChevronDown, VscChevronRight } from "react-icons/vsc";

type Props = {
  children?: ReactNode;
  labelClassName?: string;
  label: ReactNode;
  iconSize?: number;
  hoverable?: boolean;
};

export default function Folder({
  children,
  labelClassName,
  label,
  iconSize,
  hoverable = true,
}: Props) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <li
      onClick={(e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
      }}
    >
      <span
        style={{
          paddingLeft: "100%",
          marginLeft: "-100%",
        }}
        className={`flex items-center gap-1 ${labelClassName || ""} ${
          hoverable && "hover:bg-slate-700"
        } cursor-pointer`}
      >
        {isOpen ? (
          <VscChevronDown size={iconSize} />
        ) : (
          <VscChevronRight size={iconSize} />
        )}
        {label}
      </span>
      {isOpen && <>{children}</>}
    </li>
  );
}
