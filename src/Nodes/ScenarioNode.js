import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

function ScenarioNode({ data }) {
  const styles = {
    connector: {
        height: "14px",
        width: "14px",
    }
};
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
      <div className="flex">
        <div className="">
          <div className="text-lg text-lg font-bold">{data.name}</div>
          <div className="text-lg text-gray-500">{data.job}</div>
        </div>
      </div>

      {/* <Handle type="target" position={Position.Top} className="w-16 !bg-teal-500" /> */}
      <Handle type="source" position={Position.Bottom} className="w-16 !bg-teal-500" style={styles.connector} />
    </div>
  );
}

export default memo(ScenarioNode);
