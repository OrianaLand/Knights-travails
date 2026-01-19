export default class Board {
  constructor(size = 8) {
    this.size = size;
  }
  isValidPosition(position) {
    // returns true if position is inside the board
    const [x, y] = position;
    return x >= 0 && x < this.size && y >= 0 && y < this.size;
  }
}
