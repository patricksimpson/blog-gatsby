import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.css';

const About = () => (
  <div>
    <h1>Hey, I'm Patrick! </h1>
    <h2 className="sub-line">Perhaps the coolest guy you'll ever encounter.</h2>
    <p>
      I'm a full-stack web developer from Ohio. I make the Internet at <a href="https://twitter.com/hearsparkbox">@hearsparkbox</a>.
      I'll be posting about developer things, primarily JavaScript, Emacs, and my life with four kids.
    </p>
    <p>If you wish, drop me a line on Twitter: <a href="https://twitter.com/patrexsimpson">@patrexsimpson</a></p>
    <Link to="/">Back to posts</Link>
    <Helmet>
      <title>About Patrick Simpson</title>
    </Helmet>
  </div>
);

export default About;
