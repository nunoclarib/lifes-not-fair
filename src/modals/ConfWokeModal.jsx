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

const ConfWokeModal = ({setModalConfirm, setTimeLeft, setCounter, setWrongNodes, edges, setEdges}) => {
    const handleTryAgain = () => {
        setModalConfirm(false);
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
          <p>
            You lost 😭 Still in the need to stay woke?
          </p>
          <button onClick={handleTryAgain}>you better try again!</button>
        </motion.div>
    </Backdrop>
  );
};

export default memo(ConfWokeModal);
