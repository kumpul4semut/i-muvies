import React from 'react';
import 'video-react/dist/video-react.css';

import { Player, LoadingSpinner } from 'video-react';

import {
  MainContent,
  BreadCum,
  BreadCumItem,
  MovieDescription,
  MdescBody,
  MdescBodyLeft,
  MdescBodyItem
} from '../modules';
import { Redirect } from 'react-router-dom';
import { buildBread } from './Helpers';
import Trailer from './Trailer';

const videoPlayer = ({ movie, actors, relativeUrl, type, src }) => {
  const { isLoading, response } = movie;

  let rendered = <Redirect to="/" />;
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

          {type === 'movie' ? (
            <Player
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              autoPlay={true}
            >
              <LoadingSpinner />
            </Player>
          ) : (
            <Trailer src={src} />
          )}

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
            </MdescBody>
          </MovieDescription>
        </MainContent>
      </MainContent>
    );
  }

  return rendered;
};

export default videoPlayer;
