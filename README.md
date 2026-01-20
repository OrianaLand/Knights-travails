# Knights Travails ♞

This project solves the **Knights Travails** problem from The Odin Project using **Breadth-First Search (BFS)**.

Given a starting square and an ending square on a standard 8×8 chessboard, the program calculates the **shortest possible path** a knight can take to reach the destination.

---

## 🧠 Problem Overview

A knight moves in an **L-shape**:

- two squares in one direction
- one square perpendicular

The challenge is to find the **minimum number of moves** required to go from one square to another.

This problem is best modeled as a **graph traversal** problem.

---

## 🗺️ Graph Model

- **Nodes**: board positions `[x, y]`
- **Edges**: legal knight moves
- **Algorithm**: Breadth-First Search (BFS)

Because all moves have equal cost, BFS guarantees the **shortest path**.

---

## 📁 Project Structure

```text
src/
├── knight.js // Knight movement rules
├── board.js // Board boundaries and validation
├── search.js // Generic BFS implementation
└── index.js // Orchestration and knightMoves API
```

---

## 🧩 Design Philosophy

Each module has a **single responsibility**:

### `knight.js`

- Defines how a knight moves
- Does not know about the board or search logic

### `board.js`

- Validates whether a position is inside the board
- Does not know about pieces or movement rules

### `search.js`

- Implements a generic BFS algorithm
- Does not know anything about chess

### `script.js`

- Wires all components together
- Exposes the `knightMoves(start, end)` function

This separation keeps the code **readable, testable, and maintainable**.

---

## 🚀 Usage

```js
import { knightMoves } from "./src/script.js";

console.log(knightMoves([0, 0], [7, 7]));
```

```text
[
  [0, 0],
  [1, 2],
  [2, 4],
  [3, 6],
  [5, 7],
  [7, 6],
  [6, 4],
  [7, 7]
]

```

This path represents the **shortest sequence of knight moves** from start to end.

---

## ⚠️ Input Validation

-Start and end positions must be inside the board (0–7)

-If either position is invalid, the function safely exits

---

## 🧪 Edge Cases Handled

-Start equals end → returns a path with one position

-Out-of-bounds inputs → rejected

-Infinite loops → prevented with visited tracking

-Path mutation → avoided by copying paths

---

## 🛠️ Technologies Used

-JavaScript (ES Modules)

-Breadth-First Search (BFS)

-Graph traversal concepts

## 📚 What I Learned

+How to model real-world problems as graphs

-Why BFS is ideal for shortest-path problems

-The importance of separation of concerns

-How to design clean, reusable modules

---

## 📄 License

Educational project — free to use for learning purposes.

---

## 📌 Acknowledgments

- This project is part of a data structures and algorithms curriculum from The Odin Project inspired by classic computer science problems.
