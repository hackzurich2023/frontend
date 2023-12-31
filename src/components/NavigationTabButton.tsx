import React, { ReactNode } from "react";

import { Link } from "react-router-dom";

export interface NavigationTab {
  id: string;
  name: string;
  icon: ReactNode;
  routerTo: string;
}

export function NavigationTabButton({
  tab,
  isActive,
}: {
  tab: NavigationTab;
  isActive: boolean;
}) {
  return (
    <div
      className="col-1 d-flex flex-grow-1 justify-content-around align-items-center"
      style={{
        height: "65px",
        padding: "0",
      }}
    >
      <Link
        to={tab.routerTo}
        className="d-flex flex-grow-1 flex-column align-items-center justify-content-center"
        style={{
          height: "100%",
          textDecoration: "none",
          color: isActive ? "#fff" : "#000",
          backgroundColor: isActive ? "#0074B2" : "transparent",
          borderRadius: "4px",
        }}
      >
        {tab.icon}
        <span className="mb-0 fs-6">{tab.name}</span>
      </Link>
    </div>
  );
}
