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
  nodePhases,
  wrongNodes,
  counterNumber
}) => {
  setTimeLeft(2 * 10000);

  console.log(wrongNodes.length);
  console.log(edges[edges.length - 1].source);
  console.log(edges);
  console.log(nodePhases);

  const handleTryAgain = () => {
    if (nodePhases == 5) {
      setModalConfirm(false);
      setTimeLeft(2 * 30);
      setCounter(4);
      setWrongNodes([]);
      let start = 0;
      let end = 7;
      edges = edges.slice(start, end + 1);
      setEdges(edges);
      setButtonUnselected(true);
      setNodePhases(4);
      setCounterNumber(6);
    } 
    else if (nodePhases == 8){
      setModalConfirm(false);
      setTimeLeft(2 * 30);
      setWrongNodes([]);
      if(edges[edges.length - 1].target == 16 || edges[edges.length - 2].target == 16){
        setCounter(counter-1);
      }
      let start = 0;
      let end = 8;
      edges = edges.slice(start, end + 1);
      setEdges(edges);
      setButtonUnselected(true);
      //setNodePhases(4);
      setCounterNumber(6);
    }
    else {
      setModalConfirm(false);
      setTimeLeft(2 * 60);
      setCounter(0);
      setWrongNodes([]);
      let start = 0;
      let end = 3;
      edges = edges.slice(start, end + 1);
      setEdges(edges);
      setButtonUnselected(true);
    }
  };
  const handleNextRound = () => {
    if (nodePhases == 4) {
      setModalConfirm(false);
      setTimeLeft(2 * 30);
      //setCounter(0);
      setWrongNodes([]);
      //let start = 0;
      //let end = 3;
      //edges = edges.slice(start, end + 1);
      //setEdges(edges);
      setButtonUnselected(true);
      setNodePhases(5);
      setCounterNumber(7);
    }else if (nodePhases == 5){
      setModalConfirm(false);
      setTimeLeft(2 * 30);
      //setCounter(0);
      setWrongNodes([]);
      //let start = 0;
      //let end = 3;
      //edges = edges.slice(start, end + 1);
      //setEdges(edges);
      setButtonUnselected(true);
      setNodePhases(6);
      setCounterNumber(7);
    } 
    else if (nodePhases == 8){
      setModalConfirm(false);
      setTimeLeft(5 * 60);
      setCounter(0);
      setWrongNodes([]);
      let start = 0;
      let end = 3;
      edges = edges.slice(start, end + 1);
      setEdges(edges);
      setButtonUnselected(true);
      setNodePhases(9);
      setCounterNumber(4);
    }
    else {
      setModalConfirm(false);
      setTimeLeft(2 * 30);
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
        {counter <= 1 && counter > 0 && (
          <div className="leading-8 text-center">
            <p className="font-bold text-xl mb-3">Wake Up Hun!</p>
            <img src={"img/sleeping-wake-up.gif"} />
            <p className="mt-3">
              You only got
              <span className="text-teal-400 font-bold"> {counter} </span>
              connection right... 😭 <br />
              Get to know the 4 individuals better and make wise choices, taking
              into account their beautiful differences 💙
            </p>
            <button
              onClick={handleTryAgain}
              className="mt-3 bg-teal-400 pl-3 pr-3 pt-1 pb-1 rounded-lg text-white"
            >
              You better try again!
            </button>
          </div>
        )}
        {counter < 4 && counter > 1 && (
          <div className="leading-8">
            <p className="font-bold text-xl mb-3">
              It's just the "almost" that's missing...
            </p>
            <img src={"img/cat-driving-serious.gif"} />
            <p className="mt-3">
              You have{" "}
              <span className="text-teal-400 font-bold">{counter} </span>
              connections right
              <br />
              You almost got it! 😪 Try to see where an outcome wasn't the most
              suitable for that person! ✨
            </p>
            <button
              onClick={handleTryAgain}
              className="mt-3 bg-teal-400 pl-3 pr-3 pt-1 pb-1 rounded-lg text-white"
            >
              Try it once again, it won't hurt!
            </button>
          </div>
        )}
        {counter == 4 && nodePhases == 1 && (
          <div>
            <p className="font-bold text-xl mb-3">Congradulations!</p>
            <img src={"img/celebrate-happy.gif"} />
            <p className="mt-3">
              Congrats, you are pretty{" "}
              <span className="text-teal-400 font-bold">WOKE</span>
              <br />
              You got{" "}
              <span className="text-teal-400 font-bold">{counter} </span>
              connections right 👏
            </p>
            <button
              //work on this
              onClick={handleNextRound}
              className="mt-5 border-teal-400 border-2 text-black pl-3 pr-3 pt-1 pb-1 rounded-lg text-white mr-2"
            >
              See the Results
            </button>
            <button
              onClick={handleNextRound}
              className="mt-5 bg-teal-400 pl-3 pr-3 pt-1 pb-1 rounded-lg text-white border-teal-400 border-2 ml-2"
            >
              Next Round?
            </button>
          </div>
        )}
        {counter == 4 && nodePhases == 4 && (
          <div>
            <p className="font-bold text-xl mb-3">You got it all wrong!</p>
            <img src={"img/celebrate-happy.gif"} />
            <p className="mt-3">
              Congrats, you are pretty{" "}
              <span className="text-teal-400 font-bold">WOKE</span>
              <br />
              You didn't get a single connection right. You got{" "}
              <span className="text-teal-400 font-bold">{counter} </span>
              connections right from the previous round... 🫢
            </p>
            <button
              onClick={handleTryAgain}
              className="mt-3 bg-teal-400 pl-3 pr-3 pt-1 pb-1 rounded-lg text-white"
            >
              This one is easy, try again!
            </button>
          </div>
        )}
        {counter == 4 && nodePhases == 5 && (
          <div>
            <p className="font-bold text-xl mb-3">
              You really need to WAKE UP!... 😴
            </p>
            <img src={"img/sleeping-wake-up.gif"} />
            <p className="mt-3">
              We don't see the{" "}
              <span className="text-teal-400 font-bold">WOKENESS</span> for you
              in this round...
              <br />
              You didn't get a single connection right. You got only{" "}
              <span className="text-teal-400 font-bold">{counter} </span>
              connections in the bag, and don't be fooled... they are from the
              previous round. 🫢
            </p>
            <button
              onClick={handleTryAgain}
              className="mt-3 bg-teal-400 pl-3 pr-3 pt-1 pb-1 rounded-lg text-white"
            >
              This one is easy, try it again!
            </button>
          </div>
        )}
        {counter == 5 &&
          nodePhases == 5 &&
          wrongNodes.length == 1 &&
          (edges[edges.length - 1].source == 14 || 
          edges[edges.length - 1].target != 11) && (
            <div>
            <p className="font-bold text-xl mb-3">
              There's someone you missed out! 👀
            </p>
            <p className="mt-3">
              I would advice you to look closely to the characters and try again. You got only 
              <span className="text-teal-400 font-bold"> {counter} </span>
              connections right until now. 
            </p>
            <button
              //work on this
              onClick={handleTryAgain}
              className="mt-5 border-teal-400 border-2 text-black pl-3 pr-3 pt-1 pb-1 rounded-lg text-white mr-2"
            >
              Wanna get back?
            </button>
            <button
              onClick={handleNextRound}
              className="mt-5 bg-teal-400 pl-3 pr-3 pt-1 pb-1 rounded-lg text-white border-teal-400 border-2 ml-2"
            >
              Continue to Next Round?
            </button>
          </div>
          )}
        {counter == 6 && nodePhases == 5 && (
          <div>
            <p className="font-bold text-xl mb-3">Congradulations!</p>
            <img src={"img/party-time.gif"} />
            <p className="mt-3">
              Congrats, you are pretty{" "}
              <span className="text-teal-400 font-bold">WOKE</span>
              <br />
              You got{" "}
              <span className="text-teal-400 font-bold">{counter} </span>
              connections right until now 👏 wow you WOKE QUEEN
            </p>
            <button
              //work on this
              onClick={handleTryAgain}
              className="mt-5 border-teal-400 border-2 text-black pl-3 pr-3 pt-1 pb-1 rounded-lg text-white mr-2"
            >
              Wanna get back?
            </button>
            <button
              onClick={handleNextRound}
              className="mt-5 bg-teal-400 pl-3 pr-3 pt-1 pb-1 rounded-lg text-white border-teal-400 border-2 ml-2"
            >
              Ready for Next Round?
            </button>
          </div>
        )}
        {counter == 5 &&
          nodePhases == 5 &&
          wrongNodes.length == 0 &&
          edges[edges.length - 1].source == 14 &&
          edges[edges.length - 1].target == 11 && (
            <div>
              <p className="font-bold text-xl mb-3">
                Let's analyze your choices now 😌
              </p>
              <p className="mt-3 text-justify">
                You chose <span className="text-teal-400 font-bold">Mei</span>{" "}
                as the target choice, but you forgot the fact that{" "}
                <span className="text-teal-400 font-bold">Lily</span> is also a
                woman.
                <br /> If perceived by the recruiter as one, she will also not
                be in advantage.
                <br />
                Adding up to that, she's a trans woman. This condition puts her
                with even less chances because if the recruiter doesn't apply
                equal measures to recruit all genders then{" "}
                <span className="text-teal-400 font-bold">Lily</span> can suffer
                this injustice just for the fact she doesn't meet the "norm" of
                selection.
                <br />
                <u>Just some food for thought</u> 🧠 Now let's go on with this
                game!
                {/* <span className="text-teal-400 font-bold">{counter} </span>
              connections right until now 👏 wow you WOKE QUEEN */}
              </p>
              <button
                //work on this
                onClick={handleTryAgain}
                className="mt-5 border-teal-400 border-2 text-black pl-3 pr-3 pt-1 pb-1 rounded-lg text-white mr-2"
              >
                I wanna get back and try again
              </button>
              <button
                onClick={handleNextRound}
                className="mt-5 bg-teal-400 pl-3 pr-3 pt-1 pb-1 rounded-lg text-white border-teal-400 border-2 ml-2"
              >
                Let's do it!
              </button>
            </div>
          )}
        {counter == 5 &&
          nodePhases == 5 &&
          wrongNodes.length == 0 &&
          edges[edges.length - 1].source == 14 &&
          edges[edges.length - 1].target == 10 && (
            <div>
              <p className="font-bold text-xl mb-3">
                There's someone you missed out! 👀
              </p>
              <p className="mt-3">
                I would advice you to look closely to the characters and try again. You got only 
                <span className="text-teal-400 font-bold"> {counter} </span>
                connections right until now. 
              </p>
              <button
                //work on this
                onClick={handleTryAgain}
                className="mt-5 border-teal-400 border-2 text-black pl-3 pr-3 pt-1 pb-1 rounded-lg text-white mr-2"
              >
                Wanna get back?
              </button>
              <button
                onClick={handleNextRound}
                className="mt-5 bg-teal-400 pl-3 pr-3 pt-1 pb-1 rounded-lg text-white border-teal-400 border-2 ml-2"
              >
                Continue to Next Round?
              </button>
            </div>
          )}
        { nodePhases == 8 &&
          edges[edges.length - 1].source == 15 &&
          edges[edges.length - 1].target == 16 && (
            <div>
              <p className="font-bold text-xl mb-3">
                You got it all, in this one 🥳
              </p>
              <p className="mt-3">
                Score: 
                <span className="text-teal-400 font-bold"> {counter} </span>
                / <span className="font-bold">{counterNumber}</span>  
              </p>
              <p className="mt-3">
                PRETTY WOKE you, why did you even play this game? ✨  
              </p>
              <p className="mt-3">
                This is where we part ways and we hope you learned something with this little game. 😊
              </p>
              <button
                //work on this
                onClick={handleNextRound}
                className="mt-5 border-teal-400 border-2 text-black pl-3 pr-3 pt-1 pb-1 rounded-lg text-white mr-2"
              >
                Play It Again! 🎮
              </button>
              <button
                onClick={handleTryAgain}
                className="mt-5 bg-teal-400 pl-3 pr-3 pt-1 pb-1 rounded-lg text-white border-teal-400 border-2 ml-2"
              >
                Analyze again this round
              </button>
            </div>
          )}
        { nodePhases == 8 &&
          edges[edges.length - 1].target != 16 && (
            <div>
              <p className="font-bold text-xl mb-3">
                Let's try to learn this! 😄
              </p>
              <p className="mt-3 text-justify">
                By default, this choice is not the most appropriate. <span className="text-teal-400 font-bold"> Lily </span>, as well as her comunity of trans individuals, specially women, won't like that the trans character portrayed in the scenes is not making justice to their lifes, not even to their own bodies. Trans women are not men in wigs, so shouldn't be a character that represents trans lifes.
                <br/>
                Furthermore, the opportunity to work is taken away from a mostly marginalized and minority class in society and given to one who already has it from the start. In this case we would be making an incorrect choice even if we justifed the fact that <span className="text-teal-400 font-bold"> Matthew </span> had more experience than <span className="text-teal-400 font-bold"> Lily </span>. 
              </p>
              
              <button
                //work on this
                onClick={handleNextRound}
                className="mt-5 border-teal-400 border-2 text-black pl-3 pr-3 pt-1 pb-1 rounded-lg text-white mr-2"
              >
                Play It Again! 🎮
              </button>
              <button
                onClick={handleTryAgain}
                className="mt-5 bg-teal-400 pl-3 pr-3 pt-1 pb-1 rounded-lg text-white border-teal-400 border-2 ml-2"
              >
                Analyze once more this round
              </button>
              <p className="mt-4">
                Score: 
                <span className="text-teal-400 font-bold"> {counter} </span>
                / <span className="font-bold">{counterNumber}</span>  
              </p>
              <p className="mt-3">Even if you aren't the wokest, you did learn more today!  </p>
            </div>
          )}
      </motion.div>
    </Backdrop>
  );
};

export default memo(ConfWokeModal);
