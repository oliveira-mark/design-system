import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import "./Dropdown.css";

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  options: DropdownOption[];
  onSelect: (value: string) => void;
  placeholder?: string;
}

export const Dropdown = ({
  options,
  onSelect,
  placeholder = "Select",
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<DropdownOption | null>(null);

  const handleSelect = (option: DropdownOption) => {
    setSelected(option);
    onSelect(option.value);
    setIsOpen(false);
  };

  return (
    <div className={`dropdown-container ${isOpen ? "open" : ""}`}>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        <span>{selected ? selected.label : placeholder}</span>
        <ChevronDownIcon />
      </button>
      {isOpen && (
        <div className={`dropdown-options`}>
          {options.map((option) => (
            <span key={option.value} onClick={() => handleSelect(option)}>
              {option.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
