import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

function CounterNode({ data }) {

const styles = {
    connector: {
        height: "10px",
        width: "10px",
    }
};

  return (
    <div className="px-4 py-2 shadow-md rounded-md text-white inset-x-0 bg-teal-400">
      <div className="flex">
        <div className="">
          <div className="text-lg text-lg font-bold">{data.name}</div>
          <div className="text-lg text-black font-bold">{data.job}</div>
        </div>
      </div>
    </div>
  );
}

export default memo(CounterNode);
