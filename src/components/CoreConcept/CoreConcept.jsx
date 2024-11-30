import { CORE_CONCEPTS } from "../../data.js";
import CoreConceptDetail from "./CoreConceptDetail.jsx";
export default function CoreConcept() {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((concept, i) => (
                    <CoreConceptDetail key={i} {...concept} />
                ))}
            </ul>
        </section>
    )
}