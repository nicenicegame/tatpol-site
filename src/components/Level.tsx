"use client";

import { ReactNode, createContext, useContext } from "react";

const ListContext = createContext(0);

type Props = {
  children?: ReactNode;
};

export default function Level({ children }: Props) {
  const level = useContext(ListContext);
  const paddingLeft = ["pl-0", "pl-3", "pl-6", "pl-9", "pl-12", "pl-15"][level];

  return (
    <ListContext.Provider value={level + 1}>
      <ul className={paddingLeft}>{children}</ul>
    </ListContext.Provider>
  );
}
