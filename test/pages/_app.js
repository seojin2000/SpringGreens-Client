import "@/styles/globals.css";
import { useEffect } from "react";
import { AuthProvider } from '../src/context/AuthContext';
import { RegisterProvider } from "../src/context/RegisterContext";

export default function App({ Component, pageProps }) {

   // Register service worker
   useEffect(() => {
    if (typeof window !== 'undefined') {
      // 클라이언트 사이드 코드
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/firebase-messaging-sw.js')
          .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
            // Firebase Messaging 관련 코드
          })
          .catch((error) => {
            console.error('Service Worker registration failed:', error);
          });
      } else {
        console.log('Service Worker not supported in this browser.');
      }
    }
  }, []);

  return  (
    <AuthProvider>
      <RegisterProvider>
        <Component {...pageProps} />
      </RegisterProvider>
    </AuthProvider>
  )
}
