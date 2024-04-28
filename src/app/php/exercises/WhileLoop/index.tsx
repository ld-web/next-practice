import MdxStatement from "./statement.mdx";
import Hint from "./hint.mdx";
import Practice from "./Practice";
import usePhpExercise from "@/hooks/usePhpExercise";
import PhpExercise from "@/components/exercises/PhpExercise";

const WhileLoop = async () => {
  const { initialCode, metadata } = await usePhpExercise(
    "src/app/php/exercises/WhileLoop/initialCode.php",
    "src/app/php/exercises/WhileLoop/statement.mdx"
  );

  return (
    <PhpExercise metadata={metadata} Statement={MdxStatement}>
      <Practice initialCode={initialCode} hints={<Hint />} />
    </PhpExercise>
  );
};

export default WhileLoop;
