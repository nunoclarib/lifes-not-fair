import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

function CounterButton({ data }) {

const styles = {
    connector: {
        height: "10px",
        width: "10px",
    },
    position: {
      position: "absolute",
      top: "2rem",
      zIndex: "100",
      left: "3rem"
    }
};

  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white text-white inset-x-0 bg-teal-400" style={styles.position}>
      <div className="flex">
        <div className="">
          <div className="text-lg text-lg font-bold">{data.name}</div>
          <div className="text-lg text-black font-bold">{data.job}</div>
        </div>
      </div>
    </div>
  );
}

export default memo(CounterButton);
