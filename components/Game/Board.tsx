import { Chessboard } from "react-chessboard";
import { useEffect, useState } from "react";
import { Chess, Square, Move } from "chess.js";
import { BoardOrientation } from "react-chessboard/dist/chessboard/types";
import signalRService from "./../../logic/connection";

type Props = {
  gameId: number;
}

export type NewMove = {
  from: Square,
  to: Square,
  promotion?: string | undefined,
}

const Board = ({ gameId }: Props) => {
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
    startConnection();
  }, []);

  useEffect(() => {
    getGame();
  }, []);

  function startConnection() {
    signalRService.startConnection(gameId, onMoveReceived, onPlayerJoined);
  }

  function onMoveReceived(fen: string) {
    const chess = new Chess();
    chess.load(fen);
    setGame(chess);

    // Parse the move details from the FEN string
    const fenParts = fen.split(" ");
    const moveFrom = fenParts[1].slice(0, 2) as Square;
    const moveTo = fenParts[1].slice(2, 4) as Square;

    // Update the moveFrom and lastMove state
    setMoveFrom(moveFrom);
    setLastMove({ from: moveFrom, to: moveTo });
  }

  function onPlayerJoined(connectionId: string) {
    console.log(connectionId);
  }

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
    if (!isPlayer(getSquarePiece(sourceSquare)?.color)) return false;
    const move: NewMove = {
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    };

    try {
      game.move(move);
      setGame(new Chess(game.fen()));
      setMoveFrom(null);
      setOptionSquares({});
      setLastMove({ from: sourceSquare, to: targetSquare });
      signalRService.sendMove(gameId.toString(), game.fen());
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

    if (!moveFrom || !makeMove(moveFrom, square)) {
      resetFirstMove(square);
      return;
    }

    setMoveFrom(null);
    setOptionSquares({});
  }

  const lastMoveStyles: Record<string, { background: string }> = lastMove
    ? {
      [lastMove.from]: { background: "rgba(0, 0, 255, 0.4)" },
      [lastMove.to]: { background: "rgba(0, 0, 255, 0.4)" },
    }
    : {};

  return <div className={'board'}>
    <Chessboard
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