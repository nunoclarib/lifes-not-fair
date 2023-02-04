import './App.css';

import { useState, useCallback, createContext, useMemo, useEffect } from 'react';

import ReactFlow, { Controls, Background, applyEdgeChanges, applyNodeChanges, addEdge, useReactFlow, ReactFlowProvider, useViewport} from 'reactflow';
import 'reactflow/dist/style.css';

import PersonNode from './nodes/PersonsNode';
import ScenarioNode from './nodes/ScenarioNode';
import OutComeNode from './nodes/OutComeNode';
import CounterNode from './nodes/CounterNode';
import ConfirmButtton from './buttons/ConfirmButtton';

import { initialNodes, initialEdges, correctEdges, secondNodes } from './data/Data';

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
  const [newNodes, setNewNodes] = useState(secondNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [buttonUnselected, setButtonUnselected] = useState(true);
  const [edgesConnect, setEdgesConnect] = useState('');
  const [counter, setCounter] = useState(0);
  const [counterNumber, setCounterNumber] = useState(4);
  const [startGame, setStartGame] = useState(null);
  const [timeLeft, setTimeLeft] = useState(2 * 30);
  const [modalTimesUp, setModalTimesUp] = useState(false);
  const [modalConfirm, setModalConfirm] = useState(false);
  const [wrongNodes, setWrongNodes] = useState([]);
  const [nodePhases, setNodePhases] = useState(1);

  useEffect(() => {
    if (edges?.length == 8){
      setButtonUnselected(false);
    }
    if(nodePhases == 4){
      setButtonUnselected(true);
    }
    if (nodePhases == 4 && edges?.length > 8){
      setButtonUnselected(false);
    }
    if(timeLeft<=0 & counter == 0){
      setModalTimesUp(true);
    }

    if(nodePhases == 2){
      setNodes([...nodes, ...newNodes])
      setNodePhases(null);
    }

  }, [edges, timeLeft, nodePhases]);


  console.log('nodePhase:',nodePhases);
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
  
    if(nodePhases == 4){
      setNodePhases(5);
      const timeoutId = setTimeout(() => {
        setModalConfirm(true);
      }, 2000);

      const edgesToIterate = edges.slice(8);
      edgesToIterate.forEach(edge => {
        if (edge.source == 14 && edge.target == 10 ||
            edge.source == 14 && edge.target == 11) {
          setCounter(prevCounter => prevCounter + 1);
        } else {
          setWrongNodes(prevWrongNodes => [...prevWrongNodes, edge]);
        }
      });
    }else {
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
  
      return () => clearTimeout(timeoutId);
    }
  };

  console.log('edges:',edges);
  console.log('nodes:',nodes);
  console.log('wrongNodes:',wrongNodes);

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

  function Flow() {
    let { x, y, zoom } = useViewport();
    const reactFlowInstance = useReactFlow();
    console.log(x);
    console.log(y);
    console.log(zoom);

    const fitViewNewNodes = {
      x: 180,
      y: -180,
      zoom: 0.65
    }

    if(nodePhases == null){
      reactFlowInstance.setViewport(fitViewNewNodes);
      setNodePhases(4);
    }


  }

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
          <ConfWokeModal setModalConfirm={setModalConfirm} setTimeLeft={setTimeLeft} setCounter={setCounter} setWrongNodes={setWrongNodes} edges ={edges} setEdges={setEdges} counter={counter} setButtonUnselected={setButtonUnselected}
          setNodePhases={setNodePhases} setCounterNumber={setCounterNumber} nodePhases={nodePhases}
          />
        )}
      </AnimatePresence>
      <div style={{ height: '100vh' }}>
        <InitPage startGame={startGame} setStartGame={setStartGame}/>
        {startGame === 'hidden' && <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft}/>}
        <ConfirmButtton buttonUnselected={buttonUnselected} handleConfirm={handleConfirm}/>
        <CounterButton counter={counter} nodePhases={nodePhases} counterNumber={counterNumber}/>
        <Sidebar style={{ height: '100vh' }} selected={selected}>
          <SidebarContent selectedData={selectedData}/>
        </Sidebar>
        <AudioPlayer src={audio}/>
        {/* <UserContext.Provider value={{selection: [selected, setSelected]}}> */}
        <ReactFlowProvider>
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
            <Flow/>
        </ReactFlow>
        </ReactFlowProvider>
        {/* </UserContext.Provider> */}
      </div>
    </div>
  );
}

export default App;
