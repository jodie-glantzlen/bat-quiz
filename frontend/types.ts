type InputEvent = React.ChangeEvent<HTMLInputElement>;

type Player = {
  name: string;
  score: number;
}

type PlayerProps = {
  player: Player;
  setPlayer: Function
}

export type {InputEvent, Player, PlayerProps}