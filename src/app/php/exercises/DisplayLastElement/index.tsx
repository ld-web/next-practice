import MdxStatement from "./statement.mdx";
import Hint from "./hint.mdx";
import Practice from "./Practice";
import PhpExercise from "@/components/exercises/PhpExercise";
import initialCode from "./initialCode.php";

const metadata = {
  title: "Afficher le dernier élément",
  id: "display-last-element",
};

const DisplayLastElement = async () => {
  return (
    <PhpExercise metadata={metadata} Statement={MdxStatement}>
      <Practice initialCode={initialCode} hints={<Hint />} />
    </PhpExercise>
  );
};

export default DisplayLastElement;
