// This is a server component
export const metadata = {
  title: 'Your App Title',
  description: 'Your App Description',
};

import dynamic from 'next/dynamic';

const ClientComponent = dynamic(() => import('./ClientComponent'), { ssr: false });
const loginPage = dynamic(()=> import('./loginPage'), {ssr: false});
const loginSelectPage = dynamic(()=> import('./loginSelectPage'), {ssr: false});
const domasticRegister1 = dynamic(()=> import('./domasticRegister1'), {ssr: false});
const Q4 = dynamic(()=> import('./salarRegister'), {ssr: false});

export default function Page() {
  return (
    <div>
      <Q4 />
      {/* <Q /> */}
      {/* <ClientComponent /> */}
    </div>
  );
}