interface PrebuiltCheckboxProps {
  id: string;
  className?: string;
  checked?: boolean;
  onCheckedChange?: (value: boolean) => void;
}

export const PrebuiltCheckbox: React.FC<PrebuiltCheckboxProps> = ({
  id,
  className,
  checked,
  onCheckedChange,
}: PrebuiltCheckboxProps) => {
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
