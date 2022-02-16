import { FC } from "react";

interface LinkProps {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
}

const Link: FC<LinkProps> = ({ children, ...restProps }): JSX.Element => (
  <a className="App-link" {...restProps}>
    {children}
  </a>
);

Link.defaultProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};

export default Link;
