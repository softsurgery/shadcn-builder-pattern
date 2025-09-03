import { FieldBuilder } from "./FieldBuilder";
import { FieldVariant, FormStructure } from "@/types/form-builder.types";
import { cn } from "@/lib/cn";
import { Label } from "@/components/ui/label";

interface FormBuilderProps {
  className?: string;
  structure: FormStructure;
}

const FormBuilder: React.FC<FormBuilderProps> = ({
  className,
  structure,
}: FormBuilderProps) => {
  return (
    <div className={cn("flex flex-col w-full", className)}>
      <form
        className={cn(
          "flex gap-4 xl:gap-10",
          structure?.orientation === "vertical"
            ? "flex-col xl:flex-row"
            : "flex-col"
        )}
        onSubmit={() => {
          return false;
        }}
      >
        {structure?.fieldsets?.map((fieldset, index) => (
          <div
            key={index}
            className={cn(
              "flex w-full",
              structure.orientation === "vertical"
                ? "flex-row xl:flex-col gap-10"
                : "flex-col gap-4"
            )}
          >
            {fieldset?.rows?.map((row, index) => {
              const fieldCount = row.fields.length;

              return (
                <div
                  key={index}
                  className={cn(
                    "grid gap-6 w-full",
                    structure.orientation === "vertical" || fieldCount === 1
                      ? "grid-cols-1"
                      : fieldCount === 2
                      ? "grid-cols-1 lg:grid-cols-2"
                      : fieldCount === 3
                      ? "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
                      : fieldCount === 4
                      ? "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
                      : "w-full"
                  )}
                >
                  {row.fields.map((field) => {
                    return (
                      <div
                        key={field.id}
                        className={cn(
                          "flex flex-col gap-2 w-full",
                          !!field.props?.hidden ? "hidden" : "block"
                        )}
                      >
                        <div className="flex flex-row justify-between items-center">
                          <Label
                            className={cn("text-xs font-semibold")}
                            htmlFor={field.id}
                          >
                            {field.label}
                          </Label>
                        </div>

                        <FieldBuilder field={field} />
                        <div className="flex justify-between items-center gap-2">
                          {field.variant !== FieldVariant.SWITCH &&
                            !field.error && (
                              <span className="font-medium text-xs opacity-70 leading-3">
                                {field.description}
                              </span>
                            )}
                          {field?.error && (
                            <span className="font-medium text-xs text-red-500 leading-3">
                              {field?.error}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        ))}
      </form>
    </div>
  );
};

export default FormBuilder;
