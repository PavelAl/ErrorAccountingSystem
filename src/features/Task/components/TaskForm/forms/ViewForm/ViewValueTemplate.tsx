import React from "react";

import { Label } from "@fluentui/react";

interface Props {
  label: string;
  value: string;
}

export const ViewValueTemplate = (props: Props) => {
  const { label, value } = props;

  return (
    <div>
      <Label>{label}</Label>
      <div>{value}</div>
    </div>
  )
}