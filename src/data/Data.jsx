const initialNodes = [
  {
    id: '1',
    data: { name: 'Lily Bosco', job: 'Transgender woman', emoji: '👩🏼‍🦰' },
    position: { x:10, y:346  },
    type: 'personNode',
    selected: true
  },
  {
    id: '2',
    data: { name: 'Marcus Wright', job: 'Black man', emoji: '👨🏾‍🦲' },
    position: { x: 489, y: 346 },
    type: 'personNode',
  },
  {
    id: '3',
    data: { name: 'Mei Sawayama', job: 'Asian woman', emoji: '👩🏻' },
    position: { x: 900, y: 346 },
    type: 'personNode',
  },
  {
    id: '4',
    data: { name: 'David Cole', job: 'White man', emoji: '👱🏻‍♂️' },
    position: { x: 1400, y: 346 },
    type: 'personNode',
  },
  {
    id: '5',
    data: { name: 'Scenario', job: 'Applying for a highly competitive internship at a prestigious company.'},
    position: { x: 600, y: 100 },
    type: 'scenarioNode',
  },
  {
    id: '6',
    data: { name: 'Outcome A', job: 'They probably have an easier time applying for the internship due to the access to resources and networks, as well as their ambition and drive to succeed and also have an advantage due to their lack of additional challenges related to their race, gender, or identity.'},
    position: { x:10, y:600 },
    type: 'outcomeNode',
  },
  {
    id: '7',
    data: { name: 'Outcome B', job: 'May deal with additional challenges due to discrimination and biases related to their race. However, their passion for social justice and their dedication to promoting equality and opportunity for people of color may also give them an advantage.'},
    position: { x: 489, y: 600  },
    type: 'outcomeNode',
  },
  {
    id: '8',
    data: { name: 'Outcome C', job: 'May face additional challenges due to discrimination and biases related to their gender identity. However, their strength and resilience, as well as their dedication to promoting acceptance and understanding for the LGBTQ+ community, may give them the upper hand.'},
    position: { x: 900, y: 600 },
    type: 'outcomeNode',
  },
  {
    id: '9',
    data: { name: 'Outcome D', job: 'They can face additional challenges due to language and cultural barriers, as well as biases related to their race and gender. However, the dedication to education and their hard work in their field may be an advantage over some of the other candidates.'},
    position: { x: 1400, y: 600  },
    type: 'outcomeNode',
  }
];

const initialEdges = [
  { id: 'edge1', source: '5', target: '1'},
  { id: 'edge2', source: '5', target: '2'},
  { id: 'edge3', source: '5', target: '3'}, 
  { id: 'edge4', source: '5', target: '4'} 
]

const correctEdges = [
  { id: 'corret-edge1', source: '3', target: '9'},
  { id: 'corret-edge2', source: '1', target: '8'},
  { id: 'corret-edge3', source: '2', target: '7'}, 
  { id: 'corret-edge4', source: '4', target: '6'} 
]

export { initialNodes, initialEdges, correctEdges };
