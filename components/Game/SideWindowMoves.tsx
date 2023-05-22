import {BsFlag} from "react-icons/bs";
import {FaHandshake} from "react-icons/fa";
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";

type SideWindowMovesProps = {
  moves: any;
  show: string;
}
const SideWindowMoves = ({moves, show}: SideWindowMovesProps) => {

  return <div className={'sidewindow-moves'} style={{display: show === 'moves' ? 'flex' : 'none'}}>
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
}

export default SideWindowMoves;