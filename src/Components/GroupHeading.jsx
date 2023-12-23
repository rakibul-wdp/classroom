import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React from "react";
import { priorityMap, statusMap } from "../utils/general";
import PriorityIcon from "./PriorityIcon";
import StatusIcon from "./StatusIcon";
import UserIcon from "./UserIcon";

function GroupHeading({ type, userDetails, count, val }) {
  return (
    <div className="mt-2 mb-2 flex flex-row justify-between h-[8vh] items-center px-[0.4rem]">
      <div>
        {type === "user" && (
          <div className="flex flex-row gap-2">
            <UserIcon username={userDetails} />
            <div>{userDetails.name}</div>
            <div>{count}</div>
          </div>
        )}
        {type === "status" && (
          <div className="flex flex-row gap-2">
            <StatusIcon status={statusMap[val]} />
            <div>{statusMap[val]}</div>
            <div>{count}</div>
          </div>
        )}
        {type === "priority" && (
          <div className="flex flex-row gap-2">
            <div>
              {" "}
              <PriorityIcon priority={val} />
            </div>
            <div>{priorityMap[val]}</div>
            <div>{count}</div>
          </div>
        )}
      </div>

      <div className="flex flex-row gap-1 ">
        <AddIcon className=" text-gray-500 text-[16px]" />
        <MoreHorizIcon className="text-[16px]  text-gray-500 " />
      </div>
    </div>
  );
}

export default GroupHeading;
