export type PlayerSymbol = "X" | "O";

export type SquareType = {
  row: number;
  column: number;
};

export type GameTurnsType = {
  player: PlayerSymbol;
  square: SquareType;
};

export type PlayerType = {
  initialName: string;
  symbol: PlayerSymbol;
  isActive: boolean;
  onSave: (symbol: PlayerSymbol, newName: string) => void;
};

export type BoardType = PlayerSymbol[][];

export type GameBoardType = {
  board: BoardType;
  onSquareSelect: (row: number, column: number) => void;
};

export type GameOverType = {
  winner: string | undefined;
  onRestart: () => void;
};

export type LogGameType = {
  turns: GameTurnsType[]
};
