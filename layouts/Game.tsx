import Player from "@/components/Game/Player";
import Board from "@/components/Game/Board";
import SideWindow from "@/components/Game/SideWindow";
import {useEffect} from "react";

type GameProps = {
  gameId: number;
}
const Game = ({gameId}: GameProps) => {

  useEffect(() => {
    console.log(gameId);
  }, [gameId]);

  return (
    <div className={'game'}>
      <div className={'game--left'}>
        <Player player={{name: "Player 1", time: 180}}/>
        <div className={"game__chessboard"}>
          <Board/>
        </div>
        <Player player={{name: "Player 1", time: 180}}/>
      </div>
      <div className={'game--right'}>
        <SideWindow moves={[]} chat={[]}/>
      </div>
    </div>
  )
}

export default Game;