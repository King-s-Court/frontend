import Head from 'next/head'

import Board from "@/components/Board/Board";

export default function Game() {
  const gameId = 1;

  return (
    <>
      <Head>
        <title>Kings Court</title>
        <meta name="description" content="Play chess against people online or AI!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Board gameId={gameId} style={'classic'}/>
      </main>
    </>
  )
}
