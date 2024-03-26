import Link from "next/link";

const Anchor = ({ id }: { id: string }) => (
  <Link href={`#${id}`} className="text-slate-400 dark:text-slate-600">
    #
  </Link>
);

export default Anchor;
