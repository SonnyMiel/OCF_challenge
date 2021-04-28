import Footer from '../components/Footer';
import Landing from '../components/Landing';
import Navbar from '../components/Navbar/navbar';
import Search from '../components/Search';

import styles from '../styles/index.module.scss';

const Home = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <Search />
      <Footer />
    </>
  )
}

export default Home;
