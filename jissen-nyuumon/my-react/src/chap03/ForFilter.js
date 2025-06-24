import React from 'react';

export default function ForFilter({ src }) {
  const lowPrice = src.filter(book => book.price < 3500);
  return (
  <dl>
    {lowPrice.map(elem => (
      <React.Fragment key={elem.isbn}>
        <dt>
          <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
              {elem.title}（{elem.price}円）
          </a>
        </dt>
        <dd>{elem.summary}</dd>
      </React.Fragment>
    ))}
  </dl>
  );
}