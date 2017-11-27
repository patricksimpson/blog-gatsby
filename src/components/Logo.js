import React from 'react';
import logo from '../images/ps-logo.png';

const Logo = () => (
  <img src={logo} alt='logo' title='logo' />
);

const LogoSVG = () => (
  <svg width="144px" height="119px" viewBox="0 0 144 119" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
    <title>sheild + PS</title>
    <desc>Created with Sketch.</desc>
    <defs>
      <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-1">
        <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
        <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.35 0" in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1"></feColorMatrix>
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
          <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>
      <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-2">
        <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
        <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.35 0" in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1"></feColorMatrix>
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
          <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" type="MSPage">
      <g id="sheild-+-PS" type="MSLayerGroup" transform="translate(-5.000000, 0.000000)">
        <polygon id="sheild" fill="#000000" filter="url(#filter-1)" type="MSShapeGroup" points="51 0 95.1672956 29.25 95.1672956 87.75 51 117 6.83270441 87.75 6.83270441 29.25 "></polygon>
        <text id="PS" stroke="#595959" stroke-width="0.5" filter="url(#filter-2)" type="MSTextLayer" font-family="Avenir Next" font-size="80.6074766" font-weight="bold" alignment="middle" line-spacing="93.4579439" letter-spacing="23.3644867">
          <tspan x="27" y="88" fill="#FFFFFF">P</tspan>
          <tspan x="101.953272" y="88" fill="#000000">S</tspan>
        </text>
      </g >
    </g >
  </svg >
);

export default Logo;
