import MdxStatement from "./statement.mdx";
import Hint from "./hint.mdx";
import Practice from "./Practice";
import usePhpExercise from "@/hooks/usePhpExercise";
import PhpExercise from "@/components/exercises/PhpExercise";

const DisplayElement = async () => {
  const { initialCode, metadata } = await usePhpExercise(
    "src/app/php/exercises/DisplayElement/initialCode.php",
    "src/app/php/exercises/DisplayElement/statement.mdx"
  );

  return (
    <PhpExercise metadata={metadata} Statement={MdxStatement}>
      <Practice initialCode={initialCode} hints={<Hint />} />
    </PhpExercise>
  );
};

export default DisplayElement;
