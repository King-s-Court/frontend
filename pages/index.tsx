import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kings Court</title>
        <meta name="description" content="Play chess against people online or AI!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="icon" />
      </Head>
      <main>
          <h1>
              Header1
          </h1>
          <h2>
              Header2
          </h2>
          <h3>
              Header3
          </h3>
          <h4>
              Header4
          </h4>
          <p>
              Paragraph
          </p>
          <div className={'subtitle'}>
              Subtitle
          </div>
      </main>
    </>
  )
}
