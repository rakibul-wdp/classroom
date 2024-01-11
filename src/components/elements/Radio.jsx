import clsx from "clsx";
import { useEffect, useState } from "react";

const Radio = ({
  isGroup,
  options = [],
  onChange,
  initilize,
  hide,
  validate,
  defaultValue = validate?.defaultValue,
  readOnly = validate?.immutable,
  required = validate?.required,
}) => {
  const [selectedOption, setSelectedOption] = useState(
    defaultValue || options[0].value
  );

  useEffect(() => {
    initilize?.();
  }, []);

  if (hide) return null;

  return (
    <div className={clsx(!isGroup && "card", "grid grid-cols-2 gap-2")}>
      {options.map((option) => (
        <div
          key={option.value}
          className={clsx(
            "p-4 cursor-pointer bg-[#f0f7fe] rounded-md font-semibold border text-center",
            selectedOption === option.value
              ? "border-indigo-500 bg-[#e9f0fd]"
              : "border-transparent"
          )}
          onClick={() => {
            if (readOnly) return;

            setSelectedOption(option.value);
            onChange?.(option.value);
          }}
        >
          <input
            type="radio"
            defaultChecked={selectedOption === option.value}
            readOnly={readOnly}
          />

          <span>
            {option.label} {required && <span className="text-red-500">*</span>}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Radio;
