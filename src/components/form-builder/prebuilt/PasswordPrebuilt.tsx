import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/cn";
import { Eye, EyeOff } from "lucide-react";

//@ts-ignore
interface PasswordPrebuiltProps extends React.ComponentProps<"input"> {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  autoComplete?: string;
}

export const PasswordPrebuilt = ({
  className,
  value,
  onChange,
  placeholder,
  disabled,
  error,
  autoComplete = "new-password",
  ...props
}: PasswordPrebuiltProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="relative">
      <Input
        {...props}
        type={showPassword ? "text" : "password"}
        className={cn("pr-10", className)}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        autoComplete={autoComplete}
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
};
