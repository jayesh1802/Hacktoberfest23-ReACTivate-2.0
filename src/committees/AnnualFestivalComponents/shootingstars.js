import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const randomRange = (min, max) => {
  return min + Math.floor(Math.random() * (max - min + 1));
};

const fall = keyframes`
  to {
    transform: translate3d(-30em, 0, 0);
  }
`;

const tailFade = keyframes`
  0%, 50% {
    width: var(--star-tail-length);
    opacity: 1;
  }

  70%, 80% {
    width: 0;
    opacity: 0.4;
  }

  100% {
    width: 0;
    opacity: 0;
  }
`;

const blink = keyframes`
  50% {
    opacity: 0.6;
  }
`;

const Star = styled.div`
  --star-color: var(--primary-color);
  --star-tail-length: 6em;
  --star-tail-height: 2px;
  --star-width: calc(var(--star-tail-length) / 6);
  --fall-duration: 9s;
  --tail-fade-duration: var(--fall-duration);
  --top-offset: 0;
  --fall-delay: 0;

  position: absolute;
  top: var(--top-offset);
  left: 0;
  width: var(--star-tail-length);
  height: var(--star-tail-height);
  color: var(--star-color);
  background: linear-gradient(45deg, currentColor, transparent);
  border-radius: 50%;
  filter: drop-shadow(0 0 6px currentColor);
  transform: translate3d(104em, 0, 0);
  animation: ${fall} var(--fall-duration) var(--fall-delay) linear infinite, ${tailFade} var(--tail-fade-duration) var(--fall-delay) ease-out infinite;

  @media screen and (max-width: 750px) {
    animation: ${fall} var(--fall-duration) var(--fall-delay) linear infinite;
  }

  &::before, &::after {
    position: absolute;
    content: '';
    top: 0;
    left: calc(var(--star-width) / -2);
    width: var(--star-width);
    height: 100%;
    background: linear-gradient(45deg, transparent, currentColor, transparent);
    border-radius: inherit;
    animation: ${blink} 2s linear infinite;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

const ShootingStars = () => {
  const starCount = 50;
  const stars = [];

  for (let i = 1; i <= starCount; i++) {
    stars.push(
      <Star key={i} />
    );
  }

  return (
    <div className="stars">
      {stars}
    </div>
  );
};

export default ShootingStars;
