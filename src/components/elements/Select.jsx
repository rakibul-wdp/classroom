import clsx from "clsx";
import { useState } from "react";
import Select from "react-select";
import { parseLabel } from "../../utils/parse-label";
import ToolTip from "../ToolTip";

const ListInput = ({
  name,
  id = name,
  label,
  options,
  onChange,
  isGroup,
  hide,
  description,
  validate,
  defaultValue = validate?.defaultValue,
  required = validate.required,
  readonly = validate.immutable,
  ...rest
}) => {
  const [value, setValue] = useState({
    value: defaultValue || "",
    label: defaultValue || "",
  });

  const handleSelectionChange = (data) => {
    setValue(data);

    onChange?.(data);
  };

  if (hide) return null;

  return (
    <div
      className={clsx(
        !isGroup && "card",
        "grid grid-cols-2 gap-1 items-center"
      )}
    >
      {label && (
        <label htmlFor={name} className="font-semibold">
          {parseLabel(label)}{" "}
          {required && <span className="text-red-500">*</span>}
          {description && <ToolTip label={label} description={description} />}
        </label>
      )}

      <Select
        id={id}
        {...rest}
        menuPosition="fixed"
        className="block capitalize w-full text-left font-medium border border-gray-300 rounded-md shadow-sm appearance-none sm:text-sm"
        styles={{
          control: (base) => ({
            ...base,
            border: "0",
            backgroundColor: "#f1f7fe",
            boxShadow: "0",
            "&:hover": {
              border: "0",
            },
          }),
        }}
        required={required}
        value={value}
        onChange={(data) => handleSelectionChange(data)}
        options={options}
        isMulti={false}
        isDisabled={readonly}
      />
    </div>
  );
};

export default ListInput;
