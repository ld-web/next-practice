import PhpPractice from "@/components/practice/PhpPractice";
import Enonce from "../../Enonce";
import Anchor from "@/components/utils/Anchor";

const initialCode = `<?php
// Commencez la séquence avec 0 et 1 pour valider
// 0 1 1 2 3 5 8 13 21 34
`;

const Hint = () => <div></div>;

const Fibo = () => {
  const checkResult = (output: string[]): boolean => {
    return (
      output.length === 1 && output[0].match(/0 1 1 2 3 5 8 13 21 34/i) !== null
    );
  };

  return (
    <div className="mb-8">
      <h3
        className="text-lg mb-2 font-bold uppercase"
        id="while-loop-fibonacci"
      >
        Suite de Fibonacci <Anchor id="while-loop-fibonacci" />
      </h3>
      <Enonce>
        Écrivez un code qui affichera les 10 premiers nombres de la{" "}
        <a
          href="https://en.wikipedia.org/wiki/Fibonacci_sequence"
          className="underline underline-offset-4"
          target="_blank"
        >
          suite de Fibonacci
        </a>
        .
        <br />
        Vous séparerez chaque nombre de la suite avec un espace.
      </Enonce>
      <PhpPractice
        lines={20}
        initialCode={initialCode}
        hint={<Hint />}
        checkOutput={checkResult}
      />
    </div>
  );
};

export default Fibo;
