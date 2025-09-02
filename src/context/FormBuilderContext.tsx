import { createContext, useContext, ReactNode, ComponentType } from "react";

type BuilderComponents = {
  Input?: ComponentType<any>;
  Select?: ComponentType<any>;
  DatePicker?: ComponentType<any>;
  Checkbox?: ComponentType<any>;
  Password?: ComponentType<any>;
  Switch?: ComponentType<any>;
  Textarea?: ComponentType<any>;
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
