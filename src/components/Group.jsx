import React, { useContext, useEffect, useState } from "react";
import DisplayContext from "../context/DisplayContext";
import Card from "./Card";
import GroupHeading from "./GroupHeading";

const statusMap = {
  0: "Backlog",
  1: "Todo",
  2: "In progress",
  3: "Done",
  4: "Cancelled",
};
function Group({ data, userDetails, type, val }) {
  const [orderTickets, setOrderTickets] = useState([]);
  const [count, setCount] = useState(0);
  const { ordering } = useContext(DisplayContext);
  function groupTickets() {
    const tickets = [];
    let countCur = 0;
    if (type === "user" && data?.tickets) {
      data.tickets.map((item) => {
        if (item.userId === userDetails.id) {
          tickets.push(item);
          countCur++;
        }
      });
    }
    if (type === "priority" && data?.tickets) {
      data.tickets.map((item) => {
        if (item.priority === val) {
          tickets.push(item);
          countCur++;
        }
      });
    }
    if (type === "status" && data?.tickets) {
      data.tickets.map((item) => {
        if (item.status === statusMap[val]) {
          tickets.push(item);
          countCur++;
        }
      });
    }
    tickets.sort((a, b) => {
      if (ordering === "title") {
        return a.title.localeCompare(b.title);
      } else {
        return a.priority - b.priority;
      }
    });
    setOrderTickets(tickets);
    setCount(countCur);
  }
  useEffect(() => {
    groupTickets();
  }, [ordering, data]);
  return (
    <div>
      <div>
        <GroupHeading
          type={type}
          userDetails={userDetails}
          count={count}
          val={val}
        />
      </div>
      <div className="flex flex-col gap-2">
        {orderTickets &&
          orderTickets.map((item, index) => {
            return (
              <Card
                ticket={item}
                type={type}
                user={data?.users}
                status={index}
                key={index}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Group;
