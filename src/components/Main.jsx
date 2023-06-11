import React, { useState } from "react";
import { Graph } from "react-digraph";
import WorkFlowNode from "./WorkFlowNode";
import { workflowData } from "../assets/data";

const Main = () => {
  const [graphData, setGraphData] = useState({
    nodes: workflowData,
    edges: [],
  });

  const onNodePositionChange = (nodeId, x, y) => {
    // Update the position of the node in the graphData state
    setGraphData((prevData) => ({
      ...prevData,
      nodes: prevData.nodes.map((node) =>
        node.id === nodeId ? { ...node, x, y } : node
      ),
    }));
  };

  const onConnectEdge = (sourceNode, targetNode) => {
    // Create a new edge between the source and target nodes
    setGraphData((prevData) => ({
      ...prevData,
      edges: [
        ...prevData.edges,
        {
          source: sourceNode,
          target: targetNode,
        },
      ],
    }));
  };

  const onRemoveEdge = (edge) => {
    // Remove the edge from the graphData state
    setGraphData((prevData) => ({
      ...prevData,
      edges: prevData.edges.filter(
        (e) => e.source !== edge.source || e.target !== edge.target
      ),
    }));
  };

  const onSwapEdge = (sourceNode, targetNode, edge) => {
    // Update the source and target nodes of the edge
    setGraphData((prevData) => ({
      ...prevData,
      edges: prevData.edges.map((e) =>
        e === edge ? { ...e, source: sourceNode, target: targetNode } : e
      ),
    }));
  };

  const renderNode = ({ id, label, desc, icon, ...otherProps }) => (
    <WorkFlowNode
      key={id}
      id={id}
      label={label}
      desc={desc}
      icon={icon}
      onPositionChange={onNodePositionChange}
      {...otherProps}
    />
  );

  return (
    <div className="">
      <h1>My Graph</h1>
      <Graph
        id="workflow-graph"
        data={graphData}
        renderNode={renderNode}
        onConnectEdge={onConnectEdge}
        onRemoveEdge={onRemoveEdge}
        onSwapEdge={onSwapEdge}
        nodeKey="id"
        nodeTypes={{}}
        edgeTypes={{}}
      />
    </div>
  );
};

export default Main;