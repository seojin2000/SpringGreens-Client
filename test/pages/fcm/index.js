import dynamic from 'next/dynamic';

const FirebaseComponent = dynamic(() => import('../../pages/firebase'), {
  ssr: false, // Only load on the client-side if necessary
});

const FirebasePage = () => (
  <div>
    <FirebaseComponent />
  </div>
);

export default FirebasePage;
