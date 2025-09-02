import React from "react";
import { useBuilderComponents } from "@/context/FormBuilderContext";
import { Field } from "@/types/form-builder.types";

import { Input as InputFallback } from "@/components/ui/input";
import { DatePicker as DatePickerFallback } from "@/components/ui/date-picker";
import { Switch as SwitchFallback } from "@/components/ui/switch";
import { Textarea as TextareaFallback } from "@/components/ui/textarea";

import { SelectPrebuilt } from "../prebuilt/SelectPrebuilt";
import { PasswordPrebuilt } from "../prebuilt/PasswordPrebuilt";
import { CheckboxPrebuilt } from "../prebuilt/CheckboxPrebuilt";

interface BasicPluginProps {
  field?: Field;
}

export default function BasicPlugin({ field }: BasicPluginProps) {
  const { Input, Select, DatePicker, Checkbox, Password, Switch, Textarea } =
    useBuilderComponents();
  const pluginRegistry: Record<string, (field: Field) => React.JSX.Element> = {
    text: (field) =>
      Input ? (
        <Input
          {...field.props}
          id={field.id}
          className={field.className}
          placeholder={field.placeholder}
        />
      ) : (
        <InputFallback
          {...field.props}
          id={field.id}
          className={field.className}
          placeholder={field.placeholder}
        />
      ),
    email: (field) =>
      Input ? (
        <Input
          {...field.props}
          type="email"
          id={field.id}
          className={field.className}
          placeholder={field.placeholder}
        />
      ) : (
        <InputFallback
          {...field.props}
          type="email"
          id={field.id}
          className={field.className}
          placeholder={field.placeholder}
        />
      ),
    number: (field) =>
      Input ? (
        <Input
          {...field.props}
          type="number"
          id={field.id}
          className={field.className}
          placeholder={field.placeholder}
        />
      ) : (
        <InputFallback
          {...field.props}
          type="number"
          id={field.id}
          className={field.className}
          placeholder={field.placeholder}
        />
      ),
    password: (field) =>
      Password ? (
        <Password
          {...field.props}
          id={field.id}
          className={field.className}
          placeholder={field.placeholder}
        />
      ) : (
        <PasswordPrebuilt
          {...field.props}
          id={field.id}
          className={field.className}
          placeholder={field.placeholder}
        />
      ),
    select: (field) =>
      Select ? (
        <Select
          {...field.props}
          id={field.id}
          className={field.className}
          placeholder={field.placeholder}
        />
      ) : (
        <SelectPrebuilt
          {...field.props}
          id={field.id}
          className={field.className}
          placeholder={field.placeholder}
        />
      ),
    date: (field) =>
      DatePicker ? (
        <DatePicker
          {...field.props}
          id={field.id}
          className={field.className}
          placeholder={field.placeholder}
        />
      ) : (
        <DatePickerFallback
          {...field.props}
          id={field.id}
          className={field.className}
          placeholder={field.placeholder}
        />
      ),
    switch: (field) =>
      Switch ? (
        <Switch
          {...field.props}
          id={field.id}
          className={field.className}
          placeholder={field.placeholder}
        />
      ) : (
        <SwitchFallback
          {...field.props}
          id={field.id}
          className={field.className}
          placeholder={field.placeholder}
        />
      ),
    checkbox: (field) =>
      Checkbox ? (
        <Checkbox
          {...field.props}
          id={field.id}
          className={field.className}
          placeholder={field.placeholder}
        />
      ) : (
        <CheckboxPrebuilt
          {...field.props}
          id={field.id}
          className={field.className}
          placeholder={field.placeholder}
        />
      ),
    textarea: (field) =>
      Textarea ? (
        <Textarea
          {...field.props}
          id={field.id}
          className={field.className}
          placeholder={field.placeholder}
        />
      ) : (
        <TextareaFallback
          {...field.props}
          id={field.id}
          className={field.className}
          placeholder={field.placeholder}
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
