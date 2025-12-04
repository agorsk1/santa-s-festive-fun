export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  hint?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  questions: Question[];
}

export const categories: Category[] = [
  {
    id: 'christmas-trivia',
    name: 'Christmas Trivia',
    icon: '🎄',
    description: 'Test your holiday knowledge',
    questions: [
      {
        id: 'ct1',
        question: 'How many reindeer pull Santa\'s sleigh (including Rudolph)?',
        options: ['7', '8', '9', '10'],
        correctAnswer: 2,
        hint: 'Don\'t forget Rudolph!',
      },
      {
        id: 'ct2',
        question: 'In which country did the tradition of putting up a Christmas tree originate?',
        options: ['England', 'Germany', 'Norway', 'Finland'],
        correctAnswer: 1,
        hint: 'Think Central Europe',
      },
      {
        id: 'ct3',
        question: 'What color are mistletoe berries?',
        options: ['Red', 'Blue', 'White', 'Green'],
        correctAnswer: 2,
        hint: 'Pure as snow',
      },
      {
        id: 'ct4',
        question: 'Which Christmas carol contains the lyrics "Sleep in heavenly peace"?',
        options: ['O Holy Night', 'Silent Night', 'Away in a Manger', 'The First Noel'],
        correctAnswer: 1,
        hint: 'A peaceful night...',
      },
    ],
  },
  {
    id: 'elf-riddles',
    name: "Elf's Riddles",
    icon: '🧩',
    description: "Solve tricky riddles from Santa's helpers",
    questions: [
      {
        id: 'er1',
        question: 'I\'m found in Christmas socks and at the top of Christmas trees. What am I?',
        options: ['Star', 'Angel', 'Presents', 'Bell'],
        correctAnswer: 0,
        hint: 'Look up to the sky',
      },
      {
        id: 'er2',
        question: 'I fall from the sky but never get hurt. I disappear when it\'s warm. What am I?',
        options: ['Rain', 'Snowflake', 'Hail', 'Leaf'],
        correctAnswer: 1,
        hint: 'Winter\'s gentle touch',
      },
      {
        id: 'er3',
        question: 'I have a body made of snow, a carrot nose, and coal eyes. What am I?',
        options: ['Ice sculpture', 'Snow angel', 'Snowman', 'Igloo'],
        correctAnswer: 2,
        hint: 'Frosty is my friend',
      },
      {
        id: 'er4',
        question: 'I\'m round and hang on trees, but I\'m not a fruit. I come in many colors. What am I?',
        options: ['Bird nest', 'Christmas ornament', 'Pine cone', 'Lantern'],
        correctAnswer: 1,
        hint: 'Decorative and shiny',
      },
    ],
  },
  {
    id: 'reindeer-math',
    name: 'Reindeer Math',
    icon: '🔢',
    description: 'Quick math puzzles with a festive twist',
    questions: [
      {
        id: 'rm1',
        question: 'Santa has 12 elves. Each elf made 8 toys. How many toys in total?',
        options: ['84', '96', '108', '88'],
        correctAnswer: 1,
        hint: 'Multiply the workers by their output',
      },
      {
        id: 'rm2',
        question: 'If Rudolph flies 150 miles per hour, how far can he fly in 4 hours?',
        options: ['500 miles', '600 miles', '450 miles', '550 miles'],
        correctAnswer: 1,
        hint: 'Speed times time',
      },
      {
        id: 'rm3',
        question: 'Mrs. Claus baked 48 cookies and divided them equally among 8 elves. How many cookies did each elf get?',
        options: ['5', '6', '7', '8'],
        correctAnswer: 1,
        hint: 'Division time!',
      },
      {
        id: 'rm4',
        question: 'Santa visited 25 houses on Christmas Eve. If he ate 3 cookies at each house, how many cookies did he eat?',
        options: ['65', '70', '75', '80'],
        correctAnswer: 2,
        hint: 'That\'s a lot of cookies!',
      },
    ],
  },
  {
    id: 'snowman-patterns',
    name: 'Snowman Patterns',
    icon: '🎨',
    description: 'Visual pattern recognition games',
    questions: [
      {
        id: 'sp1',
        question: 'What comes next in the pattern? ⭐🎄⭐🎄⭐?',
        options: ['⭐', '🎄', '🎁', '❄️'],
        correctAnswer: 1,
        hint: 'Look at the alternating pattern',
      },
      {
        id: 'sp2',
        question: 'Complete the sequence: 🎅🎅🎄🎅🎅🎄🎅🎅?',
        options: ['🎅', '🎄', '❄️', '🎁'],
        correctAnswer: 1,
        hint: 'Count how many Santas before each tree',
      },
      {
        id: 'sp3',
        question: 'What pattern is this? ❄️❄️🎄❄️❄️🎄❄️❄️?',
        options: ['❄️', '🎄', '🎅', '⭐'],
        correctAnswer: 1,
        hint: 'Two snowflakes, then what?',
      },
      {
        id: 'sp4',
        question: 'Find the odd one out: 🎄🎄🎄🌲🎄',
        options: ['First tree', 'Second tree', 'Fourth tree', 'Fifth tree'],
        correctAnswer: 2,
        hint: 'Look carefully at each tree',
      },
    ],
  },
  {
    id: 'north-pole-words',
    name: 'North Pole Word Games',
    icon: '🔤',
    description: 'Anagrams, word scrambles, and more',
    questions: [
      {
        id: 'npw1',
        question: 'Unscramble the Christmas word: REDNEIRE',
        options: ['Reindeer', 'Rendered', 'Reminder', 'Reednier'],
        correctAnswer: 0,
        hint: 'Santa\'s flying helpers',
      },
      {
        id: 'npw2',
        question: 'Unscramble: GEJINL LEBS',
        options: ['Single Bells', 'Jingle Bells', 'Jungle Bells', 'Jangle Bells'],
        correctAnswer: 1,
        hint: 'A famous Christmas song',
      },
      {
        id: 'npw3',
        question: 'Which word can be made from the letters in "CHRISTMAS"?',
        options: ['MATHS', 'SMART', 'CHARM', 'All of the above'],
        correctAnswer: 3,
        hint: 'Try each one!',
      },
      {
        id: 'npw4',
        question: 'Complete the Christmas word: SN_WFL_KE',
        options: ['SNOWFLAKE', 'SNOWFLUKE', 'SNAWFLAKE', 'SNOWFLEKE'],
        correctAnswer: 0,
        hint: 'O and A are missing',
      },
    ],
  },
  {
    id: 'memory-challenge',
    name: "Mrs. Claus Memory Challenge",
    icon: '🧠',
    description: 'Memory and recall tasks',
    questions: [
      {
        id: 'mc1',
        question: 'In the song "12 Days of Christmas", what gift is given on the first day?',
        options: ['Two turtle doves', 'A partridge in a pear tree', 'Three French hens', 'Five golden rings'],
        correctAnswer: 1,
        hint: 'It\'s in a fruit tree',
      },
      {
        id: 'mc2',
        question: 'What are the names of Santa\'s two most famous reindeer that start with "D"?',
        options: ['Dancer and Dasher', 'Donner and Blitzen', 'Dasher and Donner', 'Dancer and Donner'],
        correctAnswer: 2,
        hint: 'One dashes, one thunders',
      },
      {
        id: 'mc3',
        question: 'In "Frosty the Snowman", what made Frosty come to life?',
        options: ['Magic snow', 'An old silk hat', 'A magic wand', 'Christmas spirit'],
        correctAnswer: 1,
        hint: 'Something you wear on your head',
      },
      {
        id: 'mc4',
        question: 'What street does the Miracle take place on in the classic Christmas movie?',
        options: ['Elm Street', '34th Street', 'Main Street', 'Broadway'],
        correctAnswer: 1,
        hint: 'It\'s a number',
      },
    ],
  },
];
