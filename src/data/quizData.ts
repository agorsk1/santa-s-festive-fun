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
    name: 'Świąteczna Wiedza',
    icon: '🎄',
    description: 'Sprawdź swoją wiedzę o świętach',
    questions: [
      {
        id: 'ct1',
        question: 'Ile reniferów ciągnie sanie Mikołaja (włącznie z Rudolfem)?',
        options: ['7', '8', '9', '10'],
        correctAnswer: 2,
        hint: 'Nie zapomnij o Rudolfie!',
      },
      {
        id: 'ct2',
        question: 'W którym kraju powstała tradycja ubierania choinki?',
        options: ['Anglia', 'Niemcy', 'Norwegia', 'Finlandia'],
        correctAnswer: 1,
        hint: 'Pomyśl o Europie Środkowej',
      },
      {
        id: 'ct3',
        question: 'Jakiego koloru są jagody jemioły?',
        options: ['Czerwone', 'Niebieskie', 'Białe', 'Zielone'],
        correctAnswer: 2,
        hint: 'Czyste jak śnieg',
      },
      {
        id: 'ct4',
        question: 'Która kolęda zawiera słowa "Za anielskim głosem pieni"?',
        options: ['O Święta Noc', 'Cicha Noc', 'Wśród Nocnej Ciszy', 'Bóg się Rodzi'],
        correctAnswer: 1,
        hint: 'Spokojna noc...',
      },
    ],
  },
  {
    id: 'elf-riddles',
    name: 'Zagadki Elfów',
    icon: '🧩',
    description: 'Rozwiąż zagadki pomocników Mikołaja',
    questions: [
      {
        id: 'er1',
        question: 'Znajdziesz mnie w świątecznych skarpetach i na szczycie choinki. Kim jestem?',
        options: ['Gwiazdka', 'Anioł', 'Prezenty', 'Dzwonek'],
        correctAnswer: 0,
        hint: 'Spójrz w niebo',
      },
      {
        id: 'er2',
        question: 'Spadam z nieba, ale się nie ranię. Znikam gdy jest ciepło. Kim jestem?',
        options: ['Deszcz', 'Płatek śniegu', 'Grad', 'Liść'],
        correctAnswer: 1,
        hint: 'Delikatny dotyk zimy',
      },
      {
        id: 'er3',
        question: 'Mam ciało ze śniegu, marchewkowy nos i węglowe oczy. Kim jestem?',
        options: ['Rzeźba lodowa', 'Śnieżny anioł', 'Bałwan', 'Igloo'],
        correctAnswer: 2,
        hint: 'Frosty jest moim przyjacielem',
      },
      {
        id: 'er4',
        question: 'Jestem okrągła i wiszę na drzewach, ale nie jestem owocem. Występuję w wielu kolorach. Kim jestem?',
        options: ['Gniazdo ptaka', 'Bombka choinkowa', 'Szyszka', 'Lampion'],
        correctAnswer: 1,
        hint: 'Dekoracyjna i błyszcząca',
      },
    ],
  },
  {
      id: 'christmas-movies',
      name: 'Filmy Bożonarodzeniowe',
      icon: '🎬',
      description: 'Szybkie pytania o popularne filmy świąteczne',
      questions: [
        {
          id: 'cm1',
          question: 'W filmie "Kevin sam w domu", ile razy Kevin ustawia pułapki na włamywaczy?',
          options: ['3', '5', '7', '10'],
          correctAnswer: 2,
          hint: 'Liczba jest większa niż 5!',
        },
        {
          id: 'cm2',
          question: 'W "Opowieści wigilijnej" Scrooge odwiedzają duchy. Ile ich jest?',
          options: ['1', '2', '3', '4'],
          correctAnswer: 3,
          hint: 'Pomyśl o duchach przeszłości, teraźniejszości i przyszłości.',
        },
        {
          id: 'cm3',
          question: 'W filmie "Elf" Buddy jest wychowywany przez elfy na biegunie północnym. Ile lat Buddy ma w chwili, gdy odkrywa prawdziwy świat?',
          options: ['20', '25', '30', '35'],
          correctAnswer: 2,
          hint: 'Jest dorosły, ale wciąż bardzo „dziecięcy”',
        },
        {
          id: 'cm4',
          question: 'W filmie "Świąteczna przerwa" (The Holiday) główne bohaterki zamieniają się domami. Ile jest głównych bohaterek?',
          options: ['1', '2', '3', '4'],
          correctAnswer: 1,
          hint: 'Pomysł polega na wymianie domów między dwoma osobami.',
        }
      ]
    },
  {
      id: 'snowman-patterns',
      name: 'Wzory Bałwana',
      icon: '⛄',
      description: 'Gry rozpoznawania wzorów wizualnych',
      questions: [
        {
          id: 'asp1',
          question: 'Co następuje we wzorze? ⭐❄️❄️🎄⭐❄️❄️?',
          options: ['⭐', '🎄', '❄️', '🎅'],
          correctAnswer: 1,
          hint: 'Powtarza się sekwencja gwiazda + dwa płatki śniegu + choinka',
        },
        {
          id: 'asp2',
          question: 'Dokończ sekwencję: 🎅🎄🎅🎄❄️🎅🎄🎅?',
          options: ['❄️', '🎅', '🎄', '⭐'],
          correctAnswer: 0,
          hint: 'Zwróć uwagę na element, który pojawia się po powtarzającej się parze Mikołaj + choinka',
        },
        {
          id: 'asp3',
          question: 'Jaki element pasuje zamiast znaku zapytania? ❄️⭐❄️⭐❄️⭐❄️?',
          options: ['⭐', '❄️', '🎄', '🎅'],
          correctAnswer: 0,
          hint: 'Elementy naprzemienne powtarzają się regularnie',
        },
        {
          id: 'asp4',
          question: 'Znajdź element niepasujący: 🎄❄️🎄🎄❄️🎄',
          options: ['Pierwsze drzewo', 'Drugie drzewo', 'Trzecie drzewo', 'Czwarte drzewo'],
          correctAnswer: 3,
          hint: 'Sprawdź, gdzie powinna być śnieżynka zamiast choinki',
        },
      ]
    },
  {
    id: 'north-pole-words',
    name: 'Gry Słowne z Bieguna',
    icon: '🔤',
    description: 'Anagramy, przestawianki i więcej',
    questions: [
      {
        id: 'npw1',
        question: 'Ułóż świąteczne słowo: OŁAKIŁJM',
        options: ['Mikołaj', 'Kolęda', 'Choinka', 'Prezent'],
        correctAnswer: 0,
        hint: 'Kto przynosi prezenty?',
      },
      {
        id: 'npw2',
        question: 'Ułóż słowo: NAKIHOC',
        options: ['Choinka', 'Kolęda', 'Bombka', 'Śnieg'],
        correctAnswer: 0,
        hint: 'Zielone drzewo',
      },
      {
          id: 'npw3',
          question: 'Ułóż świąteczne słowo: KBOAM',
          options: ['Bombka', 'Kolęda', 'Mikołaj', 'Prezent'],
          correctAnswer: 0,
          hint: 'Ozdoba na choinkę',
        },
      {
        id: 'npw4',
        question: 'Uzupełnij świąteczne słowo: PR_ZE_T',
        options: ['PREZENT', 'PROZENT', 'PRAZENT', 'PRYZENT'],
        correctAnswer: 0,
        hint: 'Brakuje E i N',
      },
    ],
  }
];
