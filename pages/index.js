import Head from 'next/head';
import Image from 'next/image';

import { AiOutlineCheck } from 'react-icons/ai';

import { Card, Link, Button, Text, Accordion } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Component Practice</title>
      </Head>
      <main className="container">
        <div className="mt center">
          <Card
            border="solid 2px var(--clr-dark-blue)"
            title="Money.co.uk exclusive"
            titleColor="var(--clr-dark-blue)"
            href="#"
            width={60}
          >
            <div className="link-box">
              <Link href="#" toRight="7.75rem" toBottom="2rem">
                ManyPets Pet Insurance
              </Link>
            </div>
            <div className="deal">
              <div className="deal__image">
                <Image
                  src="https://money.imgix.net/uswitch-assets-eu/amp/images/provider/logos/manypets.png?w=260&auto=format%2Ccompress"
                  alt="ManyPets Logo"
                  width={90}
                  height={90}
                />
              </div>
              <Card
                width={14}
                margin="0.5rem 0.5rem 1rem 0.5rem"
                flexColumn
                border="none"
                borderBottom="solid 4px #cc6aa0"
                background="#fcf3f8"
              >
                <Text as="span" displayBlock center size={0.6}>
                  New cover starts for pets aged from <AiOutlineCheck />
                </Text>
                <Text as="span" displayBlock center>
                  4 weeks
                </Text>
              </Card>
              <Card
                width={14}
                margin="0.5rem 0.5rem 1rem 0.5rem"
                flexColumn
                border="none"
                borderBottom="solid 4px #cc6aa0"
                background="#fcf3f8"
              >
                <Text as="span" displayBlock center size={0.6}>
                  Maximum vet fees
                </Text>
                <Text as="span" displayBlock center>
                  $15,000
                </Text>
              </Card>
              <Card
                width={14}
                margin="0.5rem 0.5rem 1rem 0.5rem"
                flexColumn
                border="none"
                borderBottom="solid 4px #cc6aa0"
                background="#fcf3f8"
              >
                <Text as="span" displayBlock center size={0.6}>
                  New cover starts for pets aged from
                </Text>
                <Text as="span" displayBlock center>
                  4 weeks
                </Text>
              </Card>
              <div className="deal__button">
                <Button color="gradient" rounded="20rem">
                  View deal
                </Button>
              </div>
            </div>
            <div className="note">
              <Text
                as="p"
                size={0.55}
                color="var(--clr-grey)"
                toRight="7.75rem"
              >
                Over 500,000 pets covered. 21,000+ - 5 star reviews on Feefo.
                FREE unlimited video calls with a vet, 24/7 so you can get
                expert advice whenever you need it. Hassle-free claims – Online
                claims with no forms and ManyPets update you as your claim is
                settled.
              </Text>
            </div>
            <Accordion center padding="0.75rem 0">
              <Card background="#fff" border="none">
                <Text as="h4">Hello there</Text>
              </Card>
            </Accordion>
          </Card>
        </div>
      </main>
    </>
  );
}
