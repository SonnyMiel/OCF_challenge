import { GetServerSideProps } from "next";

import client from "api/apollo-client";
import { getMedias, getGenres } from "api/anilist";

import Footer from "components/Footer/footer";
import Landing from "components/Landing/landing";
import Navbar from "components/Navbar/navbar";
import Search from "components/Search/search";

import { getSeason, getNextSeason } from "utils/seasons";

const Home = ({ trending, season, nextSeason, popular, top, genres, tags }) => {
  return (
    <>
      <Navbar />
      <Landing />
      <Search
        medias={{ trending, season, nextSeason, popular, top }}
        genres={genres}
        tags={tags}
      />
      <Footer />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const date = new Date();
  const [season, index] = getSeason(date);
  const nextSeason = getNextSeason(index);
  const mediasPromise = client.query({
    query: getMedias,
    variables: {
      search: undefined,
      genre: undefined,
      tag: undefined,
      nextSeason,
      nextYear: date.getFullYear(),
      season,
      seasonYear: date.getFullYear(),
    },
  });
  const genresPromise = client.query({
    query: getGenres,
  });

  const [medias, genres] = await Promise.all([mediasPromise, genresPromise]);
  const tags = genres.data.MediaTagCollection.map((tag) => tag.name);

  return {
    props: {
      trending: medias.data.trending,
      season: medias.data.season,
      nextSeason: medias.data.nextSeason,
      popular: medias.data.popular,
      top: medias.data.top,
      genres: genres.data.GenreCollection,
      tags: tags,
    },
  };
};
