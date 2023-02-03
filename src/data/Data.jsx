const initialNodes = [
  {
    id: '1',
    data: { name: 'Lily Bosco', job: 'Transgender woman', emoji: '👩🏼‍🦰', image:"lily.png", age:"25",
    info: "Lily, a 25-year-old transgender woman, is a multifaceted individual who has faced numerous challenges in her life due to her gender identity. Despite growing up in a small town where she faced discrimination, Lily is a strong and resilient individual who never gave up on her dreams. She works as a graphic designer, using her talents to bring beauty to the world and help others express themselves. Despite financial difficulties, Lily is also an incredibly talented street artist, using her art to spread messages of hope and acceptance for the LGBTQ+ community. Her passion for the arts extends to her love of theater, where she has put on several performances that have received great acclaim. Lily's unique combination of creativity, strength, and resilience make her a true inspiration to those around her."
    },
    position: { x:10, y:346  },
    type: 'personNode',
  },
  {
    id: '2',
    data: { name: 'Marcus Wright', job: 'Black man', emoji: '👨🏾‍🦲', image:"marcus.png" },
    position: { x: 489, y: 346 },
    type: 'personNode',
  },
  {
    id: '3',
    data: { name: 'Mei Sawayama', job: 'Asian woman', emoji: '👩🏻', image:"mei.png" },
    position: { x: 900, y: 346 },
    type: 'personNode',
  },
  {
    id: '4',
    data: { name: 'David Cole', job: 'White man', emoji: '👱🏻‍♂️', image:"david.png" },
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
const secondNodes = [
  {
    id: '10',
    data: { name: 'Lily Bosco', job: 'Transgender woman', emoji: '👩🏼‍🦰', image:"lily.png", age:"25",
    info: "Lily, a 25-year-old transgender woman, is a multifaceted individual who has faced numerous challenges in her life due to her gender identity. Despite growing up in a small town where she faced discrimination, Lily is a strong and resilient individual who never gave up on her dreams. She works as a graphic designer, using her talents to bring beauty to the world and help others express themselves. Despite financial difficulties, Lily is also an incredibly talented street artist, using her art to spread messages of hope and acceptance for the LGBTQ+ community. Her passion for the arts extends to her love of theater, where she has put on several performances that have received great acclaim. Lily's unique combination of creativity, strength, and resilience make her a true inspiration to those around her."
    },
    position: { x:10, y:1200 },
    type: 'personNode',
  },
  {
    id: '11',
    data: { name: 'Mei Sawayama', job: 'Asian woman', emoji: '👩🏻', image:"mei.png" },
    position: { x: 900, y: 1200 },
    type: 'personNode',
  },
  {
    id: '12',
    data: { name: 'Marcus Wright', job: 'Black man', emoji: '👨🏾‍🦲', image:"marcus.png" },
    position: { x: 489, y: 1200 },
    type: 'personNode',
  },
  {
    id: '14',
    data: { name: 'David Cole', job: 'White man', emoji: '👱🏻‍♂️', image:"david.png" },
    position: { x: 1400, y: 1200 },
    type: 'personNode',
  },
  {
    id: '15',
    data: { name: 'What if...', job: 'The job recruiter is misogonistic? Who would be less favored?'},
    position: { x: 600, y: 944 },
    type: 'scenarioNode',
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

export { initialNodes, initialEdges, correctEdges, secondNodes };
