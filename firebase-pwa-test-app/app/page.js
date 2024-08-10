// This is a server component
export const metadata = {
  title: 'Your App Title',
  description: 'Your App Description',
};

import dynamic from 'next/dynamic';

const ClientComponent = dynamic(() => import('./ClientComponent'), { ssr: false });
const Q = dynamic(()=> import('./Q'), {ssr: false});
const Q2 = dynamic(()=> import('./Q2'), {ssr: false});
const Q3 = dynamic(()=> import('./Q3'), {ssr: false});

export default function Page() {
  return (
    <div>
      <Q3 />
      {/* <Q /> */}
      {/* <ClientComponent /> */}
    </div>
  );
}