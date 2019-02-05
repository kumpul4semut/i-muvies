import React from 'react';
import { Link } from 'react-router-dom';
const searchSuggest = ({ isActive, results, __construct }) => {
  return (
    <div
      className="search-suggest"
      style={{ display: isActive ? 'block' : 'none' }}
    >
      {results && results.length > 0 ? (
        <ul style={{ marginBottom: 0, zIndex: 250 }}>
          {results.splice(0, 10).map(r => (
            <li key={r.id} title={r.title}>
              <Link
                to={`/movie/search/${r.id}`}
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w92${
                    r.poster_path
                  })`
                }}
                className="thumb"
                onClick={() => __construct(r.id)}
              />
              <div className="ss-info">
                <Link
                  to={`/movie/search/${r.id}`}
                  className="ss-title"
                  onClick={() => __construct(r.id)}
                >
                  {r.title}{' '}
                  {r.release_date
                    ? `( ${r.release_date.split('-')[0]} )`
                    : null}
                </Link>
                <p>Rate: {r.popularity}</p>
              </div>
              <div className="clearfix" />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default searchSuggest;
