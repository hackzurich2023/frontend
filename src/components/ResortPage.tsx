import { MainLayout } from "MainLayout";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCloudSun,
  faMap,
  faPersonHiking,
  faSnowflake,
  faTicket,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { useParams, useRoutes } from "react-router-dom";
import { ResortName } from "data/resorts";

import { NavigationTab } from "components/NavigationTabButton";
import { DEFAULT_USER } from "data/user";

const TABS: Omit<NavigationTab, "routerTo">[] = [
  {
    id: "snow_reports",
    name: "Snow Report",
    icon: <FontAwesomeIcon icon={faSnowflake} />,
  },
  {
    id: "ski_pass",
    name: "Buy a Ski Pass",
    icon: <FontAwesomeIcon icon={faTicket} />,
  },
  {
    id: "ski_map",
    name: "Ski Map",
    icon: <FontAwesomeIcon icon={faMap} />,
  },
  {
    id: "rental",
    name: "Rental",
    icon: <FontAwesomeIcon icon={faPersonHiking} />,
  },
  {
    id: "events",
    name: "Events",
    icon: <FontAwesomeIcon icon={faCalendar} />,
  },
  {
    id: "food_and_drinks",
    name: "Food & Drinks",
    icon: <FontAwesomeIcon icon={faUtensils} />,
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
    <MainLayout tabs={resortTabs} currentUser={DEFAULT_USER}>
      <h1>Resort Page</h1>
    </MainLayout>
  );
}
