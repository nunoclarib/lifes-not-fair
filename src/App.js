import './App.css';

import { useState, useCallback, createContext, useMemo, useEffect } from 'react';

import ReactFlow, { Controls, Background, applyEdgeChanges, applyNodeChanges, addEdge, useViewport} from 'reactflow';
import 'reactflow/dist/style.css';

import PersonNode from './nodes/PersonsNode';
import ScenarioNode from './nodes/ScenarioNode';
import OutComeNode from './nodes/OutComeNode';
import CounterNode from './nodes/CounterNode';
import ConfirmButtton from './buttons/ConfirmButtton';

import { initialNodes, initialEdges, correctEdges } from './data/Data';

import { AnimatePresence } from 'framer-motion';
import InitPage from './init-page/InitPage';
import CounterButton from './buttons/CounterButton';
import AudioPlayer from './audio/AudioPlayer';

import audio from './audio/LifesNot-Fair.wav';

import Sidebar from './modals/Sidebar';

//import {UserContext} from './context/context'
import {useSelector, useDispatch} from "react-redux"
import { select, unselect} from './redux/actions/index'
import SidebarContent from './modals/SidebarContent';
import Timer from './timer/Timer';
import TimesUpModal from './modals/TimesUpModal';
import ConfWokeModal from './modals/ConfWokeModal';

// const initialEdges = [{ id: 'edge1', source: '5', target: '1', label: 'to the', type: 'step' }];
// const initialEdges = []

const proOptions = { hideAttribution: true };

function App() {

  const nodeTypes = useMemo(() => ({
    personNode: (props) => <PersonNode {...props} />,
    scenarioNode: ScenarioNode,
    outcomeNode: OutComeNode,
    counterNode: CounterNode,
  }), []);

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [buttonUnselected, setButtonUnselected] = useState(true);
  const [edgesConnect, setEdgesConnect] = useState('');
  const [counter, setCounter] = useState(0);
  const [startGame, setStartGame] = useState(null);
  const [timeLeft, setTimeLeft] = useState(2 * 30);
  const [modalTimesUp, setModalTimesUp] = useState(false);
  const [modalConfirm, setModalConfirm] = useState(false);
  const [wrongNodes, setWrongNodes] = useState([]);

  useEffect(() => {
    if (edges?.length >= 8){
      setButtonUnselected(false);
    }
    if(timeLeft<=0 & counter == 0){
      setModalTimesUp(true);
    }

  }, [edges, timeLeft]);



  //const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  //const [selected, setSelected] = useState(false);

  // const [isSelected, setIsSelected] = useState(false);
  // console.log(isSelected);

  const selected = useSelector((state) => state.selected);
  const selectedData = useSelector((state) => state.data);
  console.log('SELECTED:',selected)

  const handleClick = () => {
    if(selected === true){
      dispatch(select(false))
    }else {
      dispatch(unselect(true))
    }
  };

  const handleConfirm = () => {
    //console.log('here');
    
    // timeout for modal to appear
    const timeoutId = setTimeout(() => {
      setModalConfirm(true);
    }, 2000);

    // starts in the 4th position of the array
    const edgesToIterate = edges.slice(4);
    edgesToIterate.forEach(edge => {
      if (edge.source == 1 && edge.target == 8 ||
          edge.source == 4 && edge.target == 6 ||
          edge.source == 2 && edge.target == 7 ||
          edge.source == 3 && edge.target == 9) {
        setCounter(prevCounter => prevCounter + 1);
      } else {
        setWrongNodes(prevWrongNodes => [...prevWrongNodes, edge]);
      }
    });
    if(0<counter <=2){
      console.log('modal triste stay more woke!')
    }
    else if(counter == 3){
      console.log('you almost got the fullest state of wokeness! you will get there')
    }
    else if(counter == 4){
      console.log('yas woke queen, you slayed that')
    }

    return () => clearTimeout(timeoutId);
  };

  console.log(edges);
  console.log(wrongNodes);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => {setEdges((eds) => applyEdgeChanges(changes, eds))},
    []
  );
  const onEdgesConnectChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);
  
  // const nodes = [
  //   {
  //     id: '1',
  //     position: { x: 0, y: 0 },
  //     data: { label: 'Hello' },
  //     type: 'input',
  //   },
  //   {
  //     id: '2',
  //     position: { x: 100, y: 100 },
  //     data: { label: 'World' },
  //   },
  // ]

  // const edges = [{ id: '1-5', source: '1', target: '5' }];

  // const edges2 = [{ id: '1-2', source: '1', target: '2', label: 'to the', type: 'step' }];

  return (
    <div className="App">
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalTimesUp && (
          <TimesUpModal setModalTimesUp={setModalTimesUp} setTimeLeft={setTimeLeft} setCounter={setCounter} setWrongNodes={setWrongNodes} edges ={edges} setEdges={setEdges}/>
        )}
        {modalConfirm && (
          <ConfWokeModal setModalConfirm={setModalConfirm} setTimeLeft={setTimeLeft} setCounter={setCounter} setWrongNodes={setWrongNodes} edges ={edges} setEdges={setEdges} counter={counter}/>
        )}
      </AnimatePresence>
      <div style={{ height: '100vh' }}>
        <InitPage startGame={startGame} setStartGame={setStartGame}/>
        {startGame === 'hidden' && <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft}/>}
        <ConfirmButtton buttonUnselected={buttonUnselected} handleConfirm={handleConfirm}/>
        <CounterButton counter={counter}/>
        <Sidebar style={{ height: '100vh' }} selected={selected}>
          <SidebarContent selectedData={selectedData}/>
        </Sidebar>
        <AudioPlayer src={audio}/>
        {/* <UserContext.Provider value={{selection: [selected, setSelected]}}> */}
        <ReactFlow
          nodes={nodes}
          onNodesChange={onNodesChange}
          edges={edges}
          // edgesConnect={edgesConnect}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          proOptions={proOptions}
          fitView
          >
          <Background />
          <Controls />
        </ReactFlow>
        {/* </UserContext.Provider> */}
      </div>
    </div>
  );
}

export default App;
