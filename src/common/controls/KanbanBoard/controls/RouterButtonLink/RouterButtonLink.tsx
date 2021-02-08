import { DefaultButton } from "@fluentui/react";
import { Link, useHistory, useParams, useRouteMatch } from "react-router-dom";

interface Props {
  to: string;
  label: string;
}

export const RouterButtonLink = (props: Props) => {
  const { label, to } = props;

  const primary = useRouteMatch({
    path: to,
    exact: true
  });

  return (
    <Link to={to}>
      <DefaultButton
        text={label}
        primary={primary?.isExact}
      />
    </Link>
  )
}