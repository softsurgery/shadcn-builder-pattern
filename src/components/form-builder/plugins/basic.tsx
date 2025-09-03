import React from "react";
import { useBuilderComponents } from "@/context/FormBuilderContext";
import { Field, TextFieldProps } from "@/types/form-builder.types";

import { Input as InputFallback } from "@/components/ui/input";
import { DatePicker as DatePickerFallback } from "@/components/ui/date-picker";
import { Switch as SwitchFallback } from "@/components/ui/switch";
import { Textarea as TextareaFallback } from "@/components/ui/textarea";

import { PrebuiltSelect } from "../prebuilt/PrebuiltSelect";
import { PrebuiltPassword } from "../prebuilt/PrebuiltPassword";
import { PrebuiltCheckbox } from "../prebuilt/PrebuiltCheckbox";
import { cn } from "@/lib/cn";
import { Label } from "@/components/ui/label";

interface BasicPluginProps {
  field?: Field;
}

export default function BasicPlugin({ field }: BasicPluginProps) {
  const { Input, Select, DatePicker, Checkbox, Password, Switch, Textarea } =
    useBuilderComponents();
  const pluginRegistry: Record<string, (field: Field) => React.JSX.Element> = {
    text: (field) =>
      Input ? (
        Input(field)
      ) : (
        <InputFallback
          className={cn(
            field?.className,
            field.error && "border-destructive focus-visible:ring-destructive"
          )}
          type={field.variant}
          placeholder={field.props?.placeholder}
          value={field.props?.value}
          onChange={(event) => {
            field?.props?.onChange?.(event);
          }}
        />
      ),
    email: (field) =>
      Input ? (
        Input(field)
      ) : (
        <InputFallback
          className={cn(
            field?.className,
            field.error && "border-destructive focus-visible:ring-destructive"
          )}
          type={"email"}
          placeholder={field.props?.placeholder}
          value={field.props?.value}
          onChange={(event) => {
            field?.props?.onChange?.(event);
          }}
        />
      ),
    number: (field) =>
      Input ? (
        Input(field)
      ) : (
        <InputFallback
          className={cn(
            field?.className,
            field.error && "border-destructive focus-visible:ring-destructive"
          )}
          type={field.variant}
          min={field.props?.min}
          max={field.props?.max}
          value={field.props?.value}
          placeholder={field?.props?.placeholder}
          onChange={(event) => {
            const inputValue = Number(event.target.value);
            const min = field.props?.min ?? -Infinity;
            const max = field.props?.max ?? Infinity;
            const clampedValue = Math.max(min, Math.min(max, inputValue));
            field?.props?.onChange?.(clampedValue);
          }}
        />
      ),
    password: (field) =>
      Password ? (
        Password(field)
      ) : (
        <PrebuiltPassword
          {...field.props}
          value={field?.props?.value as string}
          onChange={(e: string) => field?.props?.onChange?.(e)}
        />
      ),
    select: (field) =>
      Select ? (
        Select(field)
      ) : (
        <PrebuiltSelect
          {...field.props}
          id={field.id}
          className={field.className}
        />
      ),
    date: (field) =>
      DatePicker ? (
        DatePicker(field)
      ) : (
        <DatePickerFallback
          className={cn(
            "w-full",
            field?.className,
            field.error && "border-destructive focus-visible:ring-destructive"
          )}
          value={
            (field?.props?.value &&
              new Date(field?.props?.value as string | Date | number)) ||
            undefined
          }
          onChange={(value: Date | null) => field?.props?.onDateChange?.(value)}
          placeholder={field.props?.placeholder}
          nullable={field?.props?.nullable}
          disabled={field?.props?.disabled}
        />
      ),
    switch: (field) =>
      Switch ? (
        Switch(field)
      ) : (
        <div className={cn("flex items-center gap-2", field?.className)}>
          <SwitchFallback
            {...field.props}
            id={field.label}
            checked={field?.props?.value}
            defaultChecked={field?.props?.defaultChecked}
            onCheckedChange={(value) => field?.props?.onCheckedChange?.(value)}
          />
          <Label className="text-xs font-light">{field.description}</Label>
        </div>
      ),
    checkbox: (field) =>
      Checkbox ? (
        Checkbox(field)
      ) : (
        <PrebuiltCheckbox
          {...field.props}
          id={field.id}
          className={field.className}
        />
      ),
    textarea: (field) =>
      Textarea ? (
        Textarea(field)
      ) : (
        <TextareaFallback
          {...field.props}
          id={field.id}
          className={cn(
            !field.props?.resizable && "resize-none",
            field?.className
          )}
          placeholder={field.props?.placeholder}
          value={field.props?.value}
          onChange={(event) => field?.props?.onChange?.(event)}
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
