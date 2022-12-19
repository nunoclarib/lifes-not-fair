import './App.css';

import { useState, useCallback } from 'react';

import ReactFlow, { Controls, Background, applyEdgeChanges, applyNodeChanges, addEdge} from 'reactflow';
import 'reactflow/dist/style.css';

import PersonNode from './Nodes/PersonsNode';
import ScenarioNode from './Nodes/ScenarioNode';

const nodeTypes = {
  personNode: PersonNode,
  scenarioNode: ScenarioNode,
};

const initialNodes = [
  {
    id: '1',
    data: { name: 'Lily Bosco', job: 'Transgender woman', emoji: '👩🏼‍🦰' },
    position: { x:10, y:346  },
    type: 'personNode',
  },
  {
    id: '2',
    data: { name: 'Marcus Wright', job: 'Black man', emoji: '👨🏾‍🦲' },
    position: { x: 289, y: 346 },
    type: 'personNode',
  },
  {
    id: '3',
    data: { name: 'Mei Sawayama', job: 'Asian woman', emoji: '👩🏻' },
    position: { x: 569, y: 346 },
    type: 'personNode',
  },
  {
    id: '4',
    data: { name: 'David Cole', job: 'White man', emoji: '👱🏻‍♂️' },
    position: { x: 849, y: 346 },
    type: 'personNode',
  },
  {
    id: '5',
    data: { name: 'Scenario', job: 'Applying for a highly competitive internship at a prestigious company.'},
    position: { x: 500, y: 146 },
    type: 'scenarioNode',
  }
];

const initialEdges = [
  { id: 'edge1', source: '5', target: '1'},
  { id: 'edge2', source: '5', target: '2'},
  { id: 'edge3', source: '5', target: '3'}, 
  { id: 'edge4', source: '5', target: '4'} 
]
// const initialEdges = [{ id: 'edge1', source: '5', target: '1', label: 'to the', type: 'step' }];
//const initialEdges = []

function App() {

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
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
      <ReactFlow 
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        >
        <Background />
        <Controls />
      </ReactFlow>
      </div>
    </div>
  );
}

export default App;
