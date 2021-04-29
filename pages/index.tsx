import { useEffect } from 'react';
import { GetServerSideProps } from 'next';

import client from 'api/apollo-client';
import { query } from 'api/anilist';
import Footer from 'components/Footer/footer';
import Landing from 'components/Landing/landing';
import Navbar from 'components/Navbar/navbar';
import Search from 'components/Search/search';
import { getSeason, getNextSeason } from 'utils/seasons';

const Home = ({trending, season, nextSeason, popular, top}) => {
  return (
    <>
      <Navbar />
      <Landing />
      <Search medias={{trending, season, nextSeason, popular, top}}/>
      <Footer />
    </>
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const date = new Date();
  const [season, index] = getSeason(date);
  const nextSeason = getNextSeason(index);
  const { data } = await client.query({
    query,
    variables: {
      search: undefined,
      genre: undefined,
      tag: undefined,
      nextSeason,
      nextYear: date.getFullYear(),
      season,
      seasonYear: date.getFullYear(),
      type: "ANIME",
    }
  });

  return {
    props: {
      trending: data.trending.media,
      season: data.season.media,
      nextSeason: data.nextSeason.media,
      popular: data.popular.media,
      top: data.top.media
    }
  }
}
