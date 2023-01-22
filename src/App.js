import './App.css';

import { useState, useCallback } from 'react';

import ReactFlow, { Controls, Background, applyEdgeChanges, applyNodeChanges, addEdge} from 'reactflow';
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

const nodeTypes = {
  personNode: PersonNode,
  scenarioNode: ScenarioNode,
  outcomeNode: OutComeNode,
  counterNode: CounterNode,
};

// const initialEdges = [{ id: 'edge1', source: '5', target: '1', label: 'to the', type: 'step' }];
// const initialEdges = []

const proOptions = { hideAttribution: true };

function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [edgesConnect, setEdgesConnect] = useState('');
  //const [modalPersonNode, setModalPersonNode] = useState(false);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
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
      <div style={{ height: '100vh' }}>
        <InitPage/>
        <ConfirmButtton/>
        <CounterButton/>
        <AudioPlayer src={audio}/>
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
      </div>
    </div>
  );
}

export default App;
