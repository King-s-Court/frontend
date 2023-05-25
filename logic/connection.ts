import { NewMove } from "@/components/Game/Board";
import { HttpTransportType, HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { Move } from "chess.js";

const signalRService = {
  connection: null as HubConnection | null,

  startConnection: (gameId: number, onMoveReceived: (fen: string) => void, onPlayerJoined: (connectionId: string) => void) => {
    signalRService.connection = new HubConnectionBuilder()
      .withUrl("https://localhost:7135/chessHub",
        {
          transport: HttpTransportType.WebSockets,
        })
      .configureLogging(LogLevel.Information)
      .withAutomaticReconnect()
      .build();

    signalRService.connection.start()
      .then(() => {
        signalRService.joinGame(gameId.toString());
        signalRService.registerMoveReceivedHandler(onMoveReceived);
        signalRService.registerPlayerJoinedHandler(onPlayerJoined);
      })
      .catch(error => console.error('Error starting SignalR connection:', error));
  },

  joinGame: (gameId: string) => {
    console.log(signalRService.connection?.state)
    signalRService.connection?.invoke('JoinGame', gameId)
      .catch(error => console.error('Error joining game:', error));
  },

  sendMove: (gameId: string, move: NewMove) => {
    signalRService.connection?.invoke('SendMove', gameId, move)
      .catch(error => console.error('Error sending move:', error));
  },

  registerMoveReceivedHandler: (onMoveReceived: (fen: string) => void) => {
    signalRService.connection?.on('MoveReceived', (fen: string) => {
      onMoveReceived(fen);
    });
  },

  registerPlayerJoinedHandler: (onPlayerJoined: (connectionId: string) => void) => {
    signalRService.connection?.on('PlayerJoined', (connectionId: string) => {
      onPlayerJoined(connectionId);
    });
  }
};

export default signalRService;
