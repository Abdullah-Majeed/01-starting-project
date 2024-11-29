import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcepts.jsx';
import TabButtton from './components/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data.js';

function App() {
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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept,i) => (
              <CoreConcept key={i} {...concept} />
            ))}
          </ul>
        </section>
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
      </main>
    </div>
  );
}
export default App;
