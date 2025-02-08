import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = STYLES[size];

  if (!style) {
    throw new Error(`Unknown size passed to IconInput: ${size}`);
  }

  return (
    <Wrapper
      style={{
        '--width': width + 'px',
        '--border-bottom': style.border + `px solid ${COLORS.black}`,
        '--gap': style.gap + 'px',
        '--padding': style.padding + 'px 0',
        '--border-radius': style.borderRadius + 'px',
        '--outline-width': style.outlineWidth + 'px',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <Icon id={icon} size={style.iconSize} />
      <Input
        placeholder={placeholder}
        style={{
          '--font-size': style.fontSize + 'rem',
        }}
      />
    </Wrapper>
  );
};

const STYLES = {
  small: {
    iconSize: 16,
    fontSize: 14 / 16,
    padding: 2,
    border: 1,
    borderRadius: 1,
    outlineWidth: 1,
    gap: 8,
  },
  large: {
    iconSize: 24,
    fontSize: 18 / 16,
    padding: 6,
    border: 2,
    borderRadius: 2,
    outlineWidth: 2,
    gap: 12,
  },
};

const Wrapper = styled.label`
  display: flex;
  gap: var(--gap);
  width: var(--width);
  border-bottom: var(--border-bottom);
  padding: var(--padding);
  color: ${COLORS.gray700};
  border-radius: var(--border-radius);

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline-width: var(--outline-width);
    outline-offset: 2px;
    outline-color: ${COLORS.primary};
    outline-style: solid;
  }
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: var(--font-size);
  font-weight: 700;
  outline: none;
  color: ${COLORS.gray700};

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  ${Wrapper}:hover > &::placeholder {
    color: ${COLORS.black};
  }
`;

export default IconInput;
