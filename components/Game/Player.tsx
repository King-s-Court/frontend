import React from 'react';
import Badge from "@/components/Badge";


type PlayerProps = {
  player: {
    name: string;
    time: number;
  };
}

const Player = ({player}: PlayerProps) => {
  const [time, setTime] = React.useState(player.time);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  function ConvertNumberToTimeString(number: number) {
    const minutes = Math.floor(number / 60);
    const seconds = number % 60;
    //if seconds is less than 10, add a 0 in front of it
    if (seconds < 10) {
      return `${minutes}:0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }

  return (
    <div className={'player'}>
      <div className={'player-info'}>
        <img className="player-avatar" src="https://via.placeholder.com/50" alt=""/>
        <h4 className="player-name">
          {player.name}
        </h4>
      </div>
      <div className="player-time">
        <Badge backgroundColor={'#7B7DB0'}>
          <div>{ConvertNumberToTimeString(player.time)}</div>
        </Badge>
      </div>
    </div>
  );
};

export default Player;
