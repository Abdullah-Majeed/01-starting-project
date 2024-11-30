import { useState } from "react";
import TabButtton from "./TabButton.jsx";
import { EXAMPLES } from "../../data.js";
import Section from "../Section.jsx";
import Tabs from "./Tabs.jsx";
export default function Example() {
    const [selectedTopic, setSelectedTopic] = useState('components');

    function handleClickTab(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please select a topic</p>
    if (selectedTopic) {
        tabContent = <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>
                    {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
        </div>
    }
    return (
        <Section id='examples' title="Examples">
            <Tabs
                buttons={<>
                    {Object.values(EXAMPLES).map((example, i) =>
                        <TabButtton
                            key={i}
                            isSelected={selectedTopic === example.lwTitle}
                            onClick={() => handleClickTab(example.lwTitle)}>{example.title}
                        </TabButtton>
                    )}
                </>}
            >
                {tabContent}
            </Tabs>
        </Section>
    )
}