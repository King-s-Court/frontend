import Button, { ButtonVariant } from '@/components/Button'
import Head from 'next/head'

import Card from "@/components/Card";
import Badge from "@/components/Badge";
import Input from "@/components/Input";
import CustomTab from '@/components/CustomTab';

export default function Home() {
  const tabs = [
    {
      label: "Tab 1",
      Component: <div>Hello, I am tab 1</div>
    },
    {
      label: "Tab 2",
      Component: <div>Hello, I am tab 2</div>
    },
    {
      label: "Tab 3",
      Component: (
        <Button 
            variant={ButtonVariant.primary}
            onClick={(event) => console.log(event)}
          >
            Some Button
        </Button>
      )
    }
  ];

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
          <Button 
            variant={ButtonVariant.primary}
            onClick={(event) => console.log(event)}
          >
            Some Button
          </Button>
          <Card title={'play players'} image={'robot.png'} />
          <Badge backgroundColor={'#414493'} color={'#FCFCFA'}>
              <p>
                  Badge
              </p>
          </Badge>
          <Input type={"text"}></Input>
          <Input type={"password"}></Input>
          <CustomTab tabs={tabs} 
            styles={{backgroundColor: "red", color: "blue", selectBackgroundColor: "purple", innerDivBackgroundColor: "green"}}
          />
      </main>
    </>
  )
}
