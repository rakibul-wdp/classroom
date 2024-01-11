import clsx from "clsx";
import { useState } from "react";
import RSwitch from "react-switch";
import { parseLabel } from "../../../utils/parse-label";
import ToolTip from "../ToolTip";

const Toggle = ({
  label,
  name,
  required,
  onChange,
  checked,
  isGroup,
  description,
  ...switchProps
}) => {
  const [value, setValue] = useState(checked);

  return (
    <div className={clsx("flex items-center gap-8")}>
      {label && (
        <label htmlFor={name} className="font-semibold">
          {parseLabel(label)}{" "}
          {required && <span className="text-red-500">*</span>}
          {description && <ToolTip label={label} description={description} />}
        </label>
      )}

      <RSwitch
        {...switchProps}
        name={name}
        id={name}
        checked={value}
        onChange={(e) => {
          setValue(e);
          onChange(e);
        }}
        checkedIcon={false}
        uncheckedIcon={false}
        width={40}
        height={20}
        handleDiameter={16}
        onColor="#4800ff"
        offColor="#e2ecfb"
      />
    </div>
  );
};

export default Toggle;
