import { ReactNode } from "react";

type LinkButtonType = {
  children: ReactNode,
  title: string,
  href: string
}

const LinkButton = ({children, title, href}: LinkButtonType) => {
  return <a className="flex bg-first text-third hover:scale-105 rounded-xl p-3 gap-4 items-center" target="blank" title={title} href={href}>
    {children}
  </a>
  }
export default LinkButton;
