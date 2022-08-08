import Head from 'next/head';

import { Card } from '../components';
import { deals } from '../data/deals';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Component Practice</title>
      </Head>
      <main className="container">
        <div className="mt center">
          {deals.map((deal) => {
            return <Card key={deal.id} {...deal} />;
          })}
        </div>
      </main>
    </>
  );
}
