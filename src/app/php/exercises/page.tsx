"use client";

import { PhpContext } from "@/context/PhpContext";
import DisplayElement from "@/components/exercises/php/arrays/DisplayElement";
import DisplayFirstElement from "@/components/exercises/php/arrays/DisplayFirstElement";
import DisplayLastElement from "@/components/exercises/php/arrays/DisplayLastElement";
import Anchor from "@/components/utils/Anchor";
import ForLoop from "@/components/exercises/php/loops/ForLoop";
import usePhp from "@/hooks/usePhp";

export default function Exercises() {
  const php = usePhp();

  return (
    <PhpContext.Provider value={php}>
      <h2 className="text-2xl md:text-4xl border-b mb-5" id="les-tableaux">
        Les tableaux <Anchor id="les-tableaux" />
      </h2>

      <DisplayFirstElement />
      <DisplayElement />
      <DisplayLastElement />

      <h2 className="text-2xl md:text-4xl border-b mb-5" id="les-boucles">
        Les boucles <Anchor id="les-boucles" />
      </h2>

      <ForLoop />
    </PhpContext.Provider>
  );
}
