import {
  CheckboxFieldProps,
  DateFieldProps,
  Field,
  PasswordFieldProps,
  SelectFieldProps,
  SwitchFieldProps,
  TextareaFieldProps,
  TextFieldProps,
} from "@/types/form-builder.types";
import { createContext, useContext, ReactNode, ComponentType } from "react";

type BuilderComponents = {
  Input?: (field: Field<TextFieldProps>) => React.JSX.Element;
  Select?: (field: Field<SelectFieldProps>) => React.JSX.Element;
  DatePicker?: (field: Field<DateFieldProps>) => React.JSX.Element;
  Checkbox?: (field: Field<CheckboxFieldProps>) => React.JSX.Element;
  Password?: (field: Field<PasswordFieldProps>) => React.JSX.Element;
  Switch?: (field: Field<SwitchFieldProps>) => React.JSX.Element;
  Textarea?: (field: Field<TextareaFieldProps>) => React.JSX.Element;
};

const BuilderComponentsContext = createContext<BuilderComponents>({});

export const useBuilderComponents = () => useContext(BuilderComponentsContext);

export const BuilderComponentsProvider = ({
  components,
  children,
}: {
  components: BuilderComponents;
  children: ReactNode;
}) => {
  return (
    <BuilderComponentsContext.Provider value={components}>
      {children}
    </BuilderComponentsContext.Provider>
  );
};
