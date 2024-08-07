import MdxStatement from "./statement.mdx";
import Hint from "./hint.mdx";
import Practice from "./Practice";
import PhpExercise from "@/components/exercises/PhpExercise";
import initialCode from "./initialCode.php";

const metadata = {
  title: "Utiliser la boucle while",
  id: "while-loop",
};

const WhileLoop = async () => {
  return (
    <PhpExercise metadata={metadata} Statement={MdxStatement}>
      <Practice initialCode={initialCode} hints={<Hint />} />
    </PhpExercise>
  );
};

export default WhileLoop;
