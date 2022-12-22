import React, { useState, memo } from 'react';
import { Handle, Position } from 'reactflow';

function PersonsNode({ data, selected }) {
  const styles = {
    connector: {
        height: "10px",
        width: "10px",
    }
};
const [isSelected, setIsSelected] = useState(selected);

const handleClick = () => {
  setIsSelected(!isSelected)
}

  return (
    isSelected ? (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-4 border-teal-400"
    onClick={handleClick}
    >
    <div className="flex">
      <div className="rounded-full w-12 h-12 flex justify-center items-center bg-gray-100">
        {data.emoji}
      </div>
      <div className="ml-2">
        <div className=" ">{data.name}</div>
        <div className="text-gray-500">{data.job}</div>
      </div>
    </div>

    <Handle type="target" position={Position.Top} className="w-16 !bg-teal-500" style={styles.connector}/>
    <Handle type="source" position={Position.Bottom} className="w- !bg-teal-500" style={styles.connector}/>
  </div>) 
  : 
  (<div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400"
  onClick={handleClick}
  >
  <div className="flex">
    <div className="rounded-full w-12 h-12 flex justify-center items-center bg-gray-100">
      {data.emoji}
    </div>
    <div className="ml-2">
      <div className=" ">{data.name}</div>
      <div className="text-gray-500">{data.job}</div>
    </div>
  </div>

  <Handle type="target" position={Position.Top} className="w-16 !bg-teal-500" style={styles.connector}/>
  <Handle type="source" position={Position.Bottom} className="w- !bg-teal-500" style={styles.connector}/>
</div>)
  );
}

export default memo(PersonsNode);
