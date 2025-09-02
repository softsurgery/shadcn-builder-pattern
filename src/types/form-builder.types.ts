import { CheckedState } from "@radix-ui/react-checkbox";

export interface FormStructure {
  title?: string;
  description?: string;
  orientation?: "vertical" | "horizontal";
  includeHeader?: boolean;
  fieldsets: Fieldset[];
}

export interface Fieldset {
  title?: string;
  description?: string;
  includeHeader?: boolean;
  rows: FieldsetRow[];
}

export interface FieldsetRow {
  className?: string;
  fields: Field[];
}

export enum FieldVariant {
  //basic
  TEXT = "text",
  EMAIL = "email",
  TEL = "tel",
  NUMBER = "number",
  PASSWORD = "password",
  DATE = "date",
  SELECT = "select",
  CHECKBOX = "checkbox",
  RADIO = "radio",
  SWITCH = "switch",
  TEXTAREA = "textarea",
  IMAGE = "image",
  EMPTY = "empty",
  CUSTOM = "custom",
  MULTI_SELECT = "multi_select",
}

export interface Field<T = any> {
  id: string;
  label?: string;
  className?: string;
  containerClassName?: string;
  variant: FieldVariant;
  required?: boolean;
  description?: string;
  placeholder?: string;
  hidden?: boolean;
  error?: string;
  props?: T;
}

export interface BaseFieldProps {
  disabled?: boolean;
}

export interface TextFieldProps extends BaseFieldProps {
  value?: string | null;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface EmailFieldProps extends BaseFieldProps {
  value?: string | null;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TelFieldProps extends BaseFieldProps {
  value?: string | null;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface NumberFieldProps extends BaseFieldProps {
  value?: string | null;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
}

export interface PasswordFieldProps extends BaseFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface DateFieldProps extends BaseFieldProps {
  value?: Date | null;
  onDateChange?: (e: Date | null) => void;
  nullable?: boolean;
  disabled?: boolean;
}

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectFieldProps extends BaseFieldProps {
  value?: string | null;
  onValueChange?: (value: string) => void;
  options?: SelectOption[];
}

export interface MultiSelectFieldProps extends BaseFieldProps {
  value?: string[];
  onValueChange?: (value: string[]) => void;
  options?: SelectOption[];
}

export interface CheckboxFieldProps extends BaseFieldProps {
  checked?: boolean;
  onCheckedChange?: (e: CheckedState) => void;
}

export interface SwitchFieldProps extends BaseFieldProps {
  checked?: boolean;
  onCheckedChange?: (e: CheckedState) => void;
}

export interface TextareaFieldProps extends BaseFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  cols?: number;
  rows?: number;
  resizable?: boolean;
}

export interface CustomFieldProps extends BaseFieldProps {
  className?: string;
  children: React.ReactNode;
  includeLabel?: boolean;
}

export interface EmptyFieldProps {}
