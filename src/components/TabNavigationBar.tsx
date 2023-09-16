import { NonEmptyArray } from "utils/types";
import { useParams } from "react-router-dom";
import React from "react";
import { NavigationTab, NavigationTabButton } from "components/NavigationTabButton";

export function TabNavigationBar({
  tabs,
}: {
  tabs: NonEmptyArray<NavigationTab>;
}) {
  const { section } = useParams();

  return (
    <div
      className="bg-body position-fixed w-100 z-2 bottom-0"
      style={{
        height: "130px",
        borderTop: "2px solid #e0e0e0",
      }}
    >
      <div className="d-flex">
        {tabs.slice(0, 3).map((tab, index) => (
          <NavigationTabButton
            key={tab.name}
            tab={tab}
            isActive={(!section && index === 0) || tab.id === section}
          />
        ))}
      </div>
      <div className="d-flex">
        {tabs.slice(3).map((tab, index) => (
          <NavigationTabButton
            key={tab.name}
            tab={tab}
            isActive={(!section && index === 0) || tab.id === section}
          />
        ))}
      </div>
    </div>
  );
}
