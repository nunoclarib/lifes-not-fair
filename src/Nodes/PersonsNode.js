// import { AnimatePresence } from 'framer-motion';
import React, { useState, memo, useContext, useEffect } from 'react';
import { Handle, isEdge, Position } from 'reactflow';
// import {UserContext} from '../context/context'
import { useDispatch, useSelector } from "react-redux";
import { select, unselect} from '../redux/actions/index'

function PersonsNode({ data }) {
  const styles = {
    connector: {
        height: "10px",
        width: "10px",
    }
};

// const selected = useContext(UserContext);

// let selection = useContext(UserContext);
// const [selected, setSelected] = selection.selection
// console.log(selected);

const dispatch = useDispatch();
const selected = useSelector((state) => state.selected);
const selectedData = useSelector((state) => state.data);
console.log(selectedData?.name);
const [isSelected, setIsSelected] = useState(false);

const handleClick = () => {
    if(isSelected === false){
      dispatch(select(data))
      setIsSelected(!isSelected)
    }else {
      dispatch(unselect(data))
      setIsSelected(!isSelected)
    }
}
  return (
    <>
      {/* <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400"
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
    </div> */}
    {
      (selectedData?.name === data.name) && selected ? (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-4 border-teal-400"
    onClick={handleClick}
    >
    <div className="flex">
      <div className="rounded-full w-12 h-12 flex justify-center items-center bg-gray-100">
        {data.emoji}
      </div>
      <div className="ml-2">
        <div className=" ">{data.name}</div>
        {/* <div className="text-gray-500">{data.job}</div> */}
      </div>
    </div>

    <Handle type="target" position={Position.Top} className="w-16 !bg-teal-500" style={styles.connector}/>
    <Handle type="source" position={Position.Bottom} className="w- !bg-teal-500" style={styles.connector}/>
  </div>) 
  : 
  (
  <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400"
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
</div>
)}
</>
  );
}

export default memo(PersonsNode);
