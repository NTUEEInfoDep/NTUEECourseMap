import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

type dataType = {
  data: {
    label: string;
  }
}

function CustomNode({ data }: dataType) {
  return (
    <div style={{border:'2px solid black', padding: 5, width: 150}}>
      {data.label}
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

export default memo(CustomNode)