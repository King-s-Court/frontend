import React, {useState} from "react";
import SideWindowMoves from "@/components/Game/SideWindowMoves";

type SideWindowProps = {
  moves: any;
  chat: any;
}

const SideWindow = ({moves, chat}: SideWindowProps) => {
  const [activeWindow, setActiveWindow] = useState('moves'); // ['moves', 'chat']
  moves = [
    {
      white: 'e4',
      black: 'e5'
    },
    {
      white: 'Nf3',
      black: 'Nc6'
    },
    {
      white: 'Bb5',
      black: 'a6'
    },
    {
      white: 'Ba4',
      black: 'Nf6'
    }
  ]
  chat = [
    'Hello',
    'Hi',
    'How are you?',
    'Good, you?',
    'Good',
  ]
  return <div className={'sidewindow'}>
    <div className={'sidewindow-top-buttons'}>
      <div onClick={() => setActiveWindow('moves')}
           className={`sidewindow-top-button ${activeWindow === 'moves' && 'sidewindow-top-button--active'}`}>
        Moves
      </div>
      <div onClick={() => setActiveWindow('chat')}
           className={`sidewindow-top-button ${activeWindow === 'chat' && 'sidewindow-top-button--active'}`}>
        Chat
      </div>
    </div>
    <SideWindowMoves moves={moves} show={activeWindow}/>

    <div className={'sidewindow-chat'}>
    </div>
  </div>
}

export default SideWindow;