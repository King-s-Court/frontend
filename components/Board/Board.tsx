import {Chessboard} from "react-chessboard";

interface BoardProps {
  style: string;
}

const Board = ({}: BoardProps) => {

  const ValidateMove = () => {
    return true;
  }

  return <div
    style={{
      margin: '3rem auto',
      maxWidth: '70vh',
      width: '70vw'
    }}
  >
    <Chessboard
      id="Configurable Board"
      onArrowsChange={function noRefCheck(){}}
      onDragOverSquare={function noRefCheck(){}}
      onMouseOutSquare={function noRefCheck(){}}
      onMouseOverSquare={function noRefCheck(){}}
      onPieceClick={function noRefCheck(){}}
      onPieceDragBegin={function noRefCheck(){}}
      onPieceDragEnd={function noRefCheck(){}}
      onPieceDrop={ValidateMove}
      onSquareClick={function noRefCheck(){}}
      onSquareRightClick={function noRefCheck(){}}
    />
  </div>
}
export default Board;