// This is a server component
export const metadata = {
  title: 'Your App Title',
  description: 'Your App Description',
};

import dynamic from 'next/dynamic';

const ClientComponent = dynamic(() => import('./ClientComponent'), { ssr: false });
const LOGIN = dynamic(()=> import('./loginPage'), {ssr: false});
const loginSelectPage = dynamic(()=> import('./loginSelectPage'), {ssr: false});
const DOMASTIC = dynamic(()=> import('./domasticRegister1'), {ssr: false});
const salar = dynamic(()=> import('./salarRegister'), {ssr: false});
const DOMASTIC2 = dynamic(()=> import('./domasticRegister2'), {ssr: false});

export default function Page() {
  return (
    <div>
      <LOGIN />
      {/* <Q /> */}
      {/* <ClientComponent /> */}
    </div>
  );
}