import React from 'react';
import Link from 'gatsby-link';

const About = () => (
  <div>
    <h1>Hey, I am Patrick! </h1>
    <h2>Perhaps the coolest guy you'll ever encounter.</h2>
    <p>I'm a full-stack web developer from Ohio.</p>
    <p>I make the Internet at <a href="https://twitter.com/hearsparkbox">@hearsparkbox</a>.</p>
    <p>Here's a list of my favorite things:
      <ul>
        <li> God, my wife, and my four children. </li>
        <li> Coffee. </li>
        <li> JavaScript. </li>
        <li> Emacs (evil mode, of course). </li>
      </ul>
    </p>
    <p>Drop me a line on Twitter: <a href="https://twitter.com/patrexsimpson">@patrexsimpson</a></p>
    <Link to="/">Post Listing</Link>
  </div>
);

export default About;
