import React, { FunctionComponent, useMemo } from "react";

import {
  faCalendar,
  faMap,
  faPersonHiking,
  faSnowflake,
  faTicket,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { NavigationTab } from "components/NavigationTabButton";
import { SkiPass } from "components/SkiPass";
import { SnowReport } from "components/SnowReport";
import { ResortName, RESORTS } from "data/resorts";
import { DEFAULT_USER } from "data/user";
import { MainLayout } from "MainLayout";

const TABS: (Omit<NavigationTab, "routerTo"> & {
  content: FunctionComponent<{ resortName: ResortName }>;
})[] = [
  {
    id: "snow_reports",
    name: "Snow Report",
    icon: <FontAwesomeIcon icon={faSnowflake} />,
    content: SnowReport,
  },
  {
    id: "ski_pass",
    name: "Buy a Ski Pass",
    icon: <FontAwesomeIcon icon={faTicket} />,
    content: SkiPass,
  },
  {
    id: "ski_map",
    name: "Ski Map",
    icon: <FontAwesomeIcon icon={faMap} />,
    content: () => <h1>Ski Map</h1>,
  },
  {
    id: "rental",
    name: "Rental",
    icon: <FontAwesomeIcon icon={faPersonHiking} />,
    content: () => <h1>Rental</h1>,
  },
  {
    id: "events",
    name: "Events",
    icon: <FontAwesomeIcon icon={faCalendar} />,
    content: () => <h1>Events</h1>,
  },
  {
    id: "food_and_drinks",
    name: "Food & Drinks",
    icon: <FontAwesomeIcon icon={faUtensils} />,
    content: () => <h1>Food & Drinks</h1>,
  },
];

function useResortTabs(resortName: ResortName) {
  return TABS.map(({ content, ...tab }) => ({
    ...tab,
    routerTo: `/resorts/${resortName}/${tab.id.toLowerCase()}`,
  }));
}

function isResortName(name?: string): name is ResortName {
  return !!name && name in RESORTS;
}

export function ResortPage() {
  const { resortName, section } = useParams();
  const resortTabs = useResortTabs(resortName as ResortName);
  const ContentComponent = useMemo(
    () =>
      TABS.filter(
        (tab, index) => (!section && index === 0) || tab.id === section
      )[0]?.content,
    [section]
  );

  return (
    <MainLayout tabs={resortTabs} currentUser={DEFAULT_USER} withFooter={false}>
      <div className="d-flex p-4 flex-column h-100">
        {isResortName(resortName) && (
          <ContentComponent resortName={resortName} />
        )}
      </div>
    </MainLayout>
  );
}
