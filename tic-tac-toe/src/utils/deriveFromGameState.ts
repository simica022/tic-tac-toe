import {
  type GameTurnsType,
  type PlayerSymbol,
  type BoardType,
} from "../models";
import { INITIAL_GAME_BOARD, WINNING_COMBINATIONS } from "./setUpGame";

export function deriveActivePlayer(gameTurns: GameTurnsType[]) {
  let currentPlayer: PlayerSymbol = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

export function deriveGameBoard(gameTurns: GameTurnsType[]) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, column } = square;
    gameBoard[row][column] = player;
  }

  return gameBoard;
}

export function deriveWinner(
  gameBoard: BoardType,
  players: {X: string; O:string}
) {
  let winner: string | undefined;

  for (const combinations of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combinations[0].row][combinations[0].column];
    const secondSquareSymbol =
      gameBoard[combinations[1].row][combinations[1].column];
    const thirdSquareSymbol =
      gameBoard[combinations[2].row][combinations[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
        console.log(firstSquareSymbol)
      winner = players[firstSquareSymbol];
      break;
    }
  }

  return winner;
}
