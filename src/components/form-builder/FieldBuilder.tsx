"use client";

import { Field, FieldVariant } from "../../types/form-builder.types";
import BasicPlugin from "./plugins/basic";

interface FieldBuilderProps {
  field?: Field<any>;
}

export const FieldBuilder = ({ field }: FieldBuilderProps) => {
  if (
    [
      "text",
      "email",
      "tel",
      "number",
      "select",
      "date",
      "check",
      "password",
      "switch",
      "textarea",
      "checkbox",
      "custom",
      "empty",
    ].includes(field?.variant as FieldVariant)
  ) {
    return <BasicPlugin field={field} />;
  }
};
