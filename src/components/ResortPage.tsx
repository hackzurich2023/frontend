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
import { useParams } from "react-router-dom";

import { ComingSoon } from "components/ComingSoon";
import { NavigationTab } from "components/NavigationTabButton";
import { SkiMapPage } from "components/SkiMapPage";
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
    content: SkiMapPage,
  },
  {
    id: "rental",
    name: "Rental",
    icon: <FontAwesomeIcon icon={faPersonHiking} />,
    content: () => <ComingSoon title="Rental" />,
  },
  {
    id: "events",
    name: "Events",
    icon: <FontAwesomeIcon icon={faCalendar} />,
    content: () => <ComingSoon title="Events" />,
  },
  {
    id: "food_and_drinks",
    name: "Food & Drinks",
    icon: <FontAwesomeIcon icon={faUtensils} />,
    content: () => <ComingSoon title="Food & Drinks" />,
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
