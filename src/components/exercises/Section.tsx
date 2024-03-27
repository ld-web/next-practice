import { ReactNode } from "react";
import Anchor from "../utils/Anchor";

interface SectionProps {
  title: string;
  id: string;
  children: ReactNode;
}

const Section = ({ title, id, children }: SectionProps) => (
  <div>
    <h2 className="text-2xl md:text-4xl border-b mb-5" id={id}>
      {title} <Anchor id={id} />
    </h2>

    {children}
  </div>
);

export default Section;
