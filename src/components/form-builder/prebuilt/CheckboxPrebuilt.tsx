interface CheckboxPrebuiltProps {
  id: string;
  className?: string;
  checked?: boolean;
  onCheckedChange?: (value: boolean) => void;
}

export const CheckboxPrebuilt: React.FC<CheckboxPrebuiltProps> = ({
  id,
  className,
  checked,
  onCheckedChange,
}: CheckboxPrebuiltProps) => {
  return (
    <div className={className}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onCheckedChange?.(e.target.checked)}
      />
      <label htmlFor={id}></label>
    </div>
  );
};
