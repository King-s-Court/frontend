import Head from 'next/head'
import Game from "@/layouts/Game";

export default function GamePage() {
  const gameId = 1;

  return (
    <>
      <Head>
        <title>Kings Court</title>
        <meta name="description" content="Play chess against people online or AI!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Game gameId={gameId} />
      </main>
    </>
  )
}
