import Knight from "./knight.js";
import Board from "./board.js";
import { bfs } from "./search.js";

let knight = new Knight();
let moves = knight.getPossibleMoves([1, 1]);
console.log(moves);

let board = new Board();
moves.forEach((move) => console.log(board.isValidPosition(move)));

function getNeighbors(position) {
  const possibleMoves = knight.getPossibleMoves(position);
  return possibleMoves.filter((move) => board.isValidPosition(move));
}

const neighbors = getNeighbors([0, 0]);
console.log(neighbors);

function knightMoves(start, end) {
  // 1. create board
  // 2. create knight
  // 3. define how to get valid neighbors
  // 4. run bfs
  // 5. return or print path
}

// Example usage (later):
// knightMoves([0, 0], [7, 7]);
