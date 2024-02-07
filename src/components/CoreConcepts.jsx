import React from "react";
import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept/CoreConcept.jsx";
import {Section} from './Section.jsx'

export const CoreConcepts = () => {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((e) => (
          <CoreConcept key={e.title} {...e} />
        ))}
      </ul>
    </Section>
  );
};
