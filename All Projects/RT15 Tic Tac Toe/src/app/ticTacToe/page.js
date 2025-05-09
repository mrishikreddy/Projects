"use client";
import { useState, useEffect } from "react";
import styles from "./ttt.module.css";

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isUserTurn, setIsUserTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const checkWinner = (newBoard) => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6]
    ];

    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a];
      }
    }
    return newBoard.includes(null) ? null : "Draw";
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);

    const result = checkWinner(newBoard);
    if (result) {
      setWinner(result === "Draw" ? "It's a Draw!" : `${result === "X" ? "You" : "Rishik Tech AI"} Won!`);
      return;
    }

    setIsUserTurn(false);
  };

  const aiMove = () => {
    if (winner) return; // Prevent AI from playing after game is over
    let newBoard = [...board];
    let move = getBestMove(newBoard);

    if (move !== null) {
      newBoard[move] = "O";
      setBoard(newBoard);
    }

    const result = checkWinner(newBoard);
    if (result) {
      setWinner(result === "Draw" ? "It's a Draw!" : `${result === "X" ? "You" : "Rishik Tech AI"} Won!`);
    } else {
      setIsUserTurn(true);
    }
  };

  useEffect(() => {
    if (!isUserTurn && !winner) {
      setTimeout(aiMove, 500);
    }
  }, [isUserTurn, board, winner]);

  const getBestMove = (b) => {
    // Defensive and Offensive Logic
    const checkWinOrBlock = (player) => {
      // Rows
      if (b[0] === player && b[1] === player && b[2] === null) return 2;
      if (b[0] === player && b[2] === player && b[1] === null) return 1;
      if (b[1] === player && b[2] === player && b[0] === null) return 0;
      if (b[3] === player && b[4] === player && b[5] === null) return 5;
      if (b[3] === player && b[5] === player && b[4] === null) return 4;
      if (b[4] === player && b[5] === player && b[3] === null) return 3;
      if (b[6] === player && b[7] === player && b[8] === null) return 8;
      if (b[6] === player && b[8] === player && b[7] === null) return 7;
      if (b[7] === player && b[8] === player && b[6] === null) return 6;
      // Columns
      if (b[0] === player && b[3] === player && b[6] === null) return 6;
      if (b[0] === player && b[6] === player && b[3] === null) return 3;
      if (b[3] === player && b[6] === player && b[0] === null) return 0;
      if (b[1] === player && b[4] === player && b[7] === null) return 7;
      if (b[1] === player && b[7] === player && b[4] === null) return 4;
      if (b[4] === player && b[7] === player && b[1] === null) return 1;
      if (b[2] === player && b[5] === player && b[8] === null) return 8;
      if (b[2] === player && b[8] === player && b[5] === null) return 5;
      if (b[5] === player && b[8] === player && b[2] === null) return 2;
      // Diagonals
      if (b[0] === player && b[4] === player && b[8] === null) return 8;
      if (b[0] === player && b[8] === player && b[4] === null) return 4;
      if (b[4] === player && b[8] === player && b[0] === null) return 0;
      if (b[2] === player && b[4] === player && b[6] === null) return 6;
      if (b[2] === player && b[6] === player && b[4] === null) return 4;
      if (b[4] === player && b[6] === player && b[2] === null) return 2;
      return null;
    };

    // Check for winning move
    let move = checkWinOrBlock("O");
    if (move !== null) return move;

    // Check for blocking move
    move = checkWinOrBlock("X");
    if (move !== null) return move;

    // Fallback logic: Take the center if available
    if (b[4] === null) return 4;

    // Fallback logic: Take a corner if available
    const corners = [0, 2, 6, 8];
    for (let corner of corners) {
      if (b[corner] === null) return corner;
    }

    // Fallback logic: Take a side if available
    const sides = [1, 3, 5, 7];
    for (let side of sides) {
      if (b[side] === null) return side;
    }

    // If no move is possible
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsUserTurn(true);
    setWinner(null);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tic Tac Toe</h1>
      <p className={styles.subtitle}>
        You: <span className={styles.x}>X</span> | Rishik Tech AI: <span className={styles.o}>O</span>
      </p>
      <p className={styles.turn}>
        {winner ? "" : isUserTurn ? "Your Turn" : "AI is Thinking..."}
      </p>
      <div className={styles.board}>
        {board.map((value, index) => (
          <div
            key={index}
            className={`${styles.cell} ${value === "X" ? styles.x : value === "O" ? styles.o : ""}`}
            onClick={() => handleClick(index)}
          >
            {value}
          </div>
        ))}
      </div>
      {winner && (
        <div className={styles.result}>
          <p>{winner}</p>
          <button className={styles.button} onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>
  );
}
