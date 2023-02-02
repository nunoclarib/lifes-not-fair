import React, { memo } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Backdrop } from './backdrop/Backdrop';
import { Handle } from 'reactflow';

const dropIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
  exit: {
    opacity: 0,
  },
};

const TimesUpModal = ({setModalTimesUp, setTimeLeft, setCounter, setWrongNodes, edges, setEdges}) => {
    const handleTryAgain = () => {
        setModalTimesUp(false);
        setTimeLeft(2*60);
        setCounter(0);
        setWrongNodes([]);
        let start = 0;
        let end = 3;
        edges = edges.slice(start, end + 1);
        setEdges(edges);
    }

  return (
    <Backdrop>
        <motion.div
          onClick={e => e.stopPropagation()}
          className='modal'
          variants={dropIn}
        >
<div className="leading-8">
            <p className="font-bold text-xl mb-3">Losers don't win... 🫢</p>
            <img src={'img/loser-lost.gif'}/>
              <p className="mt-3">
                Nooo... you lost 😭
                <br/>Still in the need to stay WOKE!??
              </p>
              <button onClick={handleTryAgain} className="mt-3 bg-teal-400 pl-3 pr-3 pt-1 pb-1 rounded-lg text-white">Try it once again, it won't hurt!</button>
            </div>
        </motion.div>
    </Backdrop>
  );
};

export default memo(TimesUpModal);
