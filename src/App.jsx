import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcepts.jsx';
import TabButtton from './components/TabButton.jsx';


function App() {
  function handleClickTab(selectedButton) {
    console.log(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept {...concept} />
            ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButtton onSelect={() => handleClickTab('components')}>Components</TabButtton>
            <TabButtton onSelect={() => handleClickTab('jsx')}>JSX</TabButtton>
            <TabButtton onSelect={() => handleClickTab('props')}>Props</TabButtton>
            <TabButtton onSelect={() => handleClickTab('state')}>State</TabButtton>
          </menu>
        </section>
      </main>
    </div>
  );
}
export default App;
