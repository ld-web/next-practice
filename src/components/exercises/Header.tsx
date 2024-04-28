import Anchor from "@/components/utils/Anchor";

interface HeaderProps {
  title: string;
  id: string;
  children: React.ReactNode;
}

const Header = ({ title, id, children }: HeaderProps) => {
  return (
    <div>
      <h3 className="text-lg mb-2 font-bold uppercase" id={id}>
        {title} <Anchor id={id} />
      </h3>
      <div className="p-3 border-l-4 border-blue-500 bg-sky-100 dark:bg-slate-700">
        {children}
      </div>
    </div>
  );
};

export default Header;
