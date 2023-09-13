import { IconType, IconBaseProps } from "react-icons";
import "./IconLink.css";

type IconLinkProps = IconBaseProps & {
  name: string;
  href: string | URL;
  Icon: IconType;
};

function IconLink(props: IconLinkProps) {
  const { name, Icon, href, ...rest } = props;
  return (
    <div className="icon-link" onClick={() => window.open(href, "_blank")}>
      <Icon className="icon-link__icon" size={28} {...rest} />
      <span className="icon-link__name">{name}</span>
    </div>
  );
}

export default IconLink;
