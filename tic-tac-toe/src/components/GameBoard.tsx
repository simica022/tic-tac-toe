import React from 'react'
import { PlayerSymbol, type GameBoardType } from "../models";

const GameBoard: React.FC<GameBoardType> = ({ board, onSquareSelect }) => {
    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol: PlayerSymbol, colIndex: number) => <li key={colIndex}>
                        <button type='button' onClick={() => onSquareSelect(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    )
}

export default GameBoard
