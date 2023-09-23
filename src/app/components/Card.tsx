import { ReactNode } from "react";

type CardProps = {
  children: ReactNode
}

const Card = ({ children }: CardProps) => {
  return (
    <article className="rounded-2xl border h-screen flex flex-col items-center justify-center">
      { children }
    </article>
  );
}

export default Card;
