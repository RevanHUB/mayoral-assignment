import { NextPage } from "next";
import Products from './components/productsContainer.js';
import axios from 'axios';

const HomePage: NextPage = () => {
  return <div className="Global">
    <Products />
  </div>;
};
  

export default HomePage;
