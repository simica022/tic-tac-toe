import { useState } from "react";
import Header from "./components/Header";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { INITIAL_GAME_PLAYERS } from "./utils/setUpGame";
import { deriveActivePlayer, deriveGameBoard, deriveWinner } from "./utils/deriveFromGameState";
import { type PlayerSymbol, type GameTurnsType } from "./models";
import GameOver from "./components/GameOver";

function App() {
  const [players, setPlayer] = useState(INITIAL_GAME_PLAYERS);
  const [gameTurns, setGameTurns] = useState<GameTurnsType[]>([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  let gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;


  const handlePlayerNameChange = (symbol: PlayerSymbol, newName: string) => {
    setPlayer((prev) => ({
      ...prev,
      [symbol]: newName

    }))
  }

  const handleSelectedSquare = (row: number, column: number) => {
    setGameTurns((prev) => {
      const currentPlayer: PlayerSymbol = deriveActivePlayer(prev);
      const updatedTurns: GameTurnsType[] = [{ square: { row, column }, player: currentPlayer }, ...prev];
      return updatedTurns;
    });
  };

  const handleRestart = () => {
    setGameTurns([])
  }

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player initialName={players.X} symbol='X' isActive={activePlayer === "X"} onSave={handlePlayerNameChange} />
            <Player initialName={players.O} symbol='O' isActive={activePlayer === "O"} onSave={handlePlayerNameChange} />
          </ol>
          {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
          <GameBoard board={gameBoard} onSquareSelect={handleSelectedSquare} />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  )
}

export default App
