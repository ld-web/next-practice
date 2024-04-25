import Section from "@/components/exercises/Section";
import DisplayFirstElement from "./DisplayFirstElement";
import DisplayElement from "./DisplayElement";
import DisplayLastElement from "./DisplayLastElement";
import ForLoop from "./ForLoop";
import WhileLoop from "./WhileLoop";

export default function Exercises() {
  return (
    <div>
      <Section title="Les tableaux" id="les-tableaux">
        <DisplayFirstElement />
        <DisplayElement />
        <DisplayLastElement />
      </Section>

      <Section title="Les boucles" id="les-boucles">
        <ForLoop />
        <WhileLoop />
      </Section>
    </div>
  );
}
