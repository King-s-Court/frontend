import {HttpTransportType, HubConnectionBuilder, LogLevel} from "@microsoft/signalr";
import {useState} from "react";

async function Connection() {
  const [connection, setConnection] = useState<HubConnectionBuilder>(null);

  async function buildConnection() {
    let connection = new HubConnectionBuilder()
      .withUrl("https://localhost:7135/chessHub", {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets
      })
      .configureLogging(LogLevel.Information)
      .withAutomaticReconnect()
      .build();

    connection.on("ReceiveMove", receiveMove);
  }

  async function sendMove(move, gameId) {
    if (connection) {
      await connection.invoke("SendMove", {move, gameId});
    }
  }
  async function joinGame() {
    if (connection) {
      await connection.invoke("JoinGame", {gameId});
    }
  }
  async function receiveMove(move) {
    // Handle received move here
    console.log("Received move: ", move);
  }
}

export default Connection;