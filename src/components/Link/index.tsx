import { FC } from "react";

interface LinkProps {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
}

const Link: FC<LinkProps> = ({
  children,
  target = "_blank",
  rel = "noopener noreferrer",
  ...restProps
}): JSX.Element => {
  return (
    <a className="App-link" target={target} rel={rel} {...restProps}>
      {children}
    </a>
  );
};

export default Link;
