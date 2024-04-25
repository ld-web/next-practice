import Header from "@/components/exercises/Header";
import Statement, { meta } from "./statement.mdx";
import Hint from "./hint.mdx";
import path from "path";
import Practice from "./Practice";
import { getCode } from "../../utils";

const codePath = "src/app/php/exercises/DisplayElement/initialCode.php";

const DisplayElement = async () => {
  const initialCode = await getCode(path.join(process.cwd(), codePath));

  return (
    <div className="mb-8">
      <Header StatementJsx={Statement} meta={meta} />
      <Practice initialCode={initialCode} hints={<Hint />} />
    </div>
  );
};

export default DisplayElement;
