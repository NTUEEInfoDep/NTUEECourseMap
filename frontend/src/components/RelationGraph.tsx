import React, { useState } from 'react';
import ReactFlow, { useNodesState, useEdgesState } from 'reactflow';
import CustomNode from './CustomNode';
import 'reactflow/dist/style.css';
 
// const defaultNodes = [
//   { id: 'main', type: 'custom', position: { x: 320, y: 120 }, data: { label: 'the course' }},
//   { id: 'pre-0', type: 'custom', position: { x: 20, y: 20 }, data: { label: 'calculus' }},
//   { id: 'pre-1', type: 'custom', position: { x: 20, y: 120 }, data: { label: 'physics' }},
//   { id: 'pre-2', type: 'custom', position: { x: 20, y: 220 }, data: { label: 'coding' }},
//   { id: 'nxt-0', type: 'custom', position: { x: 620, y: 20 }, data: { label: 'Web Programming' }},
//   { id: 'nxt-1', type: 'custom', position: { x: 620, y: 220 }, data: { label: 'CNS' }},
// ];

// const defaultEdges = [
//   { id: 'p0', source: 'pre-0', target: 'main' },
//   { id: 'p1', source: 'pre-1', target: 'main' },
//   { id: 'p2', source: 'pre-2', target: 'main' },
//   { id: 'n0', source: 'main', target: 'nxt-0' },
//   { id: 'n1', source: 'main', target: 'nxt-1' },
// ];

const nodeTypes = {
  custom: CustomNode,
};

type Node = {
  id: string;
  type: string;
  position: {
    x: number;
    y: number;
  }
  data: {
    label: string;
  }
};

type Edge = {
  id: string;
  source: string;
  target: string;
};

type RelationGraphInput = {
  initNodes: Node[];
  initEdges: Edge[];
};
 
export default function RelationGraph( {initNodes, initEdges}: RelationGraphInput) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);
  return (
    <div style={{ width: '80vw', height: '80vh', backgroundColor: 'lightyellow' }}>
      <ReactFlow 
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
      />
    </div>
  );
}