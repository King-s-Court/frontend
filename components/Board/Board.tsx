import {Chessboard} from "react-chessboard";
import {useEffect, useState} from "react";
import {Chess, Square, Move} from "chess.js";
import {BoardOrientation} from "react-chessboard/dist/chessboard/types";

interface BoardProps {
  style: string;
  gameId: number;
}

const Board = ({}: BoardProps) => {

  const [game, setGame] = useState<Chess>(new Chess());
  const [moveFrom, setMoveFrom] = useState("");
  const [optionSquares, setOptionSquares] = useState({});
  const [orientation, setOrientation] = useState<BoardOrientation>("white");

  function getGame() {
    const fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
    const playerColor = "white";
    setGame(new Chess(fen));
    setOrientation(playerColor);
  }

  useEffect(() => {
    getGame();
  }, []);

  function isPlayer(color: string) {
    if(color === "w" || color === "b") {
      return color === orientation[0];
    }
    return color === orientation;
  }

  function makeMove(sourceSquare: string, targetSquare: string) {
    const move = {
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    }

    try {
      game.move(move);
      setGame(new Chess(game.fen()));
      setMoveFrom("");
      setOptionSquares({});
      return true;
    } catch {
      return false
    }
  }

  function onDrop(sourceSquare: string, targetSquare: string) {

    return makeMove(sourceSquare, targetSquare);
  }

  function getMoveOptions(square: Square) {
    if (!game.get(square) || !isPlayer(game.get(square).color)) {
      setOptionSquares({});
      return false;
    }

    const moves = game.moves({
      square,
      verbose: true,
    });

    if (moves.length === 0) {
      return false;
    }

    type SquareStyles = {
      background: string;
      borderRadius?: string;
    };

    const newSquares: Record<string, SquareStyles> = {};
    moves.map((move: Move) => {
      newSquares[move.to] = {
        background:
          game.get(move.to) && game.get(move.to).color !== game.get(square).color
            ? "radial-gradient(circle, rgba(0,0,0,.1) 85%, transparent 85%)"
            : "radial-gradient(circle, rgba(0,0,0,.1) 25%, transparent 25%)",
        borderRadius: "50%",
      };
      return move;
    });
    newSquares[square] = {
      background: "rgba(255, 255, 0, 0.4)",
    };
    setOptionSquares(newSquares);
    return true;
  }

  function onSquareClick(square: Square) {
    function resetFirstMove(square: Square) {
      const hasOptions = getMoveOptions(square);
      if (hasOptions) setMoveFrom(square);
    }

    if (!moveFrom) {
      resetFirstMove(square);
      return;
    }

    if (!makeMove(moveFrom, square)) {
      resetFirstMove(square);
      return
    }

    setMoveFrom("");
    setOptionSquares({});
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
      position={game.fen()}
      onPieceDrop={onDrop}
      onSquareClick={onSquareClick}
      boardOrientation={orientation}
      customSquareStyles={{
        ...optionSquares,
      }}
    />
  </div>
}

export default Board;