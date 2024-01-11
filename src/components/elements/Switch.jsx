import clsx from "clsx";
import { useState } from "react";
import { parseLabel } from "../../../utils/parse-label";
import ToolTip from "../ToolTip";

const Switch = ({
  label,
  jsonKey,
  name = jsonKey,
  onChange,
  checked,
  isGroup,
  hide,
  description,
  validate,
  required = validate.required,
  ...rest
}) => {
  const [value, setValue] = useState(checked);

  if (hide) return null;

  return (
    <div className={clsx(!isGroup && "card", "flex items-center gap-4")}>
      <input
        {...rest}
        {...{ required }}
        name={name}
        id={name}
        type="checkbox"
        checked={value}
        className="w-4 h-4"
        onChange={() => {
          setValue(!value);
          onChange(!value);
        }}
      />

      {label && (
        <label htmlFor={name} className="font-semibold">
          {parseLabel(label)}{" "}
          {description && <ToolTip label={label} description={description} />}
        </label>
      )}
    </div>
  );
};

export default Switch;
