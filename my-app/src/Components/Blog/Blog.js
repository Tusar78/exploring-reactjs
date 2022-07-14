import React from 'react';

const blogStyle = {
  border: '1px solid yellow',
  padding: '1rem',
  margin: '1rem',
  borderRadius: '.5rem'
}

const Blog = (props) => {
  const {heading, author} = props;
  return (
    <div>
      <article style={blogStyle}>
        <h2>{heading}</h2>
        <span>-by {author}</span>
      </article>
    </div>
  );
};

export default Blog;