/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { css } from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return (
    <>
      <VisuallyHidden>
        <label>Loading...</label>
      </VisuallyHidden>
      <ProgressWrapper value={value} size={size} max={100} />
    </>
  );
};

const borderRadius = {
  large: '8px',
  medium: '4px',
  small: '4px',
};

const sizeStyles = (size) =>
  ({
    large: css`
      padding: 4px;
      height: 24px;
    `,
    medium: css``,
    small: css`
      height: 8px;
    `,
  }[size]);

const statusStyles = (inProgress) => {
  if (inProgress) {
    return css`
      &::-webkit-progress-value {
        border-radius: 4px 0 0 4px;
      }

      &::-moz-progress-bar {
        border-radius: 4px 0 0 4px;
      }
    `;
  } else {
    return css`
      &::-webkit-progress-value {
        border-radius: 4px;
      }

      &::-moz-progress-bar {
        border-radius: 4px;
      }
    `;
  }
};

const ProgressWrapper = styled.progress.attrs(({ value, max }) => ({
  'aria-busy': value < max ? 'true' : 'false',
  'aria-valuenow': value,
  value: value,
  max: max,
}))`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  height: 12px;
  border: none;
  border-radius: ${({ size }) => borderRadius[size]};
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  &::-webkit-progress-bar {
    background-color: transparent;
    border-radius: 4px;
  }

  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
  }

  &::-moz-progress-bar {
    background-color: ${COLORS.primary};
  }

  ${({ value, max, size }) => statusStyles(value < max, size)}
  ${({ size }) => sizeStyles(size)}
`;

export default ProgressBar;
