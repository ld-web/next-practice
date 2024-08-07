import MdxStatement from "./statement.mdx";
import Hint from "./hint.mdx";
import Practice from "./Practice";
import initialCode from "./initialCode.php";
import PhpExercise from "@/components/exercises/PhpExercise";

const metadata = {
  title: "Afficher les éléments avec une boucle for",
  id: "for-loop",
};

const ForLoop = async () => {
  return (
    <PhpExercise metadata={metadata} Statement={MdxStatement}>
      <Practice initialCode={initialCode} hints={<Hint />} />
    </PhpExercise>
  );
};

export default ForLoop;
