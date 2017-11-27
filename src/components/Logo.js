import React from 'react';
import logo from '../images/ps-logo.png';
import { css } from 'glamor';

const noMargin = css({ marginBottom: '0', minWidth: '144px' });

const Logo = () => (
  <img src={logo} alt='logo' title='logo' className={noMargin} />
);

const LogoSVG = () => (
  <svg width="143" height="119" viewBox="0 0 143 119" >
    <title>
      sheild + PS
  </title>
    <defs>
      <path id="b" d="M51 0l44.167 29.25v58.5L51 117 6.833 87.75v-58.5z" />
      <filter x="-2%" y="-.9%" width="103.9%" height="103.4%" filterUnits="objectBoundingBox" id="a">
        <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowBlurOuter1" />
      </filter>
      <path d="M76.374 48.502c0 3.332-.618 6.14-1.854 8.424-1.236 2.284-2.9 4.124-4.997 5.52-2.096 1.4-4.514 2.42-7.255 3.065-2.74.645-5.59.968-8.544.968h-6.852V88H33.088V30.93h20.958c3.117 0 6.032.31 8.746.927 2.714.618 5.078 1.612 7.094 2.982 2.015 1.37 3.6 3.17 4.755 5.4 1.157 2.23 1.734 4.984 1.734 8.262zm-13.783.08c0-1.343-.268-2.444-.806-3.304-.537-.86-1.262-1.532-2.176-2.015-.913-.484-1.948-.806-3.103-.967-1.156-.162-2.35-.242-3.587-.242h-6.046v13.46h5.804c1.29 0 2.526-.106 3.708-.32 1.182-.216 2.243-.592 3.184-1.13.94-.537 1.68-1.25 2.216-2.136.538-.887.807-2.002.807-3.345z" id="d" />
      <filter x="-5.2%" y="-2.2%" width="110.4%" height="107.9%" filterUnits="objectBoundingBox" id="c">
        <feMorphology radius=".25" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1" />
        <feOffset dy="1" in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowBlurOuter1" />
      </filter>
      <path d="M138.19 45.762c-1.184-1.505-2.73-2.7-4.636-3.587-1.908-.887-3.75-1.33-5.522-1.33-.913 0-1.84.08-2.78.24-.94.163-1.788.472-2.54.928-.752.457-1.384 1.048-1.894 1.774-.51.725-.766 1.652-.766 2.78 0 .968.202 1.774.605 2.42.403.644.994 1.208 1.773 1.692.78.482 1.706.926 2.78 1.33 1.076.402 2.285.818 3.628 1.248 1.935.645 3.95 1.357 6.046 2.136 2.096.78 4.003 1.814 5.723 3.104 1.72 1.29 3.144 2.888 4.272 4.796 1.128 1.908 1.692 4.285 1.692 7.134 0 3.278-.605 6.112-1.814 8.504-1.21 2.39-2.835 4.366-4.877 5.924-2.04 1.56-4.378 2.714-7.01 3.466-2.635.753-5.348 1.13-8.143 1.13-4.084 0-8.034-.713-11.85-2.137-3.815-1.424-6.985-3.453-9.51-6.086l9.027-9.19c1.397 1.72 3.238 3.157 5.522 4.312 2.284 1.156 4.554 1.733 6.81 1.733 1.022 0 2.016-.107 2.984-.322.967-.215 1.813-.564 2.54-1.048.724-.484 1.302-1.13 1.732-1.935.43-.806.645-1.773.645-2.9 0-1.076-.27-1.99-.806-2.742-.537-.752-1.302-1.438-2.297-2.056-.994-.618-2.23-1.182-3.708-1.692-1.477-.51-3.157-1.062-5.038-1.653-1.827-.59-3.613-1.29-5.36-2.096-1.746-.805-3.305-1.84-4.675-3.102-1.37-1.263-2.472-2.794-3.305-4.595-.833-1.8-1.25-3.99-1.25-6.57 0-3.17.645-5.884 1.935-8.14 1.29-2.258 2.983-4.11 5.078-5.562 2.096-1.45 4.46-2.512 7.094-3.183 2.633-.672 5.293-1.008 7.98-1.008 3.224 0 6.516.59 9.874 1.772 3.36 1.183 6.3 2.93 8.827 5.24l-8.786 9.27z" id="f" />
      <filter x="-5.2%" y="-2.1%" width="110.3%" height="107.5%" filterUnits="objectBoundingBox" id="e">
        <feMorphology radius=".25" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1" />
        <feOffset dy="1" in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowBlurOuter1" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g fill="#000" transform="translate(-5)">
        <use filter="url(#a)" href="#b" />
        <use href="#b" />
      </g>
      <g transform="translate(-5)">
        <use fill="#000" filter="url(#c)" href="#d" />
        <use fill="#FFF" href="#d" />
      </g>
      <g fill="#000" transform="translate(-5)">
        <use filter="url(#e)" href="#f" />
        <use href="#f" />
      </g>
    </g>
  </svg>
);

export default LogoSVG;
