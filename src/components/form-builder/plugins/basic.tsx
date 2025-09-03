import React from "react";
import { useBuilderComponents } from "@/context/FormBuilderContext";
import { Field } from "@/types/form-builder.types";

import { Input as InputFallback } from "@/components/ui/input";
import { DatePicker as DatePickerFallback } from "@/components/ui/date-picker";
import { Switch as SwitchFallback } from "@/components/ui/switch";
import { Textarea as TextareaFallback } from "@/components/ui/textarea";

import { PrebuiltSelect } from "../prebuilt/PrebuiltSelect";
import { PrebuiltPassword } from "../prebuilt/PrebuiltPassword";
import { PrebuiltCheckbox } from "../prebuilt/PrebuiltCheckbox";

interface BasicPluginProps {
  field?: Field;
}

export default function BasicPlugin({ field }: BasicPluginProps) {
  const { Input, Select, DatePicker, Checkbox, Password, Switch, Textarea } =
    useBuilderComponents();
  const pluginRegistry: Record<string, (field: Field) => React.JSX.Element> = {
    text: (field) =>
      Input ? (
        <Input {...field.props} id={field.id} className={field.className} />
      ) : (
        <InputFallback
          {...field.props}
          id={field.id}
          className={field.className}
        />
      ),
    email: (field) =>
      Input ? (
        <Input
          {...field.props}
          type="email"
          id={field.id}
          className={field.className}
        />
      ) : (
        <InputFallback
          {...field.props}
          type="email"
          id={field.id}
          className={field.className}
        />
      ),
    number: (field) =>
      Input ? (
        <Input
          {...field.props}
          type="number"
          id={field.id}
          className={field.className}
        />
      ) : (
        <InputFallback
          {...field.props}
          type="number"
          id={field.id}
          className={field.className}
        />
      ),
    password: (field) =>
      Password ? (
        <Password {...field.props} id={field.id} className={field.className} />
      ) : (
        <PrebuiltPassword
          {...field.props}
          id={field.id}
          className={field.className}
        />
      ),
    select: (field) =>
      Select ? (
        <Select {...field.props} id={field.id} className={field.className} />
      ) : (
        <PrebuiltSelect
          {...field.props}
          id={field.id}
          className={field.className}
        />
      ),
    date: (field) =>
      DatePicker ? (
        <DatePicker
          {...field.props}
          id={field.id}
          className={field.className}
        />
      ) : (
        <DatePickerFallback
          {...field.props}
          id={field.id}
          className={field.className}
        />
      ),
    switch: (field) =>
      Switch ? (
        <Switch {...field.props} id={field.id} className={field.className} />
      ) : (
        <SwitchFallback
          {...field.props}
          id={field.id}
          className={field.className}
        />
      ),
    checkbox: (field) =>
      Checkbox ? (
        <Checkbox {...field.props} id={field.id} className={field.className} />
      ) : (
        <PrebuiltCheckbox
          {...field.props}
          id={field.id}
          className={field.className}
        />
      ),
    textarea: (field) =>
      Textarea ? (
        <Textarea {...field.props} id={field.id} className={field.className} />
      ) : (
        <TextareaFallback
          {...field.props}
          id={field.id}
          className={field.className}
        />
      ),
    custom: (field) => (
      <div id={field.id} className={field.className}>
        {field.props?.children}
      </div>
    ),
    empty: () => <React.Fragment />,
  };

  return (
    pluginRegistry[field?.variant as keyof typeof pluginRegistry]?.(
      field as Field
    ) ?? <span>Cannot Render Element</span>
  );
}
