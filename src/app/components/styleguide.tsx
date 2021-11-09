import React from 'react';

function Styleguide() {
  return (
    <div>
      <h1>Headline 1</h1>
      <h2>Headline 2</h2>
      <h3>headline 3</h3>
      <h4>Headline 4</h4>
      <h5>Headline 5</h5>
      <div>
        <div
          style={{
            display: 'flex',
            gap: 5,
          }}
        >
          <div
            style={{
              width: 61,
              height: 61,
              background: 'var(--color-primary)',
              borderRadius: '50%',
            }}
          />
          <div
            style={{
              width: 61,
              height: 61,
              background: 'var(--color-secondary)',
              borderRadius: '50%',
            }}
          />
          <div
            style={{
              width: 61,
              height: 61,
              background: 'var(--color-background)',
              borderRadius: '50%',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Styleguide;
