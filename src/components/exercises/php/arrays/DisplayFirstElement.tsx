import PhpPractice from "@/components/practice/PhpPractice";
import Enonce from "../../Enonce";
import Anchor from "@/components/utils/Anchor";

const initialCode = `<?php
$notes = [1, 16, 7, 18, 6, 12, 14, 20];
`;

const Hint = () => (
  <div>Rappelez-vous que les index sont numérotés à partir de 0</div>
);

const DisplayFirstElement = () => {
  const checkCode = (code: string) => code.indexOf("echo $notes[0]") > 0;

  const checkResult = (output: string[]): boolean => {
    return output.length === 1 && output[0] === "1";
  };

  return (
    <div className="mb-8">
      <h3
        className="text-lg mb-2 font-bold uppercase"
        id="display-first-element"
      >
        Afficher le premier élément <Anchor id="display-first-element" />
      </h3>
      <Enonce>Affichez le 1er élément du tableau de notes ci-dessous</Enonce>
      <PhpPractice
        initialCode={initialCode}
        hint={<Hint />}
        checkCode={checkCode}
        checkOutput={checkResult}
      />
    </div>
  );
};

export default DisplayFirstElement;
