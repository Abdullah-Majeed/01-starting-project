import { useState } from "react";
import TabButtton from "./TabButton.jsx";
import { EXAMPLES } from "../../data.js";
import Section from "../Section.jsx";
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
            <menu>
                <TabButtton isSelected={selectedTopic === 'components'} onClick={() => handleClickTab('components')}>Components</TabButtton>
                <TabButtton isSelected={selectedTopic === 'jsx'} onClick={() => handleClickTab('jsx')}>JSX</TabButtton>
                <TabButtton isSelected={selectedTopic === 'props'} onClick={() => handleClickTab('props')}>Props</TabButtton>
                <TabButtton isSelected={selectedTopic === 'state'} onClick={() => handleClickTab('state')}>State</TabButtton>
            </menu>
            {tabContent}
        </Section>
    )
}