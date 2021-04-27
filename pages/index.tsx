import Footer from '../components/Footer';
import Landing from '../components/Landing';
import Menu from '../components/Menu';
import Search from '../components/Search';

import styles from '../styles/index.module.scss';

const Home = () => {
  return (
    <>
      <Menu />
      <Landing />
      <Search />
      <Footer />
    </>
  )
}

export default Home;
