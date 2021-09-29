import Head from 'next/head';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import { getProductsInCollection } from '../lib/shopify';

export default function Home({ products }) {
  return (
    <div className='text-xl'>
      <Head>
        <title>Welcome to FutureProof NFT Store Home Page</title>
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
        <meta
          http-equiv='Content-Type'
          content='text/html; charset=ISO-8859-1'
        />
        <meta
          name='description'
          content='Minimalistic eCommerce website presenting to you various works from the digital arts scene'
        />
        <meta property='og:title' content='Modern NFT Store' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='scramble-shop.vercel.app' />
        <meta
          property='og:description'
          content='Minimalistic eCommerce website presenting to you various works from the digital arts scene'
        />
        <meta property='og:locale' content='en_US' />
        <meta property='og:site_name' content='FutureProof Store' />
      </Head>
      <Hero />
      <ProductList products={products} />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();
  return {
    props: { products },
  };
}
