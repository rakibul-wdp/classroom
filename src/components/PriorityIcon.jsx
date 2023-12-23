import React from "react";
import highpriority from "../assets/highpriority.svg";
import lowpriority from "../assets/lowpriority.svg";
import mediumpriority from "../assets/mediumpriority.svg";
import nopriority from "../assets/nopriority.svg";
import urgentpriority from "../assets/urgentpriority.svg";

function PriorityIcon({ priority }) {
  let PIcon = <img src={`${nopriority}`} />;

  if (priority === 2) {
    PIcon = <img src={`${mediumpriority}`} />;
  } else if (priority === 1) PIcon = <img src={`${lowpriority}`} />;
  else if (priority === 3) {
    PIcon = <img src={`${highpriority}`} />;
  } else if (priority === 4) {
    PIcon = <img src={`${urgentpriority}`} />;
  }

  return <div className="mt-1">{PIcon}</div>;
}

export default PriorityIcon;
