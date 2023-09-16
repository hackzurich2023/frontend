import React, { PropsWithChildren } from "react";

import { Container } from "react-bootstrap";

import { Footer } from "components/Footer";
import { NavBar } from "components/NavBar";
import { NavigationTab } from "components/NavigationTabButton";
import { TabNavigationBar } from "components/TabNavigationBar";
import { User } from "data/user";
import { isNonEmptyArray } from "utils/types";

interface Props {
  tabs?: NavigationTab[];
  currentUser?: User;
  withFooter?: boolean;
}

export function MainLayout({
  children,
  tabs,
  currentUser,
  withFooter = true,
}: PropsWithChildren<Props>) {
  const verticalSpaceTaken = 86 + (tabs && isNonEmptyArray(tabs) ? 130 : 0);;
  return (
    <>
      <NavBar currentUser={currentUser} />
      <Container
        className="position-fixed overflow-scroll p-0"
        style={{ top: "86px", height: `calc(100vh - ${verticalSpaceTaken}px)`, width: "100%" }}
      >
        <div className="p-0 h-100">
          {children}
          { withFooter ? <Footer /> : null }
        </div>
      </Container>
      {tabs && isNonEmptyArray(tabs) ? <TabNavigationBar tabs={tabs} /> : null}
    </>
  );
}
