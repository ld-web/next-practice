import PhpPractice from "@/components/practice/PhpPractice";
import Enonce from "../../Enonce";
import Anchor from "@/components/utils/Anchor";

const initialCode = `<?php
$notes = [1, 16, 7, 18, 6, 12, 14, 20];
`;

const Hint = () => (
  <div>
    Pour afficher l&apos;élément, il faut accéder à la valeur avec le bon index,
    dans le tableau. Rappelez-vous que les index sont numérotés à patir de 0
  </div>
);

const DisplayElement = () => {
  const checkCode = (code: string) => code.match(/\$notes\s*\[3\]/) !== null;

  const checkResult = (output: string[]): boolean => {
    return output.length === 1 && output[0] === "18";
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg mb-2 font-bold uppercase" id="display-element">
        Afficher un élément <Anchor id="display-element" />
      </h3>
      <Enonce>Affichez le 4ème élément du tableau de notes ci-dessous</Enonce>
      <PhpPractice
        initialCode={initialCode}
        hint={<Hint />}
        checkCode={checkCode}
        checkOutput={checkResult}
      />
    </div>
  );
};

export default DisplayElement;
