import {
  tripleWord,
  doubleLetter,
  doubleWord,
  tripleLetter,
  style,
  styleDoubleLetter,
  styleDoubleWord,
  styleTripleWord,
  styleTripleLetter,
  styleCenter,
} from "./utils.js";

export default function initiateGrid() {
  let grid = [];

  for (let i = 0; i < 15 * 15; i++)
    if (tripleWord.indexOf(i) >= 0)
      grid.push({ id: i, multiplier: 3, style: styleTripleWord, text: "TW" });
    else if (doubleLetter.indexOf(i) >= 0)
      grid.push({ id: i, multiplier: 2, style: styleDoubleLetter, text: "DL" });
    else if (tripleLetter.indexOf(i) >= 0)
      grid.push({ id: i, multiplier: 3, style: styleTripleLetter, text: "TL" });
    else if (doubleWord.indexOf(i) >= 0)
      grid.push({ id: i, multiplier: 2, style: styleDoubleWord, text: "DW" });
    else if (i === 112)
      grid.push({ id: i, multiplier: 0, style: styleCenter, text: "S" });
    else grid.push({ id: i, multiplier: 0, style: style, text: "" });

  return grid;
}

// export function initiateHand() {
//   const hand = [];

//   for (let i = 0; i < 7; i++) {
//     const r = Math.floor(Math.random() * letterObj.length);
//     hand.push({ id: letterObj[r].id, letter: letterObj[r].letter });
//     letterObj.splice(letterObj[r], 1);
//   }

//   console.log(hand);
//   return hand;
// }

export const letterObj = [
  { letter: "A", id: 0 },
  { letter: "A", id: 1 },
  { letter: "A", id: 2 },
  { letter: "A", id: 3 },
  { letter: "A", id: 4 },
  { letter: "A", id: 5 },
  { letter: "A", id: 6 },
  { letter: "A", id: 7 },
  { letter: "A", id: 8 },
  { letter: "E", id: 9 },
  { letter: "E", id: 10 },
  { letter: "E", id: 11 },
  { letter: "E", id: 12 },
  { letter: "E", id: 13 },
  { letter: "E", id: 14 },
  { letter: "E", id: 15 },
  { letter: "E", id: 16 },
  { letter: "E", id: 17 },
  { letter: "E", id: 18 },
  { letter: "E", id: 19 },
  { letter: "E", id: 20 },
  { letter: "I", id: 21 },
  { letter: "I", id: 22 },
  { letter: "I", id: 23 },
  { letter: "I", id: 24 },
  { letter: "I", id: 25 },
  { letter: "I", id: 26 },
  { letter: "I", id: 27 },
  { letter: "I", id: 28 },
  { letter: "I", id: 29 },
  { letter: "I", id: 30 },
  { letter: "I", id: 31 },
  { letter: "O", id: 32 },
  { letter: "O", id: 33 },
  { letter: "O", id: 34 },
  { letter: "O", id: 35 },
  { letter: "O", id: 36 },
  { letter: "O", id: 37 },
  { letter: "O", id: 38 },
  { letter: "O", id: 39 },
  { letter: "N", id: 40 },
  { letter: "N", id: 41 },
  { letter: "N", id: 42 },
  { letter: "N", id: 43 },
  { letter: "N", id: 44 },
  { letter: "N", id: 45 },
  { letter: "R", id: 46 },
  { letter: "R", id: 47 },
  { letter: "R", id: 48 },
  { letter: "R", id: 49 },
  { letter: "R", id: 50 },
  { letter: "R", id: 51 },
  { letter: "T", id: 52 },
  { letter: "T", id: 53 },
  { letter: "T", id: 54 },
  { letter: "T", id: 55 },
  { letter: "T", id: 56 },
  { letter: "T", id: 57 },
  { letter: "L", id: 58 },
  { letter: "L", id: 59 },
  { letter: "L", id: 60 },
  { letter: "L", id: 61 },
  { letter: "S", id: 62 },
  { letter: "S", id: 63 },
  { letter: "S", id: 64 },
  { letter: "S", id: 65 },
  { letter: "U", id: 66 },
  { letter: "U", id: 67 },
  { letter: "U", id: 68 },
  { letter: "U", id: 69 },
  { letter: "D", id: 70 },
  { letter: "D", id: 71 },
  { letter: "D", id: 72 },
  { letter: "D", id: 73 },
  { letter: "G", id: 74 },
  { letter: "G", id: 75 },
  { letter: "G", id: 76 },
  { letter: "B", id: 77 },
  { letter: "B", id: 78 },
  { letter: "C", id: 79 },
  { letter: "C", id: 80 },
  { letter: "M", id: 81 },
  { letter: "M", id: 82 },
  { letter: "P", id: 83 },
  { letter: "P", id: 84 },
  { letter: "F", id: 85 },
  { letter: "F", id: 86 },
  { letter: "H", id: 87 },
  { letter: "V", id: 88 },
  { letter: "H", id: 89 },
  { letter: "V", id: 90 },
  { letter: "Y", id: 91 },
  { letter: "W", id: 92 },
  { letter: "W", id: 93 },
  { letter: "Y", id: 94 },
  { letter: "K", id: 95 },
  { letter: "J", id: 96 },
  { letter: "X", id: 97 },
  { letter: "Q", id: 98 },
  { letter: "Z", id: 99 },
];
