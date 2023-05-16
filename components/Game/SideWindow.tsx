import {useState} from "react";
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";
import {BsFlag} from "react-icons/bs";
import {FaHandshake} from "react-icons/fa";

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
    <div className={'sidewindow-moves'} style={{display: activeWindow === 'moves' ? 'flex' : 'none'}}>
      <div className={'sidewindow-moves__table'}>
        <div className={'sidewindow-moves__top'}>
          <div/>
          <div className={'subtitle'}>
            White
          </div>
          <div className={'subtitle'}>
            Black
          </div>
        </div>
        {
          moves.map((move: any, index: number) => {
            return <div key={index} className={`sidewindow-move ${index % 2 === 0 && 'sidewindow-move--dark'}`}>
              <div className={'sidewindow-move__number'}>
                {index + 1}.
              </div>
              <div className={'sidewindow-move-code'}>
                {move.white}
              </div>
              <div className={'sidewindow-move-code'}>
                {move.black}
              </div>
              <div></div>
            </div>
          })
        }
      </div>
      <div className={'sidewindow-moves__buttons'}>
        <div className={'sidewindow-icon-button'}>
          <BsFlag/>
        </div>
        <div className={'sidewindow-icon-button'}>
          <FaHandshake/>
        </div>
        <div className={'sidewindow-icon-button'}>
          <BiChevronLeft/>
        </div>
        <div className={'sidewindow-icon-button'}>
          <BiChevronRight/>
        </div>
      </div>
    </div>

    <div className={'sidewindow-chat'}>
    </div>
  </div>
}

export default SideWindow;