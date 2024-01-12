import clsx from "clsx";
import { parseLabel } from "../../utils/parse-label";
import ToolTip from "../ToolTip";

const Input = ({
  label,
  jsonKey,
  name = jsonKey,
  isGroup,
  hide,
  description,
  validate,
  placeholder,
  defaultValue = validate.defaultValue,
  readOnly = validate.immutable,
  required = validate.required,
  ...inputProps
}) => {
  if (inputProps.disable || hide) return null;

  return (
    <div
      className={clsx(
        !isGroup && "card",
        "grid grid-cols-2 gap-1 items-center"
      )}
    >
      {label && (
        <label htmlFor={name} className="w-auto font-semibold flex gap-1">
          {parseLabel(label)}{" "}
          {required && <span className="text-red-500">*</span>}
          {description && <ToolTip label={label} description={description} />}
        </label>
      )}

      <input
        {...inputProps}
        {...{ required, readOnly, defaultValue }}
        placeholder={placeholder || `Enter ${label}`}
        id={name}
        name={name}
        className="border py-2 px-4 rounded-md placeholder-gray-500 placeholder:font-medium bg-[#f1f7fe]"
      />
    </div>
  );
};

export default Input;
