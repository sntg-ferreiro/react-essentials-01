import React from "react";

export const Tabs = ({children, buttons, Container = "menu"}) => {
    return (
    <>
      <Container>
        {buttons}
      </Container>
      {children}
    </>
  );
};
