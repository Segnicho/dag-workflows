import React from "react";
import { FaGitkraken } from "react-icons/fa";

const WorkFlowNode = ({
  id,
  label = "Universal Action",
  desc = "OpenAI Query",
  icon = <FaGitkraken className="w-7 h-7" />,
}) => {
  return (
    <div
      id={id}
      className="flex flex-col gap-2 w-[130px] h-[110px] items-center justify-center rounded-lg"
    >
      <div className="text-gray-400">{label}</div>
      <div>{icon}</div>
      <div>{desc}</div>
    </div>
  );
};

export default WorkFlowNode;
