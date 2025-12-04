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
        question: 'Która kolęda zawiera słowa "Śpij w niebiańskim spokoju"?',
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
    id: 'reindeer-math',
    name: 'Matematyka Reniferów',
    icon: '🔢',
    description: 'Szybkie zadania matematyczne ze świątecznym akcentem',
    questions: [
      {
        id: 'rm1',
        question: 'Mikołaj ma 12 elfów. Każdy elf zrobił 8 zabawek. Ile zabawek w sumie?',
        options: ['84', '96', '108', '88'],
        correctAnswer: 1,
        hint: 'Pomnóż pracowników przez ich produkcję',
      },
      {
        id: 'rm2',
        question: 'Jeśli Rudolf leci 150 km na godzinę, jak daleko poleci w 4 godziny?',
        options: ['500 km', '600 km', '450 km', '550 km'],
        correctAnswer: 1,
        hint: 'Prędkość razy czas',
      },
      {
        id: 'rm3',
        question: 'Pani Mikołajowa upiekła 48 ciasteczek i podzieliła je równo między 8 elfów. Ile ciasteczek dostał każdy elf?',
        options: ['5', '6', '7', '8'],
        correctAnswer: 1,
        hint: 'Czas na dzielenie!',
      },
      {
        id: 'rm4',
        question: 'Mikołaj odwiedził 25 domów w Wigilię. Jeśli zjadł 3 ciasteczka w każdym domu, ile ciasteczek zjadł?',
        options: ['65', '70', '75', '80'],
        correctAnswer: 2,
        hint: 'To dużo ciasteczek!',
      },
    ],
  },
  {
    id: 'snowman-patterns',
    name: 'Wzory Bałwana',
    icon: '🎨',
    description: 'Gry rozpoznawania wzorów wizualnych',
    questions: [
      {
        id: 'sp1',
        question: 'Co następuje we wzorze? ⭐🎄⭐🎄⭐?',
        options: ['⭐', '🎄', '🎁', '❄️'],
        correctAnswer: 1,
        hint: 'Spójrz na naprzemienność',
      },
      {
        id: 'sp2',
        question: 'Dokończ sekwencję: 🎅🎅🎄🎅🎅🎄🎅🎅?',
        options: ['🎅', '🎄', '❄️', '🎁'],
        correctAnswer: 1,
        hint: 'Policz ile Mikołajów przed każdą choinką',
      },
      {
        id: 'sp3',
        question: 'Jaki jest wzór? ❄️❄️🎄❄️❄️🎄❄️❄️?',
        options: ['❄️', '🎄', '🎅', '⭐'],
        correctAnswer: 1,
        hint: 'Dwa płatki śniegu, potem co?',
      },
      {
        id: 'sp4',
        question: 'Znajdź element niepasujący: 🎄🎄🎄🌲🎄',
        options: ['Pierwsze drzewo', 'Drugie drzewo', 'Czwarte drzewo', 'Piąte drzewo'],
        correctAnswer: 2,
        hint: 'Przyjrzyj się dokładnie każdemu drzewu',
      },
    ],
  },
  {
    id: 'north-pole-words',
    name: 'Gry Słowne z Bieguna',
    icon: '🔤',
    description: 'Anagramy, przestawianki i więcej',
    questions: [
      {
        id: 'npw1',
        question: 'Ułóż świąteczne słowo: OŁAKIŁM',
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
        question: 'Które słowo można ułożyć z liter słowa "ŚWIĄTECZNY"?',
        options: ['ŚWIĘTY', 'CICHY', 'CIEŃ', 'Wszystkie powyższe'],
        correctAnswer: 2,
        hint: 'Sprawdź każde!',
      },
      {
        id: 'npw4',
        question: 'Uzupełnij świąteczne słowo: PR_ZE_T',
        options: ['PREZENT', 'PROZENT', 'PRAZENT', 'PRYZENT'],
        correctAnswer: 0,
        hint: 'Brakuje E i N',
      },
    ],
  },
  {
    id: 'memory-challenge',
    name: 'Wyzwanie Pamięciowe',
    icon: '🧠',
    description: 'Zadania na pamięć i przypominanie',
    questions: [
      {
        id: 'mc1',
        question: 'W piosence "12 Dni Świąt", jaki prezent jest dany pierwszego dnia?',
        options: ['Dwie turkawki', 'Kuropatwa na gruszy', 'Trzy francuskie kury', 'Pięć złotych pierścieni'],
        correctAnswer: 1,
        hint: 'Jest na drzewie owocowym',
      },
      {
        id: 'mc2',
        question: 'Jak mają na imię dwa najbardziej znane renifery Mikołaja zaczynające się na "D"?',
        options: ['Dancer i Dasher', 'Donner i Blitzen', 'Dasher i Donner', 'Dancer i Donner'],
        correctAnswer: 2,
        hint: 'Jeden pędzi, drugi grzmi',
      },
      {
        id: 'mc3',
        question: 'Co ożywiło Bałwana Frosty w bajce?',
        options: ['Magiczny śnieg', 'Stary jedwabny kapelusz', 'Magiczna różdżka', 'Świąteczny duch'],
        correctAnswer: 1,
        hint: 'Coś, co nosisz na głowie',
      },
      {
        id: 'mc4',
        question: 'Na jakiej ulicy rozgrywa się akcja klasycznego filmu świątecznego "Cud"?',
        options: ['Ulica Wiązów', '34. Ulica', 'Główna Ulica', 'Broadway'],
        correctAnswer: 1,
        hint: 'To liczba',
      },
    ],
  },
];
