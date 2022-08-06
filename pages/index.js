import Head from 'next/head';

import { Card } from '../components';

const insuranceDeals = [
  {
    id: '1',
    heading: 'Money.co.uk exclusive',
    url: '#',
    urlTitle: 'ManyPets Pet Insurance',
    imgUrl:
      'https://money.imgix.net/uswitch-assets-eu/amp/images/provider/logos/manypets.png?w=260&auto=format%2Ccompress',
    dealSpecs: [
      {
        small: 'New cover starts for pets aged from',
        big: '4 weeks',
      },
      {
        small: 'Maximum vet fees',
        big: '$15,0000 a year',
      },
      {
        small: 'Discounts',
        big: '15% multi-pet discount',
      },
    ],
    note: 'Over 500,000 pets covered. 21,000+ - 5 star reviews on Feefo. FREE unlimited video calls with a vet, 24/7 so you can get expert advice whenever you need it. Hassle-free claims – Online claims with no forms and ManyPets update you as your claim is settled.',
    eligibility: {
      maxPetValue: 'Unlimited',
      availableOnline: true,
      ukResident: true,
      maxCatAged: 'Unlimited',
      minCatAged: '4 weeks',
      maxDogAged: 'Unlimited',
      minDogAged: '4 weeks',
    },
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Component Practice</title>
      </Head>
      <main className="container">
        <div className="mt center">
          {insuranceDeals.map((deal) => {
            const {
              id,
              heading,
              url,
              urlTitle,
              imgUrl,
              dealSpecs,
              note,
              eligibility,
            } = deal;
            return (
              <Card
                key={id}
                title={heading}
                href={url}
                hrefTitle={urlTitle}
                imgUrl={imgUrl}
                dealSpecs={dealSpecs}
                note={note}
                eligibility={eligibility}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
