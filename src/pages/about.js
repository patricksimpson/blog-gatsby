import React from 'react';
import Link from 'gatsby-link';

const About = () => (
  <div>
    <h1>Hey there!</h1>
    <p>I am a developer from Dayton, Ohio. Working at Sparkbox, I make web things.</p>
    <p>Contact:
       <ul>
        <li>
          <a href="https://twitter.com/patrexsimpson">@PaTRexSimpson</a>
        </li>
      </ul>
    </p>
    <Link to="/">Post Listing</Link>
  </div>
);

export default About;
