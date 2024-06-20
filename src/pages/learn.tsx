import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

const LearnView = dynamic(() => import('~/views/Learn'), { ssr: false });

const LearnPage = () => {
  return (
    <div>
      <h1>Learn Page</h1>
      <Suspense>
      <LearnView/>
      </Suspense>
    </div>
  );
};

export default LearnPage;
