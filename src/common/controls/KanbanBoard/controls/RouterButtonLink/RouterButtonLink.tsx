import { DefaultButton } from "@fluentui/react";
import { useHistory, useRouteMatch } from "react-router-dom";

interface Props {
  to: string;
  label: string;
}

export const RouterButtonLink = (props: Props) => {
  const { label, to } = props;

  const history = useHistory();
  const primary = useRouteMatch({
    path: to,
    exact: true
  });

  return (
    <DefaultButton
      text={label}
      onClick={() => history.push(to)}
      primary={primary !== null}
    />
  )
}