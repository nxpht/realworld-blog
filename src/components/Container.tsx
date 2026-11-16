import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className: string;
};

function Container({ children, className = "" }: ContainerProps) {
  return <div className={`mx-auto max-w-[800px] px-4 ${className}`}>{children}</div>;
}
export default Container;
