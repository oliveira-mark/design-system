import "./button.css";

export interface ButtonProps {
  primary: "filled" | "light" | "outline";
  size:
    | "ultra-small"
    | "extra-small"
    | "small"
    | "medium"
    | "large"
    | "extra-large";
  label: string;
  onClick?: () => void;
}

export const Button = ({ primary, size, label, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${primary ?? ""} ${size ?? ""}`.trim()}
      {...props}
    >
      {label}
    </button>
  );
};
