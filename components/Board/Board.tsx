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
  const [moveFrom, setMoveFrom] = useState<Square | null>(null);
  const [optionSquares, setOptionSquares] = useState({});
  const [orientation, setOrientation] = useState<BoardOrientation>("white");
  const [lastMove, setLastMove] = useState<{ from: Square; to: Square } | null>(null);

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
    if (color === "w" || color === "b") {
      return color === orientation[0];
    }
    return color === orientation;
  }
  function getSquarePiece(square: Square) {
    return game.get(square);
  }

  function makeMove(sourceSquare: Square, targetSquare: Square) {
    if(!isPlayer(getSquarePiece(sourceSquare)?.color)) return false;
    const move = {
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    }

    try {
      game.move(move);
      setGame(new Chess(game.fen()));
      setMoveFrom(null);
      setOptionSquares({});
      setLastMove({from: sourceSquare, to: targetSquare}); // Store the latest move
      return true;
    } catch {
      return false
    }
  }

  function onDrop(sourceSquare: Square, targetSquare: Square) {
    return makeMove(sourceSquare, targetSquare);
  }

  function getMoveOptions(square: Square) {
    if (!getSquarePiece(square) || !isPlayer(getSquarePiece(square).color)) {
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

    setMoveFrom(null);
    setOptionSquares({});
  }

  const lastMoveStyles: Record<string, { background: string }> = lastMove
    ? {
      [lastMove.from]: {background: "rgba(0, 0, 255, 0.4)"},
      [lastMove.to]: {background: "rgba(0, 0, 255, 0.4)"},
    }
    : {};

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
        ...lastMoveStyles
      }}
    />
  </div>
}

export default Board;