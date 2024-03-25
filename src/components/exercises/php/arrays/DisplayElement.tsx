import PhpPractice from "@/components/practice/PhpPractice";

const initialCode = `<?php
$notes = [1, 16, 7, 18, 6, 12, 14, 20];
`;

const DisplayElement = () => {
  const check = (output: string[]): boolean => {
    console.log(output);
    return output.length === 1 && output[0] === "18";
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl mb-2">Afficher un élément</h3>
      <p className="mb-2">
        Affichez le 4ème élément du tableau de notes ci-dessous
      </p>
      <PhpPractice initialCode={initialCode} checkOutput={check} />
    </div>
  );
};

export default DisplayElement;
