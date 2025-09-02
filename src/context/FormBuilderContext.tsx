import {
  CheckboxFieldProps,
  DateFieldProps,
  PasswordFieldProps,
  SelectFieldProps,
  SwitchFieldProps,
  TextareaFieldProps,
  TextFieldProps,
} from "@/types/form-builder.types";
import { createContext, useContext, ReactNode, ComponentType } from "react";

type BuilderComponents = {
  Input?: (props: TextFieldProps) => React.JSX.Element;
  Select?: (props: SelectFieldProps) => React.JSX.Element;
  DatePicker?: (props: DateFieldProps) => React.JSX.Element;
  Checkbox?: (props: CheckboxFieldProps) => React.JSX.Element;
  Password?: (props: PasswordFieldProps) => React.JSX.Element;
  Switch?: (props: SwitchFieldProps) => React.JSX.Element;
  Textarea?: (props: TextareaFieldProps) => React.JSX.Element;
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
