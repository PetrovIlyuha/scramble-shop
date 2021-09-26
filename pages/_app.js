import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout';
import ShopContextProvider from '../context/ShopContext';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ShopContextProvider>
      <Layout>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </ShopContextProvider>
  );
}

export default MyApp;
