import { CORE_CONCEPTS } from "../../data.js";
import Section from "../Section.jsx";
import CoreConceptDetail from "./CoreConceptDetail.jsx";
export default function CoreConcept() {
    return (
        <Section id="core-concepts" title="Core Concepts">
            <ul>
                {CORE_CONCEPTS.map((concept, i) => (
                    <CoreConceptDetail key={i} {...concept} />
                ))}
            </ul>
        </Section>
    )
}