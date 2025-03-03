import { useState, useEffect } from "react";
import "./Input.css";

export interface InputProps {
  type: "text" | "password" | "email" | "number";
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  sublabel?: string;
  statusCode?: number;
}

export const Input = ({
  type,
  placeholder,
  onChange,
  label,
  sublabel,
  statusCode,
}: InputProps) => {
  const [classStatus, setClassStatus] = useState<string>("");

  useEffect(() => {
    handleMensage();
  }, [statusCode]);

  const getClassCode = (code: number) => {
    if (code >= 200 && code < 300) return "success";
    if (code >= 400 && code < 500) return "error";
    if (code >= 500) return "server-error";
    return "";
  };

  const handleMensage = () => {
    setClassStatus(getClassCode(statusCode || 0));
  };

  return (
    <div className={`input-container ${classStatus}`}>
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="input-field"
      />
      {sublabel && <label className="input-sublabel">{sublabel}</label>}
    </div>
  );
};
