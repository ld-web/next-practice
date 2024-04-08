"use client";

import { PhpContext } from "@/context/PhpContext";
import DisplayElement from "@/components/exercises/php/arrays/DisplayElement";
import DisplayFirstElement from "@/components/exercises/php/arrays/DisplayFirstElement";
import DisplayLastElement from "@/components/exercises/php/arrays/DisplayLastElement";
import ForLoop from "@/components/exercises/php/loops/ForLoop";
import usePhp from "@/hooks/usePhp";
import Section from "@/components/exercises/Section";
import WhileLoop from "@/components/exercises/php/loops/WhileLoop";

export default function Exercises() {
  const php = usePhp();

  return (
    <PhpContext.Provider value={php}>
      <Section title="Les tableaux" id="les-tableaux">
        <DisplayFirstElement />
        <DisplayElement />
        <DisplayLastElement />
      </Section>

      <Section title="Les boucles" id="les-boucles">
        <ForLoop />
        <WhileLoop />
      </Section>
    </PhpContext.Provider>
  );
}
