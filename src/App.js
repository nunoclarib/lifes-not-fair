import './App.css';

import { useState, useCallback } from 'react';

import ReactFlow, { Controls, Background, applyEdgeChanges, applyNodeChanges, addEdge} from 'reactflow';
import 'reactflow/dist/style.css';

import PersonNode from './Nodes/PersonsNode';
import ScenarioNode from './Nodes/ScenarioNode';
import OutComeNode from './Nodes/OutComeNode';
import CounterNode from './Nodes/CounterNode';

const nodeTypes = {
  personNode: PersonNode,
  scenarioNode: ScenarioNode,
  outcomeNode: OutComeNode,
  counterNode: CounterNode,
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
    position: { x: 300, y: 146 },
    type: 'scenarioNode',
  },
  {
    id: '6',
    data: { name: 'Outcome A', job: 'They probably have an easier time applying for the internship due to the access to resources and networks, as well as his ambition and drive to succeed and also have an advantage due to his lack of additional challenges related to their race, gender, or identity.'},
    position: { x:10, y:646 },
    type: 'outcomeNode',
  },
  {
    id: '7',
    data: { name: 'Outcome B', job: 'May deal with additional challenges due to discrimination and biases related to their race. However, his passion for social justice and his dedication to promoting equality and opportunity for people of color may also give him an advantage.'},
    position: { x: 489, y: 646  },
    type: 'outcomeNode',
  },
  {
    id: '8',
    data: { name: 'Outcome C', job: 'May face additional challenges due to discrimination and biases related to her gender identity. However, her strength and resilience, as well as her dedication to promoting acceptance and understanding for the LGBTQ+ community, may give them the upper hand.'},
    position: { x: 900, y: 646 },
    type: 'outcomeNode',
  },
  {
    id: '9',
    data: { name: 'Outcome D', job: 'They can face additional challenges due to language and cultural barriers, as well as biases related to their race and gender. However, the dedication to education and her hard work in her field may be an advantage over some of the other candidates.'},
    position: { x: 1400, y: 646  },
    type: 'outcomeNode',
  },
  {
    id: '10',
    data: { name: 'Wokeness Counter', job: '0/16'},
    position: { y: 10, x:10 },
    type: 'counterNode',
    draggable: false
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
