import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import React from "react";
import backlog from "../assets/backlog.svg";
import done from "../assets/done.svg";
import progress from "../assets/progress.svg";

function StatusIcon({ status }) {
  if (status == "Backlog") {
    return (
      <div className="mt-1">
        {" "}
        <img src={backlog} />
      </div>
    );
  } else if (status == "In progress") {
    return (
      <div className="mt-1">
        <img src={`${progress}`} />
      </div>
    );
  } else if (status == "Todo") {
    return (
      <RadioButtonUncheckedIcon
        fontSize="1rem"
        className="mt-1 dark:text-white text-gray-500"
      />
    );
  } else if (status == "Cancelled") {
    return (
      <CancelRoundedIcon
        fontSize="1rem"
        className="mt-1 dark:text-white text-gray-500"
      />
    );
  }
  return (
    <div className="mt-1">
      <img src={`${done}`} />
    </div>
  );
}

export default StatusIcon;
