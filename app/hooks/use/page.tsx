'use client'

import { use, Suspense } from 'react'

const usePage = () => {
  const fetchData = async () => {
    const res = await fetch('https://catfact.ninja/fact',
      { cache: 'no-cache' }
    )
    return res.json()
  }

  const FactItem = () => {
    const fact = use(fetchData())
    return (
      <div className='bg-green-50 shadow-md p-4 my-6 rounded-lg '>
        <h2 className='text-xl font-bold'>{fact.fact}</h2>
      </div>
    )
  }

  return (
    <Suspense
      fallback={
        <h2 className='text-2xl text-center font-bold mt-5'>Loading...</h2>
      }
    >
      <title>Facts</title>
      <meta name='description' content='facts' />
      <meta name='keywords' content='facts' />
      <FactItem />
    </Suspense>
  );
};


export default usePage;
