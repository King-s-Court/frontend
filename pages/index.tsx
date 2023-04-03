import Button, { ButtonVariant } from '@/components/Button'
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
          <Button 
            variant={ButtonVariant.primary}
            // border='1px solid #414493' 
            // backgroundColor='#94944f' 
            // color='#2E2E31'
            onClick={(event) => console.log(event)}
            // disabled
          >
            Some Button
            {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20.9999 21L16.6499 16.65" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> */}

          </Button>
      </main>
    </>
  )
}
