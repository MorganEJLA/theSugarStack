import { useState } from "react";

import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
import { EXAMPLES } from "../data.js";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  let tabContent = <p>Select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
      </div>
    );
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "ingredients"}
              onClick={() => handleSelect("ingredients")}
            >
              Ingredients
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "traditionalDesserts"}
              onClick={() => handleSelect("traditionalDesserts")}
            >
              Traditional Desserts
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "culturalConnections"}
              onClick={() => handleSelect("culturalConnections")}
            >
              Cultural Connections
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "sweetCoding"}
              onClick={() => handleSelect("sweetCoding")}
            >
              Sweet Coding
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
