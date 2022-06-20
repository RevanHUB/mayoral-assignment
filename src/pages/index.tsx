import { NextPage } from "next";
import Products from './components/productsContainer';

const HomePage: NextPage = () => {
  return <div className="Global">

    <Products />
  </div>;
};
  

export default HomePage;
