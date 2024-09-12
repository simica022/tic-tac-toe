import { ChangeEvent, useState } from "react";
import { type PlayerType } from "../models";


const Player: React.FC<PlayerType> = ({ initialName, symbol, isActive, onSave }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    const handlePlayerNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPlayerName(event.target.value)
    }

    const handleEditClick = () => {
        setIsEditing((prev) => (!prev));
        if (isEditing) {
            onSave(symbol, playerName)
        }
    }
    let editableName = <span className="player-name">{playerName}</span>;
    let buttonCaption = 'Edit'

    if (isEditing) {
        editableName = <input type="text" required value={playerName} onChange={handlePlayerNameChange} />
        buttonCaption = 'Save'
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">{editableName}</span>
            <span className="player-symbol">{symbol}</span>
            <button type="button" onClick={handleEditClick}>{buttonCaption}</button>
        </li>
    )
}

export default Player
