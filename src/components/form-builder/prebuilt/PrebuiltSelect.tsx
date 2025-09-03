import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/cn";
import { SelectOption } from "@/types/form-builder.types";

interface PrebuiltSelectProps
  extends React.ComponentProps<typeof SelectPrimitive.Root> {
  id?: string;
  classNames?: {
    triggerClassName?: string;
    valueClassName?: string;
    itemClassName?: string;
  };
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  options?: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  error?: string;
}

export const PrebuiltSelect = ({
  classNames,
  id,
  value,
  defaultValue,
  onValueChange,
  options,
  placeholder,
  disabled,
  error,
  ...props
}: PrebuiltSelectProps) => {
  return (
    <Select
      {...props}
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      disabled={disabled}
    >
      <SelectTrigger
        id={id}
        className={cn(
          "w-full",
          classNames?.triggerClassName,
          error && "border-destructive focus-visible:ring-destructive"
        )}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="overflow-y-auto max-h-[15rem]">
        {options?.map((option: SelectOption) => {
          return (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
