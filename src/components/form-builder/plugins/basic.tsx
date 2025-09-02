import { CheckedState } from "@radix-ui/react-checkbox";
import { cn } from "../../../lib/cn";
import { Field, SelectOption } from "../../../types/form-builder.types";
import { Checkbox } from "../../../ui/checkbox";
import { DatePicker } from "../../../ui/date-picker";
import { Input } from "../../../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../ui/select";
import { Label } from "../../../ui/label";
import React from "react";
import { Button } from "../../../ui/button";
import { Eye, EyeOff } from "lucide-react";
import { Switch } from "../../../ui/switch";
import { Textarea } from "../../../ui/textarea";

interface BasicPluginProps {
  field?: Field;
}

export default function BasicPlugin({ field }: BasicPluginProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  switch (field?.variant) {
    case "text":
    case "email":
    case "tel":
      return (
        <Input
          {...field.props}
          className={cn(
            field?.className,
            field.error && "border-destructive focus-visible:ring-destructive"
          )}
          type={field.variant}
          placeholder={field.placeholder}
          value={field.props?.value}
          onChange={(event) => {
            field?.props?.onChange?.(event.target.value);
          }}
        />
      );
    case "number":
      return (
        <Input
          {...field.props}
          className={cn(
            field?.className,
            field.error && "border-destructive focus-visible:ring-destructive"
          )}
          type={field.variant}
          min={field.props?.min}
          max={field.props?.max}
          value={field.props?.value}
          placeholder={field?.placeholder}
          onChange={(event) => {
            const inputValue = Number(event.target.value);
            const min = field.props?.min ?? -Infinity;
            const max = field.props?.max ?? Infinity;
            const clampedValue = Math.max(min, Math.min(max, inputValue));
            field?.props?.onChange?.(clampedValue);
          }}
        />
      );
    case "select":
      return (
        <Select
          {...field.props}
          value={field?.props?.value}
          defaultValue={field?.props?.value}
          onValueChange={field?.props?.onValueChange}
          disabled={field?.props?.disabled}
        >
          <SelectTrigger
            id={field.id}
            className={cn(
              "w-full",
              field?.className,
              field.error && "border-destructive focus-visible:ring-destructive"
            )}
          >
            <SelectValue placeholder={field.placeholder} />
          </SelectTrigger>
          <SelectContent className="overflow-y-auto max-h-[15rem]">
            {field?.props?.options?.map((option: SelectOption) => {
              return (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      );
    case "date":
      return (
        <DatePicker
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
          nullable={field?.props?.nullable}
          disabled={field?.props?.disabled}
        />
      );
    case "check":
      return (
        <div className="flex items-center gap-2 h-8">
          <Checkbox
            id={field.label}
            className={cn(field?.className)}
            checked={field.props?.value as CheckedState}
            onCheckedChange={(value: CheckedState) =>
              field?.props?.onCheckedChange?.(value)
            }
          />
          <Label className={cn("text-sm font-semibold")} htmlFor={field.label}>
            {field.label}
          </Label>
        </div>
      );
    case "password":
      return (
        <div className="relative">
          <Input
            {...field.props}
            type={showPassword ? "text" : "password"}
            className={cn("pr-10", field?.className)}
            value={field?.props?.value as string}
            onChange={(e) => field?.props?.onChange?.(e.target.value)}
            autoComplete="new-password"
          />
          <Button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            variant={"link"}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </Button>
        </div>
      );
    case "switch":
      return (
        <div className={cn("flex items-center gap-2", field?.className)}>
          <Switch />
          <Label className="text-xs font-light">{field.description}</Label>
        </div>
      );
    case "textarea":
      return (
        <Textarea
          {...field.props}
          className={cn(
            !field.props?.resizable && "resize-none",
            field?.className
          )}
          placeholder={field.placeholder}
          value={field.props?.value}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            field?.props?.onChange?.(e.target.value)
          }
        />
      );
    case "checkbox":
      return (
        <div className="flex flex-col gap-2 my-1">
          {field.props?.selectOptions?.map((option: SelectOption) => (
            <div key={option.label} className="flex items-center gap-2">
              <Checkbox
                id={option.label}
                className={field?.className}
                checked={field.props?.value as CheckedState}
                onCheckedChange={(value: CheckedState) =>
                  field?.props?.onCheckedChange?.(value)
                }
              />
              <Label className="text-sm font-semibold">{option.label}</Label>
            </div>
          ))}
        </div>
      );
    case "custom":
      return (
        <div className={cn("flex flex-col gap-2", field?.className)}>
          {field.props?.children}
        </div>
      );
    case "empty":
      return null;
    default:
      return (
        <span className="text-xs text-red-500">Cannot Render Element</span>
      );
  }
}
