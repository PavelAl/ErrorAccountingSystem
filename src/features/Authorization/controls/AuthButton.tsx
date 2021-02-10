import { DefaultButton } from "@fluentui/react";
import * as React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../useAuth";

export function AuthButton() {
  let history = useHistory();
  let auth = useAuth();

  if (!auth.user) return <div />;

  return (
    <DefaultButton
      onClick={() => {
        auth.signout(() => history.push("/"));
      }}
      text={'Sign out'}
    />
  );
}
