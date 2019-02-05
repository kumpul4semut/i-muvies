import React from 'react';
const movieDescription = ({ title, sinopsis, vote, ratingCount, children }) => (
  <div id="mv-info">
    <div
      itemScope=""
      itemType="http://schema.org/Movie"
      className="mvi-content"
    >
      <h3 itemProp="name" content="Split">
        {title}{' '}
        <div
          itemProp="aggregateRating"
          itemScope=""
          itemType="http://schema.org/AggregateRating"
          style={{ display: 'inline' }}
        >
          <meta itemProp="worstRating" content="1" />
          <meta itemProp="bestRating" content="10" />
          <div className="irank">
            <span
              itemProp="ratingValue"
              className="irank-voters"
              style={{ color: '#ff7676' }}
            >
              {vote}
            </span>
            <span itemProp="ratingCount" style={{ color: '#303030' }}>
              {ratingCount}
            </span>
          </div>
        </div>
      </h3>
      <span
        style={{
          display: 'block',
          borderBottom: '2px solid #c6aa28',
          marginTop: '5px'
        }}
      />
      <div
        itemProp="description"
        className="desc"
        style={{ marginTop: '1em', minHeight: '1em' }}
      >
        <span>{sinopsis}</span>
      </div>
      {children}
    </div>
    <div className="clearfix" />
    <span
      style={{
        display: 'block',
        borderBottom: '2px dashed #3c3c3c',
        marginTop: '1em',
        marginBottom: '1em'
      }}
    />
  </div>
);
export default movieDescription;
