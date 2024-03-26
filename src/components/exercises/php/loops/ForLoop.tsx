import PhpPractice from "@/components/practice/PhpPractice";
import Enonce from "../../Enonce";
import Anchor from "@/components/utils/Anchor";

const initialCode = `<?php
$users = ['Amanda', 'Annie', 'Georgie', 'Victoria', 'Virgie', 'Ellen', 'Calvin'];
`;

const Hint = () => (
  <div>
    Une boucle for regroupe les trois parties d&apos;une boucle classique :
    <ul>
      <li>Instruction d&apos;initialisation</li>
      <li>Condition de maintien</li>
      <li>Instruction de pas</li>
    </ul>
  </div>
);

const ForLoop = () => {
  const checkCode = (code: string) => true;

  const checkResult = (output: string[]): boolean => {
    return output.length === 7;
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg mb-2 font-bold uppercase" id="for-loop">
        Afficher les éléments avec une boucle for <Anchor id="for-loop" />
      </h3>
      <Enonce>
        Affichez tous les éléments de ce tableau à l&apos;aide d&apos;une boucle
        for.
        <br />
        <strong>
          Affichez un utilisateur par ligne : utilisez la constante{" "}
          <span>PHP_EOL</span> pour revenir à la ligne
        </strong>
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

export default ForLoop;
