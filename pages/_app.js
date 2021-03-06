import { useRouter } from 'next/router';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'tailwindcss/tailwind.css';
import '../styles/main.css';
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
