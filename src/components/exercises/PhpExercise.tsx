import { StatementMeta } from "@/index";
import Header from "./Header";

interface PhpExerciseProps {
  metadata: StatementMeta;
  Statement: React.ComponentType;
  children: React.ReactNode;
}

const PhpExercise = ({ metadata, Statement, children }: PhpExerciseProps) => {
  return (
    <div className="mb-8">
      <Header title={metadata.title} id={metadata.id}>
        <Statement />
      </Header>
      {children}
    </div>
  );
};

export default PhpExercise;
