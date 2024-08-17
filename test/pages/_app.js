import "@/styles/globals.css";
import { AuthProvider } from '../src/context/AuthContext';
import { RegisterProvider } from "../src/context/RegisterContext";

export default function App({ Component, pageProps }) {
  return  (
    <AuthProvider>
      <RegisterProvider>
        <Component {...pageProps} />
      </RegisterProvider>
    </AuthProvider>
  )
}
