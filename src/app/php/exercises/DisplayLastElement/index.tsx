import MdxStatement from "./statement.mdx";
import Hint from "./hint.mdx";
import Practice from "./Practice";
import usePhpExercise from "@/hooks/usePhpExercise";
import PhpExercise from "@/components/exercises/PhpExercise";

const DisplayLastElement = async () => {
  const { initialCode, metadata } = await usePhpExercise(
    "src/app/php/exercises/DisplayLastElement/initialCode.php",
    "src/app/php/exercises/DisplayLastElement/statement.mdx"
  );

  return (
    <PhpExercise metadata={metadata} Statement={MdxStatement}>
      <Practice initialCode={initialCode} hints={<Hint />} />
    </PhpExercise>
  );
};

export default DisplayLastElement;
