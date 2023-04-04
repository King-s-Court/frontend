import Head from 'next/head'

import Card from "@/components/Card";
import Badge from "@/components/Badge";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kings Court</title>
        <meta name="description" content="Play chess against people online or AI!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
          <Card title={'play players'} image={'robot.png'} />
          <Badge backgroundColor={'#414493'} color={'#FCFCFA'}>
              <p>
                  Badge
              </p>
          </Badge>
      </main>
    </>
  )
}
