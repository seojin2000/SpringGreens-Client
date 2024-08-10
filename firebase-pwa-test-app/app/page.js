// This is a server component
export const metadata = {
  title: 'Your App Title',
  description: 'Your App Description',
};

import dynamic from 'next/dynamic';

const ClientComponent = dynamic(() => import('./ClientComponent'), { ssr: false });
const Q = dynamic(()=> import('./loginPage'), {ssr: false});
const Q2 = dynamic(()=> import('./loginSelectPage'), {ssr: false});
const Q3 = dynamic(()=> import('./domasticRegister1'), {ssr: false});

export default function Page() {
  return (
    <div>
      <Q2 />
      {/* <Q /> */}
      {/* <ClientComponent /> */}
    </div>
  );
}