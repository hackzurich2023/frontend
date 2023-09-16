import { MainLayout } from "MainLayout";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { useParams, useRoutes } from "react-router-dom";
import { ResortName } from "data/resorts";

import { NavigationTab } from "components/NavigationTabButton";

const TABS: Omit<NavigationTab, "routerTo">[] = [
  {
    id: "weather",
    name: "Weather",
    icon: <FontAwesomeIcon icon={faCloudSun} />,
  },
  {
    id: "weather1",
    name: "Weather1",
    icon: <FontAwesomeIcon icon={faCloudSun} />,
  },
  {
    id: "weather2",
    name: "Weather2",
    icon: <FontAwesomeIcon icon={faCloudSun} />,
  },
  {
    id: "weather3",
    name: "Weather3",
    icon: <FontAwesomeIcon icon={faCloudSun} />,
  },
  {
    id: "weather4",
    name: "Weather4",
    icon: <FontAwesomeIcon icon={faCloudSun} />,
  },
  {
    id: "weather5",
    name: "Weather5",
    icon: <FontAwesomeIcon icon={faCloudSun} />,
  },
];

function useResortTabs(resortName: ResortName) {
  return TABS.map((tab) => ({
    ...tab,
    routerTo: `/resorts/${resortName}/${tab.id.toLowerCase()}`,
  }));
}

export function ResortPage() {
  const { resortName } = useParams();
  const resortTabs = useResortTabs(resortName as ResortName);

  return (
    <MainLayout tabs={resortTabs}>
      <h1>Resort Page</h1>
    </MainLayout>
  );
}
