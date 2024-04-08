import PhpPractice from "@/components/practice/PhpPractice";
import Enonce from "../../Enonce";
import Anchor from "@/components/utils/Anchor";

const initialCode = `<?php
$users = ['Amanda', 'Annie', 'Georgie', 'Victoria', 'Virgie', 'Ellen', 'Calvin'];
`;

const Hint = () => (
  <div>
    Pour afficher les éléments dans l&apos;ordre inverse, vous devez partir du
    dernier élément.
    <br />
    L&apos;index du dernier élément est donc{" "}
    <span className="bg-blue-500 dark:bg-gray-700 p-1 font-bold">
      count($users) - 1
    </span>
  </div>
);

const WhileLoop = () => {
  const checkCode = (code: string) => code.match(/while\s*\(/) !== null;

  const checkResult = (output: string[]): boolean => {
    return (
      output.length === 7 && output[0] === "Calvin" && output[6] === "Amanda"
    );
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg mb-2 font-bold uppercase" id="while-loop">
        Utiliser la boucle while <Anchor id="while-loop" />
      </h3>
      <Enonce>
        Affichez tous les éléments de ce tableau à l&apos;aide d&apos;une boucle
        while, <strong>mais en partant de la fin</strong>.
        <br />
        <strong>
          Affichez un utilisateur par ligne : utilisez la constante{" "}
          <span className="bg-slate-300 dark:bg-slate-800 p-1">PHP_EOL</span>{" "}
          pour revenir à la ligne
        </strong>
        <br />
        Vous devez afficher les éléments en sens inverse.
        <br />
        Pour valider, le premier prénom qui devra apparaître sera donc
        &quot;Calvin&quot; et le dernier &quot;Amanda&quot;
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

export default WhileLoop;
