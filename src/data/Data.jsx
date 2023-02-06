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
    data: { name: 'Marcus Wright', job: 'Black man', emoji: '👨🏾‍🦲', image:"marcus.png" , age:"30",
    info: "Marcus, the 30-year-old black marketing manager at a large company, has faced many challenges in his life due to racial discrimination. Despite these obstacles, he has persevered and achieved success in his career. As a passionate advocate for social justice, he works tirelessly to promote equality and opportunity for people of color. In addition to his professional pursuits, Marcus has a deep love for dance, which he practices as a hobby. He is an enthusiastic and dedicated dancer, channeling his energy and creativity into this passion. Through his work and his hobby, Marcus is making a difference in the world and inspiring others to do the same."
    
  },
    position: { x: 489, y: 346 },
    type: 'personNode',
  },
  {
    id: '3',
    data: { name: 'Mei Sawayama', job: 'Asian woman', emoji: '👩🏻', image:"mei.png" , age:"28",
    info: 'Mei, the 28-year-old Asian scientist, is a hardworking and determined individual. Growing up in a rural village in China and later immigrating to the United States for college, she values education and has a passion for making a difference in her field. In addition to her career as a scientist at a research institute, Mei is also a proud mother. When she is not dedicating herself to her work and family, she enjoys unwinding with a good book. Her love of reading, combined with her strong work ethic, make her a well-rounded and accomplished individual.'
  },
    position: { x: 900, y: 346 },
    type: 'personNode',
  },
  {
    id: '4',
    data: { name: 'David Cole', job: 'White man', emoji: '👱🏻‍♂️', image:"david.png" , age:"35",
    info: 'David, the 35-year-old white lawyer, has had a privileged upbringing with access to many resources and opportunities. Despite his advantages, he values hard work and is driven to succeed in his career. In addition to his work as a lawyer, David has a nerdy side - he is passionate about technology and always up-to-date with the latest advancements. When he is not working, he enjoys indulging his green thumb and tends to his garden, which provides him with a sense of peace and grounding. With his drive, intelligence, and unique interests, David is a well-rounded individual who is making the most of his opportunities and leaving a mark on the world.'
    },
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
    position: { x: 1174, y: 1200 },
    type: 'personNode',
  },
  {
    id: '11',
    data: { name: 'Mei Sawayama', job: 'Asian woman', emoji: '👩🏻', image:"mei.png" , age:"28",
    info: 'Mei, the 28-year-old Asian scientist, is a hardworking and determined individual. Growing up in a rural village in China and later immigrating to the United States for college, she values education and has a passion for making a difference in her field. In addition to her career as a scientist at a research institute, Mei is also a proud mother. When she is not dedicating herself to her work and family, she enjoys unwinding with a good book. Her love of reading, combined with her strong work ethic, make her a well-rounded and accomplished individual.'
  },
    position: { x: 639, y: 1200 },
    type: 'personNode',
  },
  {
    id: '12',
    data: { name: 'Marcus Wright', job: 'Black man', emoji: '👨🏾‍🦲', image:"marcus.png" , age:"30",
    info: "Marcus, the 30-year-old black marketing manager at a large company, has faced many challenges in his life due to racial discrimination. Despite these obstacles, he has persevered and achieved success in his career. As a passionate advocate for social justice, he works tirelessly to promote equality and opportunity for people of color. In addition to his professional pursuits, Marcus has a deep love for dance, which he practices as a hobby. He is an enthusiastic and dedicated dancer, channeling his energy and creativity into this passion. Through his work and his hobby, Marcus is making a difference in the world and inspiring others to do the same."
    },
    position: { x: 901, y: 1200 },
    type: 'personNode',
  },
  {
    id: '13',
    data: { name: 'Matthew Barmon', job: 'Gay man', emoji: '👨🏼‍🦰', image:"matthew.png" , age:"22",
    info:"Matthew Barmon is a 22-year-old gay man with a fiery spirit, reflected in his bright red hair. He is a talented and prestigious actor in the field, known for his dynamic and captivating performances. In addition to his acting career, Matthew is also a talented photographer with a keen eye for capturing the beauty in the world around him. He is passionate about both his art forms and is always seeking out new challenges and opportunities to grow and create. With his youthful energy, creative spirit, and versatile talents, Matthew is a rising star who is poised to make a lasting impact in the entertainment industry and beyond."
    },
    position: { x:336, y:1200 },
    type: 'personNode',
  },
  {
    id: '14',
    data: { name: 'What if...', job: 'The job recruiter is misogonistic? Who would be less favored?'},
    position: { x: 600, y: 944 },
    type: 'scenarioNode',
  }
];
const thirdNodes = [
  {
    id: '15',
    data: { name: 'What if...', job: "There's a casting call for a trans woman character in a famous play on broadway. Which persona should get it?"},
    position: { x: 300, y: 1350 },
    type: 'scenarioNode',
  },
  {
    id: '16',
    data: { name: 'Lily Bosco', job: 'Transgender woman', emoji: '👩🏼‍🦰', image:"lily.png", age:"25",
    info: "Lily, a 25-year-old transgender woman, is a multifaceted individual who has faced numerous challenges in her life due to her gender identity. Despite growing up in a small town where she faced discrimination, Lily is a strong and resilient individual who never gave up on her dreams. She works as a graphic designer, using her talents to bring beauty to the world and help others express themselves. Despite financial difficulties, Lily is also an incredibly talented street artist, using her art to spread messages of hope and acceptance for the LGBTQ+ community. Her passion for the arts extends to her love of theater, where she has put on several performances that have received great acclaim. Lily's unique combination of creativity, strength, and resilience make her a true inspiration to those around her."},
    position: { x: 600, y: 1600 },
    type: 'personNode',
  },
  {
    id: '17',
    data: { name: 'Matthew Barmon', job: 'Gay man', emoji: '👨🏼‍🦰', image:"matthew.png" , age:"22",
    info:"Matthew Barmon is a 22-year-old gay man with a fiery spirit, reflected in his bright red hair. He is a talented and prestigious actor in the field, known for his dynamic and captivating performances. In addition to his acting career, Matthew is also a talented photographer with a keen eye for capturing the beauty in the world around him. He is passionate about both his art forms and is always seeking out new challenges and opportunities to grow and create. With his youthful energy, creative spirit, and versatile talents, Matthew is a rising star who is poised to make a lasting impact in the entertainment and acting industry and beyond."},
    position: { x: 950, y: 1600 },
    type: 'personNode',
  },
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

export { initialNodes, initialEdges, correctEdges, secondNodes, thirdNodes };
