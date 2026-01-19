export default class Knight {
  getPossibleMoves(position) {
    const [x, y] = position;

    const offsetMoves = [
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2],
    ];

    return offsetMoves.map(([dx, dy]) => [x + dx, y + dy]);
  }
}
