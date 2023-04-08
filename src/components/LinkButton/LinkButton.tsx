import { ReactNode } from "react";

type LinkButtonType = {
  children: ReactNode,
  title: string,
  href: string
}

const LinkButton = ({children, title, href}: LinkButtonType) => {
  return <a target="blank" title={title} href={href}>
    {children}
  </a>
  }
export default LinkButton;
