import React from 'react';
import Link from 'gatsby-link';

const About = () => (
  <div>
    <h1>Hey there!</h1>
    <p>I'm a full-stack web developer from Ohio.</p>
    <p>Twitter: <a href="https://twitter.com/patrexsimpson">@patrexsimpson</a></p>
    <Link to="/">Post Listing</Link>
  </div>
);

export default About;
