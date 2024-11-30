import { useState } from "react";
import TabButtton from "./TabButton.jsx";
import { EXAMPLES } from "../../data.js";
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
        <section id='examples'>
            <h2>Examples</h2>
            <menu>
                <TabButtton isSelected={selectedTopic === 'components'} onSelect={() => handleClickTab('components')}>Components</TabButtton>
                <TabButtton isSelected={selectedTopic === 'jsx'} onSelect={() => handleClickTab('jsx')}>JSX</TabButtton>
                <TabButtton isSelected={selectedTopic === 'props'} onSelect={() => handleClickTab('props')}>Props</TabButtton>
                <TabButtton isSelected={selectedTopic === 'state'} onSelect={() => handleClickTab('state')}>State</TabButtton>
            </menu>
            {tabContent}
        </section>
    )
}