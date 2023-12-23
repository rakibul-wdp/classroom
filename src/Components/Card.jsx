import CircleIcon from "@mui/icons-material/Circle";
import React, { useContext } from "react";
import DisplayContext from "../Context/DisplayContext";
import { getUsername } from "../utils/general";
import PriorityIcon from "./PriorityIcon";
import StatusIcon from "./StatusIcon";
import UserIcon from "./UserIcon";

function Card({ ticket, user }) {
  const username = getUsername(ticket, user);
  const { grouping } = useContext(DisplayContext);
  const val = ticket.priority;
  const status = ticket.status;

  return (
    <div
      className="w-full flex flex-col  pt-[0.8rem] pb-[0.8rem] pl-5 pr-5 bg-light-secondary dark:bg-dark-secondary 
    shadow shadow-lk dark:shadow-dk rounded-md gap-2
    border border-light-border-color  dark:border-dark-border-color"
    >
      <div className="flex flex-row justify-between text-text-2">
        <div>{ticket.id}</div>
        <div>{grouping !== "user" && <UserIcon username={username} />}</div>
      </div>
      <div className="flex flex-row gap-2">
        {grouping != "status" && (
          <div>
            <StatusIcon status={status} />
          </div>
        )}
        <div className="text-bold text-lg">{ticket.title}</div>
      </div>

      <div className="flex flex-row gap-2">
        {grouping != "priority" && (
          <div
            className="border p-none dark:border-dark-border-color border-light-color-border rounded-[3px] px-[2px] pb-[1px]
         shadow shadow-lk dark:shadow-dk "
          >
            <PriorityIcon priority={val} />
          </div>
        )}
        <div
          className="text-text-2 border border-light-border-color rounded dark:border-dark-border-color 
            shadow shadow-lk dark:shadow-dk"
        >
          <div className="flex flex-row gap-1 pl-2 pr-2">
            <div>
              <CircleIcon
                style={{
                  fontSize: "medium",
                  paddingBottom: "3px",
                }}
              />
            </div>
            <span> Feature Request</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
