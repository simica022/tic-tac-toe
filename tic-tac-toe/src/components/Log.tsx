import React from 'react'
import { LogGameType } from '../models'

const Log: React.FC<LogGameType> = ({turns}) => {
  return (
    <ol id="log">
            {turns.map(turn => 
                <li key={`${turn.square.row}${turn.square.column}`}> 
                    {turn.player} selected {turn.square.row + 1}, { turn.square.column + 1}
                </li>)}
        </ol>
  )
}

export default Log
