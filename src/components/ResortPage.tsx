import { MainLayout } from "MainLayout";
import React, { ReactNode, useMemo } from "react";
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
import { Container } from "react-bootstrap";
import { SnowReport } from "components/SnowReport";

const TABS: (Omit<NavigationTab, "routerTo"> & { content: ReactNode })[] = [
  {
    id: "snow_reports",
    name: "Snow Report",
    icon: <FontAwesomeIcon icon={faSnowflake} />,
    content: <SnowReport />,
  },
  {
    id: "ski_pass",
    name: "Buy a Ski Pass",
    icon: <FontAwesomeIcon icon={faTicket} />,
    content: <h1>Buy a Ski Pass</h1>,
  },
  {
    id: "ski_map",
    name: "Ski Map",
    icon: <FontAwesomeIcon icon={faMap} />,
    content: <h1>Ski Map</h1>,
  },
  {
    id: "rental",
    name: "Rental",
    icon: <FontAwesomeIcon icon={faPersonHiking} />,
    content: <h1>Rental</h1>,
  },
  {
    id: "events",
    name: "Events",
    icon: <FontAwesomeIcon icon={faCalendar} />,
    content: <h1>Events</h1>,
  },
  {
    id: "food_and_drinks",
    name: "Food & Drinks",
    icon: <FontAwesomeIcon icon={faUtensils} />,
    content: <h1>Food & Drinks</h1>,
  },
];

function useResortTabs(resortName: ResortName) {
  return TABS.map(({ content, ...tab }) => ({
    ...tab,
    routerTo: `/resorts/${resortName}/${tab.id.toLowerCase()}`,
  }));
}

export function ResortPage() {
  const { resortName, section } = useParams();
  const resortTabs = useResortTabs(resortName as ResortName);
  const currentContent = useMemo(
    () =>
      TABS.filter(
        (tab, index) => (!section && index === 0) || tab.id === section
      )[0]?.content,
    [section]
  );

  return (
    <MainLayout tabs={resortTabs} currentUser={DEFAULT_USER}>
      <Container className="p-4">{currentContent}</Container>
    </MainLayout>
  );
}
