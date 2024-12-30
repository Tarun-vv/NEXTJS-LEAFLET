'use client';

import dynamic from 'next/dynamic';

// Dynamically import the Map component
const Map = dynamic(() => import('./components/Map'), { ssr: false });

function Page() {
  return (
    <div>
      <Map />
    </div>
  );
}

export default Page;
