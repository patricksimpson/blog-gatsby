import React from 'react';
import Link from 'gatsby-link';

const About = () => (
  <div>
    <h1>Hey, I am Patrick! </h1>
    <h2>Perhaps the coolest guy you'll ever encounter.</h2>
    <p>
      I'm a full-stack web developer from Ohio. I make the Internet at <a href="https://twitter.com/hearsparkbox">@hearsparkbox</a>.
       I'll be posting about developer things, but primarily, JavaScript, Emacs, and my life with four kids.
    </p>
    <p>If you wish, drop me a line on Twitter: <a href="https://twitter.com/patrexsimpson">@patrexsimpson</a></p>
    <Link to="/">Post Listing</Link>
  </div>
);

export default About;
