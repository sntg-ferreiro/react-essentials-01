import React from "react";
import { EXAMPLES } from "../data.js";
import { TabButton } from "./TabButton.jsx";
import { useState } from "react";
import { Section } from "./Section.jsx";
import { Tabs } from "./Tabs.jsx";

const BUTTON_VALUES = ["components", "jsx", "props", "state"];

export const Examples = () => {
  const [topic, settopic] = useState();

  function handleSelect(selectedButton) {
    console.log("Hello Selected! " + selectedButton);
    settopic(selectedButton);
  }

  let tabContent = !topic ? (
    <p>Elegi algo wacho</p>
  ) : (
    <div id="tab-content">
      <h3>{EXAMPLES[topic].title}</h3>
      <p>{EXAMPLES[topic].description}</p>
      <pre>
        <code>{EXAMPLES[topic].code}</code>
      </pre>
    </div>
  );

  let tabButtonContent = BUTTON_VALUES.map((b) => (
    <TabButton isSelected={topic === b} onClick={() => handleSelect(b)} key={b}>
      {b.toUpperCase()}
    </TabButton>
  ));

  return (
    <Section id="examples" title="Examples">
      <Tabs  buttons={tabButtonContent}>{tabContent}</Tabs>
    </Section>
  );
};
