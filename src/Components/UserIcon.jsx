import React from "react";

function UserIcon({ username }) {
  let firstname = username?.name.split(" ")[0];
  let lastname = username?.name.split(" ")[1];
  lastname = lastname?.toUpperCase();
  const watermark = `${
    firstname?.charAt(0) + (lastname !== undefined ? lastname?.charAt(0) : "")
  }`;
  const colors = ["#900C3F", "#C70039", "#F1C40F", "#C70039"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const activeStatus = username?.available;
  console.log(activeStatus);
  return (
    <div
      className="w-6 h-6 rounded-full text-sm text-light-secondary inline-flex items-center justify-center relative"
      style={{ background: randomColor }}
    >
      <div>{watermark}</div>
      <div
        className="absolute bottom-0 h-2 w-2 right-0 rounded-full border "
        style={{ background: `${activeStatus === true ? "#ECC238" : "gray"}` }}
      ></div>
    </div>
  );
}

export default UserIcon;
