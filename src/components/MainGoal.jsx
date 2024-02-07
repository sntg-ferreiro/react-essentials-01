import { Section } from "./Section";
import { Tabs } from "./Tabs";
import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept/CoreConcept";

const BUTTON_VALUES = ["components", "jsx", "props", "state"];

export const MainGoal = () => {

  let buttons = BUTTON_VALUES.map(b => <button key={b}>{b}</button>);

  return (
    <div>
      <h3>
        Este texto se supone que es My Main Goal, o sea, construir el
        conocimiento para poder armar nuestra propia app de intercambios
        magikeiros!!!!
      </h3>
      <Section id="examples" title="test12">
        <Tabs Container="ul" buttons={buttons}>{CORE_CONCEPTS.map((e) => (
          <CoreConcept key={e.title} {...e} />
        ))}</Tabs>
      </Section>
    </div>
  );
};
