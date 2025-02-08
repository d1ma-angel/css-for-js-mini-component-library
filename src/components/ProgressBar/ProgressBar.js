/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  const style = STYLES[size];

  if (!style) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        '--padding': style.padding + 'px',
        '--border-radius': style.radius + 'px',
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar
          style={{
            '--width': value + '%',
            '--height': style.height + 'px',
          }}
        />
      </BarWrapper>
    </Wrapper>
  );
};

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 24,
    padding: 4,
    radius: 8,
  },
};

const Wrapper = styled.div`
  border-radius: var(--border-radius);
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const Bar = styled.div`
  height: var(--height);
  width: var(--width);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

const BarWrapper = styled.div`
  border-radius: 4px;

  /* Trim off corners when progress bar is near-full. */
  overflow: hidden;
`;

export default ProgressBar;
