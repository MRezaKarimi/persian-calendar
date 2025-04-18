import React, { useState, useEffect, useRef } from "react";

interface DropDownProps {
  options: { value: number; label: string }[];
  placeholder?: string;
  onSelect: (value: number) => void;
  selectedOption: DropDownProps["options"][0];
}

const DropDown: React.FC<DropDownProps> = ({
  options,
  placeholder = "Select an option",
  onSelect,
  selectedOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: DropDownProps["options"][0]) => {
    onSelect(option.value);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-full rounded-md border border-transparent hover:border-gray-300 px-2 py-1 bg-white text-sky-800 font-medium focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption?.label || placeholder}
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-10 w-max rounded-lg bg-white shadow-lg">
          <ul
            className="py-1 text-sm text-center text-gray-700 grid grid-cols-3"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <li
                key={index}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
