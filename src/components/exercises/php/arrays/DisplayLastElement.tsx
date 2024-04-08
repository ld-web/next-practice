import PhpPractice from "@/components/practice/PhpPractice";
import Enonce from "../../Enonce";
import Anchor from "@/components/utils/Anchor";

const initialCode = `<?php
$notes = [1, 16, 7, 18, 6, 12, 14, 20];
`;

const Hint = () => (
  <div>
    Pour compter les éléments du tableau, utilisez la fonction{" "}
    <a href="https://www.php.net/manual/en/function.count" target="_blank">
      count
    </a>
    . Il faut ensuite se rappeler que les index commencent à 0, et finissent
    donc à...
  </div>
);

const DisplayLastElement = () => {
  const checkCode = (code: string) => code.indexOf("count") > 0;

  const checkResult = (output: string[]): boolean => {
    return output.length === 1 && output[0] === "20";
  };

  return (
    <div className="mb-8">
      <h3
        className="text-lg mb-2 font-bold uppercase"
        id="display-last-element"
      >
        Afficher le dernier élément <Anchor id="display-last-element" />
      </h3>
      <Enonce>
        Affichez le dernier élément du tableau de notes ci-dessous.
        <br />
        Utilisez une fonction de la SPL (Standard PHP Library) vous permettant
        de récupérer le nombre d&apos;éléments du tableau.
        <br />
        <strong>Note : </strong>N&apos;utilisez pas{" "}
        <a
          href="https://www.php.net/manual/en/function.end"
          target="_blank"
          className="bg-slate-300 dark:bg-slate-800 p-1 underline underline-offset-4"
        >
          end
        </a>
        &nbsp;pour valider l&apos;exercice
      </Enonce>
      <PhpPractice
        initialCode={initialCode}
        hint={<Hint />}
        checkCode={checkCode}
        checkOutput={checkResult}
      />
    </div>
  );
};

export default DisplayLastElement;
