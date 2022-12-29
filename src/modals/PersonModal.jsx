import React, { memo } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Backdrop } from '../theatre/Backdrop';

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

const DeleteOppModal = ({ children, handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
        <motion.div
          onClick={e => e.stopPropagation()}
          className=''
          variants={dropIn}
        >
          {children}
        </motion.div>
    </Backdrop>
  );
};

export default memo(DeleteOppModal);
