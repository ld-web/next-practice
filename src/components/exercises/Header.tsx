import Anchor from "@/components/utils/Anchor";
import { StatementMeta } from "@/index";
import Statement from "@/components/exercises/Statement";

interface HeaderProps {
  StatementJsx: React.ComponentType;
  meta: StatementMeta;
}

const Header = ({ StatementJsx, meta }: HeaderProps) => {
  return (
    <div>
      <h3 className="text-lg mb-2 font-bold uppercase" id={meta.id}>
        {meta.title} <Anchor id={meta.id} />
      </h3>
      <Statement>
        <StatementJsx />
      </Statement>
    </div>
  );
};

export default Header;
