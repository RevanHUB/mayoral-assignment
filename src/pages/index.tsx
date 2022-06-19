import { NextPage } from "next";
import Head from 'next/head'
import Products from './components/productsContainer';

const HomePage: NextPage = () => {
  return <div className="Global">

    <Products />
  </div>;
};
  

export default HomePage;
