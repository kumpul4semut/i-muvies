import React from 'react';
import Video from './Video';

import {
  MainContent,
  BreadCum,
  BreadCumItem,
  MovieDescription,
  MdescBody,
  MdescBodyRight,
  MdescBodyLeft,
  MdescBodyItem
} from '../modules';
import { buildBread } from './Helpers';
const movieDetails = ({ movie, actors, relativeUrl }) => {
  const { isLoading, response } = movie;
  let rendered = <div className="loadinghdo" />;

  if (!isLoading && response) {
    let cast = <div className="loadinghdo" />;
    let director = '';

    if (!actors.isLoading) {
      if (actors.response && actors.response.cast) {
        cast = (
          <MdescBodyItem
            title="Actors"
            data={actors.response.cast.splice(0, 8)}
          />
        );
        director = (
          <MdescBodyItem
            title="Director"
            data={actors.response.crew.splice(0, 1)}
          />
        );
      } else {
        return cast;
      }
    }
    const bread = buildBread(relativeUrl);

    return (
      <MainContent detail>
        <MainContent category>
          <BreadCum>
            <BreadCumItem href="/" name="Home" />
            <BreadCumItem href="/" name={bread.default} />
            <BreadCumItem href={bread.link} name={bread.name} />

            <BreadCumItem
              active={true}
              href={relativeUrl}
              name={`${response.title}`}
            />
          </BreadCum>

          <Video
            poster={response.backdrop_path}
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
          <MovieDescription
            title={response.title}
            sinopsis={response.overview}
            vote={response.vote_average}
            ratingCount={response.vote_count}
          >
            <MdescBody img={response.backdrop_path}>
              <MdescBodyLeft>
                <MdescBodyItem title="Genres" data={response.genres} />
                <MdescBodyItem
                  title="Produksi"
                  data={response.production_companies}
                />

                {director}
                {cast}
              </MdescBodyLeft>
              <MdescBodyRight>
                <MdescBodyItem title="Duration">
                  {response.runtime} Minute
                </MdescBodyItem>
                <MdescBodyItem title="Release Date">
                  {response.release_date}
                </MdescBodyItem>
                <MdescBodyItem
                  title="Countries"
                  data={response.production_countries}
                />
              </MdescBodyRight>
            </MdescBody>
          </MovieDescription>
        </MainContent>
      </MainContent>
    );
  }

  return rendered;
};

export default movieDetails;
