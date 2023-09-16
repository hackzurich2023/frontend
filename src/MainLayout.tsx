import React, { PropsWithChildren, ReactNode } from "react";

import { Footer } from "components/Footer";
import { NavBar } from "components/NavBar";
import { Container } from "react-bootstrap";
import { isNonEmptyArray, NonEmptyArray } from "utils/types";
import { Link, useParams } from "react-router-dom";

export interface NavigationTab {
  id: string;
  name: string;
  icon: ReactNode;
  routerTo: string;
}

interface Props {
  tabs?: NavigationTab[];
}

function NavigationTabButton({
  tab,
  isActive,
}: {
  tab: NavigationTab;
  isActive: boolean;
}) {
  return (
    <div
      className="d-flex flex-grow-1 justify-content-around align-items-center"
      style={{
        height: "80px",
      }}
    >
      <Link
        to={tab.routerTo}
        className="d-flex flex-grow-1 flex-column align-items-center justify-content-center text-black"
        style={{
          borderColor: isActive ? "#000" : "transparent",
          borderBottomWidth: "5px",
          borderBottomStyle: "solid",
          height: "100%",
          textDecoration: "none",
        }}
      >
        {tab.icon}
        <span className="mb-0 fs-6">{tab.name}</span>
      </Link>
    </div>
  );
}

function TabNavigationBar({ tabs }: { tabs: NonEmptyArray<NavigationTab> }) {
  const { section } = useParams();

  return (
    <div
      className="bg-body position-fixed w-100 z-2 bottom-0"
      style={{
        height: "80px",
        borderTop: "2px solid #e0e0e0",
      }}
    >
      <div className="d-flex">
        {tabs.map((tab, index) => (
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

export function MainLayout({ children, tabs }: PropsWithChildren<Props>) {
  return (
    <>
      <NavBar />
      <Container
        className="position-fixed overflow-scroll p-0"
        style={{ top: "86px", height: "calc(100vh - 85px)", width: "100%" }}
      >
        <Container
          className="p-0"
          style={{
            minHeight: "calc(100% - 80px)",
          }}
        >
          {children}
        </Container>
        <Footer />
      </Container>
      {tabs && isNonEmptyArray(tabs) ? <TabNavigationBar tabs={tabs} /> : null}
    </>
  );
}
