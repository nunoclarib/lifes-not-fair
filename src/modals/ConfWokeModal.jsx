import React, { memo } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Backdrop } from "./backdrop/Backdrop";
import { Handle } from "reactflow";

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

const ConfWokeModal = ({
  setModalConfirm,
  setTimeLeft,
  setCounter,
  setWrongNodes,
  edges,
  setEdges,
  counter,
  setButtonUnselected,
  setNodePhases,
  setCounterNumber,
  nodePhases
}) => {
  const handleTryAgain = () => {
    setModalConfirm(false);
    setTimeLeft(2 * 60);
    setCounter(0);
    setWrongNodes([]);
    let start = 0;
    let end = 3;
    edges = edges.slice(start, end + 1);
    setEdges(edges);
    setButtonUnselected(true);
  };
  const handleNextRound = () => {

    if(nodePhases == 4){
      setModalConfirm(false);
      setTimeLeft(2 * 60);
      //setCounter(0);
      setWrongNodes([]);
      //let start = 0;
      //let end = 3;
      //edges = edges.slice(start, end + 1);
      //setEdges(edges);
      setButtonUnselected(true);
      setNodePhases(5);
      setCounterNumber(7);
    }
    else{
      setModalConfirm(false);
      setTimeLeft(2 * 60);
      //setCounter(0);
      setWrongNodes([]);
      //let start = 0;
      //let end = 3;
      //edges = edges.slice(start, end + 1);
      //setEdges(edges);
      setButtonUnselected(true);
      setNodePhases(2);
      setCounterNumber(6);
    }
  };

  return (
    <Backdrop>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
      >
        {(counter <= 1 && counter > 0) &&
          (<div className="leading-8 text-center">
          <p className="font-bold text-xl mb-3">Wake Up Hun!</p>
            <img src={'img/sleeping-wake-up.gif'}/>
            <p className="mt-3">
              You only got
              <span className="text-teal-400 font-bold"> {counter} </span>
              connection right... 😭 <br/>Get to know the 4 individuals better and make wise choices, taking into account their beautiful differences 💙
            </p>
            <button onClick={handleTryAgain} className="mt-3 bg-teal-400 pl-3 pr-3 pt-1 pb-1 rounded-lg text-white">You better try again!</button>
          </div>)}
          {
          (counter < 4 && counter > 1) && (
            <div className="leading-8">
            <p className="font-bold text-xl mb-3">It's just the "almost" that's missing...</p>
            <img src={'img/cat-driving-serious.gif'}/>
              <p className="mt-3">
                You have <span className="text-teal-400 font-bold">{counter} </span>
                connections right
                <br/>You almost got it! 😪 Try to see where an outcome wasn't the most suitable for that person! ✨
              </p>
              <button onClick={handleTryAgain} className="mt-3 bg-teal-400 pl-3 pr-3 pt-1 pb-1 rounded-lg text-white">Try it once again, it won't hurt!</button>
            </div>
          )}
          {
          (counter == 4) && (
            <div>
              <p className="font-bold text-xl mb-3">Congradulations!</p>
              <img src={'img/celebrate-happy.gif'}/>
              <p className="mt-3">
                Congrats, you are pretty <span className="text-teal-400 font-bold">WOKE</span>
                <br/>You got <span className="text-teal-400 font-bold">{counter} </span>
                connections right 👏
              </p>
              <button onClick={handleNextRound} className="mt-3 bg-teal-400 pl-3 pr-3 pt-1 pb-1 rounded-lg text-white">Next Round?</button>
              <button onClick={handleTryAgain} className="mt-3 bg-teal-400 pl-3 pr-3 pt-1 pb-1 rounded-lg text-white">See the Results</button>
            </div>
          )
          }
          {
          (counter == 6) && (
            <div>
              <p className="font-bold text-xl mb-3">Congradulations!</p>
              <img src={'img/celebrate-happy.gif'}/>
              <p className="mt-3">
                Congrats, you are pretty <span className="text-teal-400 font-bold">WOKE</span>
                <br/>You got <span className="text-teal-400 font-bold">{counter} </span>
                connections right until now 👏 wow you WOKE QUEEN              
              </p>
              <button onClick={handleNextRound} className="mt-3 bg-teal-400 pl-3 pr-3 pt-1 pb-1 rounded-lg text-white">Next Round?</button>
            </div>
          )
          }
      </motion.div>
    </Backdrop>
  );
};

export default memo(ConfWokeModal);
