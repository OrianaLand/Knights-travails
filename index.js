import Knight from "./knight.js";
import Board from "./board.js";
import { bfs } from "./search.js";

function createGetNeighbors(knight, board) {
  //get the actual valid moves
  return function getNeighbors(position) {
    const moves = knight.getPossibleMoves(position);
    return moves.filter((move) => board.isValidPosition(move));
  };
}

function knightMoves(start, end) {
  const board = new Board();
  const knight = new Knight();
  const getNeighbors = createGetNeighbors(knight, board);
  const path = bfs(start, end, getNeighbors);

  console.log(`You made it in ${path.length - 1} moves!`);
  path.forEach((square) => console.log(square));

  return path;
}

knightMoves([0, 0], [7, 7]);
