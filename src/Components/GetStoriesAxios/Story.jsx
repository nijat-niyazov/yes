import React from 'react';

const Link = ({ url, title }) => (
  <a href={url} target="_blank" rel="noreferrer">
    {title}
  </a>
);

const Story = ({ story: { id, by, title, kids, time, url } }) => {
  return (
    <div
      className="story"
      style={{
        display: 'block',
        margin: '20px',
        width: '500px',
        border: '1px solid black',
      }}
    >
      <div className="story-title">
        <Link url={url} title={title} />
      </div>
      <div className="story-info">
        <span>
          by
          <Link url={`https://news.ycombinator.com/user?id=${by}`} title={by} />
        </span>
        |
        <span>
          {new Date(time * 1000).toLocaleDateString('en-EN', {
            hour: 'numeric',
            minute: 'numeric',
          })}
        </span>
        |
        <span>
          <Link
            url={`https://news.ycombinator.com/item?id=${id}`}
            title={`${kids && kids.length > 0 ? kids.length : 0} comments`}
          />
        </span>
      </div>
    </div>
  );
};

export default Story;