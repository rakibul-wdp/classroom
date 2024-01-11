import React, { useContext } from "react";
import { AppContext } from "../context/Provider";
import { uiComponents } from "./UiComponents";

const ElementRenderer = ({
  uiType,
  isGroup = false,
  isIgnore = false,
  ...rest
}) => {
  const { conditions, setConditions, finalValues, setFinalValues } =
    useContext(AppContext);

  if (uiComponents[uiType!])
    return uiComponents[uiType!].element(
      {
        uiType,
        isGroup,
        isIgnore,
        ...rest,
      },
      {
        conditions,
        setConditions,
        finalValues,
        setFinalValues,
        showElement: conditions["showFormAdvancedFields"],
      }
    );

  return <p className="text-red-500">Element not found</p>;
};

export default ElementRenderer;
